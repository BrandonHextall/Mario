import Enemy from "./entities/enemies/enemy.mjs";
import Item from "./items/item.mjs";
import Tile from "./tile.mjs";
import Mushroom from "./items/mushroom.mjs";
import Flower from "./items/flower.mjs";
import Koopa from "./entities/enemies/koopa.mjs";
import tilemaps from "./tilemaps.mjs";
import { mario } from "./main.mjs";
const   Game = {},
        getId = (what) => {return document.getElementById(what)},
        canvasElem = getId('canvas'),
        canvas = canvasElem.getContext('2d'),
        bufferElem = document.createElement('canvas'),
        bufferCanvas = bufferElem.getContext('2d'),
        debug = getId("debug");

//for now, use only the original resolution of 256 x 240 then scale everything
Game.setResolution = () => {
    let originalGameWidth = 256, originalGameHeight = 240,
        screenWidth = window.innerWidth, screenHeight = window.innerHeight,
        resolutionMultiplier = (screenWidth < screenHeight ? screenWidth : screenHeight) / originalGameWidth,
    //tileSize = resolutionMultiplier,
    tileSize = 1;
    canvasElem.focus();
    //canvasElem.setAttribute("width", originalGameWidth * resolutionMultiplier);
    //bufferElem.setAttribute("width", originalGameWidth * resolutionMultiplier);
    //canvasElem.setAttribute("height", originalGameHeight * resolutionMultiplier);
    //bufferElem.setAttribute("height", originalGameHeight * resolutionMultiplier);
    //this will be the game size after physics are completed until the game in general is finished, which then I will make the sizing dynamic
    canvasElem.setAttribute("width", 256);
    canvasElem.setAttribute("height", 240);
    //game size to attempt to sort physics
    canvasElem.setAttribute("width", 450);
    canvasElem.setAttribute("height", 400);
    bufferElem.width = canvasElem.getAttribute("width");
    bufferElem.height = canvasElem.getAttribute("height");
};
Game.worlds = [];
Game.currentLevel = 1;
Game.currentWorld = 1;
Game.lives = 3;
Game.score = 0;
Game.coins = 0;
Game.items = [];
Game.animationIntervals = [];
Game.coinAnimationDirection = 1;
Game.level;
Game.log = (what) => {console.log(what)}
Game.write = (what) => {document.write(what)}
Game.clearCanvas = () => {
    canvas.clearRect(0, 0, canvasElem.getAttribute("width"), canvasElem.getAttribute("height"));
    bufferCanvas.clearRect(0, 0, bufferElem.getAttribute("width"), bufferElem.getAttribute("height"));
}

// Game physics stuff
Game.fps = 60;
Game.block = 16;
Game.pixel = Game.block / 16;
Game.subpixel = Game.pixel / 16;
Game.subsubpixel = Game.subpixel / 16;
Game.subsubsubpixel = Game.subsubpixel / 16;
Game.getTotalValue = (b, p, sp, ssp, sssp) => {
    const   hexValues = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15},
            value = (what) => {return hexValues[what]}
    return (value(b) * Game.block) + (value(p) * Game.pixel) + (value(sp) * Game.subpixel) + (value(ssp) * Game.subsubpixel) + (value(sssp) * Game.subsubsubpixel);
}

// Used to indicate which sides of a hitbox are valid for collisions (to hopefully stop the game from having a seizure when mario falls directly between 2 tiles)
// The index goes left, right, top, bottom
// the indexes indicate which side of the tile are valid colliders, not the side that the entity touches the tile with
// However, the indexes are used in the opposite way and are indexed for the opposite side of Mario's collision (don't ask, idfk either)
Game.collisionCombos = [
    [true, true, true, true],       // left right top bottom    0
    [true, true, true, false],      // left right top           1
    [true, true, false, true],      // left right bottom        2
    [true, true, false, false],     // left right               3
    [true, false, true, true],      // left top bottom          4
    [true, false, true, false],     // left top                 5
    [true, false, false, true],     // left bottom              6
    [true, false, false, false],    // left                     7
    [false, true, true, true],      // right top bottom         8
    [false, true, true, false],     // right top                9
    [false, true, false, true],     // right bottom             10
    [false, true, false, false],    // right                    11
    [false, false, true, true],     // top bottom               12
    [false, false, true, false],    // top                      13
    [false, false, false, true],    // bottom                   14
    [false, false, false, false]   // none                      15
];
Game.pointValues = {
    brick: 50,
    coin: 200,
    powerUp: 1000,
    lakitu: 800,
    hammerBro: 1000,
    stompChain: [100, 200, 400, 500, 800, 1000, 2000, 4000, 5000, 8000, "1up"],
    shellChain: [500, 800, 1000, 2000, 4000, 5000, 8000, "1up"],
    shellKick: {
        ground: 400,
        afterStomp: [500, 800]//grants 500 or 800
    },
    fireball: {
        base: 200,
        goomba: 100,
        hammerBro: 1000,
        bowser: 5000
    },
    flagpole: [100, 400, 800, 2000, 5000], //this depends on pole height mario reaches
    bonusSeconds: 50 //bonus points granted for every remaining second on the level timer
}

Game.drawAsset = (asset) => {
    if (asset.sprite instanceof HTMLCanvasElement) {
        bufferCanvas.drawImage(asset.sprite, asset.x, asset.y)
    } else bufferCanvas.drawImage(asset.sprite[asset.direction], asset.x, asset.y)
}

// Function to find the longest nested array
Game.getLongestLow = (arr) => {
    return arr.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, []);
};

Game.updateLevel = () => {
    Game.level = Game.worlds[Game.currentWorld][Game.currentLevel];
}

Game.updateEnem = () => {
    let level = Game.level;
    level.enemies.forEach(e => {
        if (e instanceof Enemy) {
            if (!e.spawned) {
                e.checkSpawn();
            } else {
                e.checkAdjacentTiles();
                e.moveEnt();
                let originalSpeed = e.speed;
                if (!e.collisions.bottom) e.gravity = e.fallingGravity//e.originalGravity;
                if (e.collisions.left && e.collisions.right) {
                    e.speed = 0;
                } else if (e.collisions.left || e.collisions.right) {
                    e.originalSpeed = e.speed;
                } else e.speed = e.originalSpeed;
                //if (e.horizontalCollision) e.speed *= -1;
                e.horizontalCollision = false;
                e.checkAdjacentTiles();
            }
            if (e instanceof Koopa && e.colour == "red") e.changeRedDirection();
        }
    })
}

// Calls alll methods for moving entities
Game.moveAllEntities = () => {
    mario.updatePhysics();
    mario.moveEnt();
    Game.updateEnem();

    // Handles item collision
    Game.items.forEach(item => {
        if (item instanceof Item && item.canBeCollected) {
            if (item instanceof Mushroom) {
                if (item.canBeCollected && !item.collected) {
                    if (item.checkIfTouching(mario)) {
                        item.collected = true;
                        mario.givePowerup(1);
                        item = undefined;
                    } else item.move();
                }
            } else if (item instanceof Flower) {
                if (item.canBeCollected && !item.collected) {
                    if (item.checkIfTouching(mario)) {
                        item.collected = true;
                        if (mario.size == 1) mario.givePowerup(1);
                        mario.givePowerup(2);
                        item = undefined;
                    }
                }
            }
        }
    })

    // Fireball loop to run collision detection
    if (mario.fireballs.length) mario.fireballs.forEach(ball => {
        ball.checkCollision();
    })
}

// Calls all methods for drawing
Game.drawObjects = (level) => {
    
    // Draws items in Game.items as well as hitboxes (if desired)
    Game.items.forEach(item => {
        if (item != undefined)
        if (item instanceof Item)
        if (!item.collected) {
            item.draw();
            //canvas.beginPath(); canvas.fillStyle = "blue"; canvas.fillRect(item.hitbox.x, item.hitbox.y, item.hitbox.w, item.hitbox.h);
            //bufferCanvas.beginPath(); bufferCanvas.fillStyle = "blue"; bufferCanvas.fillRect(item.hitbox.x, item.hitbox.y, item.hitbox.w, item.hitbox.h);
        }
    });

    // Draws tiles
    //level.tiles.forEach(row => row.forEach(tile => {if (tile instanceof Tile && !tile.isBroken) canvas.drawImage(tile.sprite, tile.x, tile.y)}));
    level.tiles.forEach(row => row.forEach(tile => {if (tile instanceof Tile && !tile.isBroken) Game.drawAsset(tile)}));// bufferCanvas.drawImage(tile.sprite, tile.x, tile.y)}));
    //level.largeHitboxes.forEach(hitbox => {canvas.beginPath();canvas.fillStyle = "red";canvas.fillRect(hitbox.x + 1, hitbox.y + 1, hitbox.w - 2, hitbox.h - 2)});
    //level.largeHitboxes.forEach(hitbox => {bufferCanvas.beginPath();bufferCanvas.fillStyle = "red";bufferCanvas.fillRect(hitbox.x + 1, hitbox.y + 1, hitbox.w - 2, hitbox.h - 2)});

    //Draw enemies
    level.enemies.forEach(e => {
        if (e instanceof Enemy) {
            e.draw();
            e.drawHitbox("green");
        }
    })

    // Draw mario
    if (mario.sprite == tilemaps.mario.small.stand) {
        mario.x --
        mario.draw();
        mario.x ++
    } else mario.draw(); //unsure if code above and below makes mario's sprite go up by 1 pixel

    // Draws hitbox
    mario.drawHitbox("green");

    // Draws fireballs
    mario.fireballs.forEach(ball => {
        ball.draw();
        bufferCanvas.beginPath();
        bufferCanvas.fillStyle = "grey";
    })
    canvas.drawImage(bufferElem, 0, 0);
}

export default Game;