import Game from "./Game.mjs";
import Enemy from "./entities/enemies/enemy.mjs";
import Mario from "./entities/mario.mjs";
import preRenderAsset from "./preRender.mjs";
import tilemaps from "./tilemaps.mjs";
import assets from "./assets.mjs"
import Camera from "./camera.mjs";
import Level from "./level.mjs";

const   tileSize = 2,
//may also want to consider doing the individual side check for entities as it may work better
        sprites = tilemaps,
        getId = (what)  => {return document.getElementById(what)},
        canvasElem = getId('canvas'),
        canvas = canvasElem.getContext('2d'),
        bufferElem = document.createElement('canvas'),
        bufferCanvas = bufferElem.getContext('2d'),
        debug = getId("debug");
        canvasElem.focus();

//for extending classes, the child class can use "super()" to inherit an attribute from the parent class
//calling the child class also uses the parent class attributes when called
//apparently functions are immediately inherited from parent class. good to know
//when drawing stuff, gonna need to draw it from the bottom left as mario can shrink and grow, and enemies can get bigger and smaller
/*
    all things done using coordinates of entities will need to be done from the bottom left of the entityHitbox.
    Essentially, all stuff that uses coordinates should be done opposite
*/

/*class Camera {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 2048;
        this.height = 400;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    update() {
        // Center the camera on the player, but only move to the right
        const desiredX = mario.x + mario.hitboxOffsets.w / 2 - this.canvasWidth / 2;
        const desiredY = mario.y + mario.hitboxOffsets.h / 2 - this.canvasHeight / 2;

        // Ensure the camera only moves to the right
        if (desiredX > this.x) {
            this.x = desiredX;
        }

        // Ensure the camera doesn't move out of the world bounds
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
        if (this.x + this.canvasWidth > this.width) this.x = this.width - this.canvasWidth;
        if (this.y + this.canvasHeight > this.height) this.y = this.height - this.canvasHeight;
    }

    apply(ctx) {
        ctx.setTransform(1, 0, 0, 1, -this.x, -this.y);
    }
}*/

/*
    use indexing in new Level() that gets the block class and creates it where new Tile() is above

    instead of multiple tile classes, perhaps use 1 tile class and use attributes in the use tile section of the new level 
    that defines what the block does, if it can be broken, if it drops something, etc.
*/

function initGame() {
    // Automatically focus canvas when tab/window is in focus
    window.addEventListener("focus", () => {
        canvasElem.focus();
    });
    // Initialize game elements
    Game.setResolution();
    camera = new Camera(0, 0, 2048, 400, canvasElem.width, canvasElem.height); // Adjust world dimensions accordingly
    Game.updateLevel();
}

const   canvasWidth = parseInt(canvasElem.getAttribute("width")),
        canvasHeight = parseInt(canvasElem.getAttribute("height"));
let mario = new Mario(150, 200),
    camera = new Camera();
export { mario };
// Event listeners for mario movement
document.addEventListener("keydown", (e) => {
    if (e.key == "a" || e.key == "A" || e.key == "ArrowLeft") {if (!mario.crouching) mario.keys.left = true; mario.movementFromCrouch.left = true; mario.lastMovementX = "left";}
    if (e.key == "d" || e.key == "D" || e.key == "ArrowRight") {if (!mario.crouching) mario.keys.right = true; mario.movementFromCrouch.right = true; mario.lastMovementX = "right";}
    if (e.key == "w" || e.key == "W" || e.key == "ArrowUp" || e.key == " ") {mario.keys.up = true;inptime = e.timeStamp;}
    if (e.key == "s" || e.key == "S" || e.key == "ArrowDown") {mario.keys.down = true; mario.crouch(); if (!mario.crouching && !mario.jumping && mario.size == 2) mario.y += 8;}
    if (e.key == "e" || e.key == "E" || e.key == "Shift") mario.keys.sprint = true;
})
document.addEventListener("keyup", (e) => {
    if (e.key == "a" || e.key == "A" || e.key == "ArrowLeft") {mario.keys.left = false; mario.movementFromCrouch.left = false;}
    if (e.key == "d" || e.key == "D" || e.key == "ArrowRight") {mario.keys.right = false; mario.movementFromCrouch.right = false;}
    if (e.key == "w" || e.key == "W" || e.key == "ArrowUp" || e.key == " ") {mario.keys.up = false; mario.holdingJumpButton = false;}
    if (e.key == "s" || e.key == "S" || e.key == "ArrowDown") {mario.keys.down = false; mario.standUp(); if (mario.size == 2) {mario.y -= 8; mario.h += 8}}
    if (e.key == "e" || e.key == "E" || e.key == "Shift") mario.keys.sprint = false;
})
// Adding levels to worlds and worlds to game
//create level class to store 
//hold whatever variables (levels, chunks, tiles, etc) for referencing any part of the level inside the function

let goomba = "goomba", koopa = "koopa", parakoopa = "parakoopa", plant = "plant", lakitu = "lakitu", fish = "fish", bro = "bro", bowser = "bowser", beetle = "beetle", squid = "squid", bullet = "bullet", flame = "flame", spiny = "spiny", lavaball = "lavaball";
Game.worlds = {
    1: {// World 1
        //this may need to be in a separate JS file (probably just put worlds into a separate file)
        1: new Level(
            [ //tiles will be drawn row by row
                /*
                    index and meaning:
                    1: sprite index
                    2: valid collision side index
                    3: breakable value
                    4: contents
                    5: canCheckBelow
                */
                /*
                    new way for tilemap:
                        instead of indexes, just use a name like "brick" or "question"
                */
                [ , , , , [1, 11], , [4, 0], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], , , , ,],// , [2, 0, 1], , , , , , , [2, 0, 1]],
                [ , , , , [2, 11], , , , , , , [2, 0, 0, 6], [2, 0, 0, 6], [2, 0, 1], [2, 0, 1], [2, 0, 1], [2, 0, 1]],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], , , , , , /*[2, 0]*/, , , , , , , [2, 0, 1], , , , ],
                [ , , , , [2, 0], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], ],
            ],
            //list for tiles used in the level
            /*List of all tiles used in level*/
            [
                /*
                    For tiles that use multiple sprites,
                    set interval in the tile class as an attribute to make them change their tile and colour (if necessary)
                    and stop the interval when the tile shouldn't change as well as setting it to a specific tile that it needs to be stationary on after interval is cleared
                */
                /*
                    Create Loop wherein at the start of each level, all possible variants of each tile are created.
                    holds each tile in a separate list with each variant as an index within the list
                    tilemap will need an extra value telling which tile variant to use

                    alternatively, use the regular tiles, but have a separate array of collision combinations, using the second value in the tilemap to determine which combination is to be used
                    for example,    using [0, 0] tells to use stairbrick with no collision
                                    using [0, 16] tells to use stairbrick with all collision
                    ther should be 16 possible combinations as there are 2 possible values per index and 4 indexes
                */
                // Blocks used
                preRenderAsset(sprites.tiles.groundAndStone.stairBrick, sprites.colours.overworld.groundAndStone),                               //0
                preRenderAsset(sprites.tiles.groundAndStone.crackedBrick, sprites.colours.overworld.groundAndStone),                             //1
                preRenderAsset(sprites.tiles.coins.question[1], sprites.colours.overworld.coins),                                                //2
                preRenderAsset(sprites.tiles.groundAndStone.brick1, sprites.colours.overworld.groundAndStone),                                   //3
                preRenderAsset(sprites.tiles.groundAndStone.emptyBrick, sprites.colours.overworld.groundAndStone),                               //4
                preRenderAsset(sprites.tiles.pipesAndScenery.pipe[1], sprites.colours.overworld.pipesAndScenery),                                //5
                preRenderAsset(sprites.tiles.pipesAndScenery.pipe[2], sprites.colours.overworld.pipesAndScenery),                                //6
                preRenderAsset(sprites.tiles.pipesAndScenery.pipe[3], sprites.colours.overworld.pipesAndScenery),                                //7
                preRenderAsset(sprites.tiles.pipesAndScenery.pipe[4], sprites.colours.overworld.pipesAndScenery),                                //8
                preRenderAsset(sprites.tiles.pipesAndScenery.pipe[5], sprites.colours.overworld.pipesAndScenery),                                //9
                preRenderAsset(sprites.tiles.pipesAndScenery.pipe[6], sprites.colours.overworld.pipesAndScenery),                                //10
                preRenderAsset(sprites.tiles.pipesAndScenery.pipe[7], sprites.colours.overworld.pipesAndScenery),                                //11
                preRenderAsset(sprites.tiles.pipesAndScenery.pipe[8], sprites.colours.overworld.pipesAndScenery),                                //12
                preRenderAsset(sprites.tiles.pipesAndScenery.pipe[9], sprites.colours.overworld.pipesAndScenery),                                //13
                preRenderAsset(sprites.tiles.pipesAndScenery.pipe[10], sprites.colours.overworld.pipesAndScenery),                               //14
                preRenderAsset(sprites.tiles.pipesAndScenery.flagpole[1], sprites.colours.overworld.pipesAndScenery),                            //15
                preRenderAsset(sprites.tiles.pipesAndScenery.flagpole[2], sprites.colours.overworld.pipesAndScenery),                            //16
                preRenderAsset(sprites.dynamicObjects.flags.pole, sprites.colours.overworld.items),                                              //17
                preRenderAsset(sprites.tiles.groundAndStone.castleTiles[1], sprites.colours.overworld.groundAndStone),                           //18
                preRenderAsset(sprites.tiles.groundAndStone.castleTiles[2], sprites.colours.overworld.groundAndStone),                           //19
                preRenderAsset(sprites.tiles.groundAndStone.castleTiles[3], sprites.colours.overworld.groundAndStone),                           //20
                preRenderAsset(sprites.tiles.groundAndStone.castleTiles[4], sprites.colours.overworld.groundAndStone),                           //21
                preRenderAsset(sprites.tiles.groundAndStone.castleTiles[5], sprites.colours.overworld.groundAndStone),                           //22
                preRenderAsset(sprites.tiles.groundAndStone.castleTiles[6], sprites.colours.overworld.groundAndStone),                           //23
                preRenderAsset(sprites.tiles.groundAndStone.castleTiles[7], sprites.colours.overworld.groundAndStone),                           //24
                // Background tiles used
            ],
            "overworld",
            [// Enemies/entities used
                //[goomba, 12, 13,], // Sprites, colours, hitboxes, etc will be predefined by the enemy type. Just give enemy and spawn coords
                [koopa, 9.5, 11, "red"],
                //[parakoopa, 20, 10],
                //[plant, 20, 10],
                //[lakitu, 15, 5],
                //[fish, 1, 1, "red"],
                //[bro, 1, 1, "red"],
                //[bowser, 18, 5, "green"],
                //[beetle, 1, 1],
                //[squid, 1, 1],
                //[bullet, 1, 1],
                //[flame, 1, 1],
                //[spiny, 1, 1],
                //[lavaball, 1, 1]
            ]
        ),
    }
};

// Game loop stuff
Game.loop = setInterval(() => {
    Game.clearCanvas();
    canvas.beginPath();
    canvas.fillStyle = "rgb(148, 138, 255)";
    canvas.fillRect(0, 0, canvasElem.getAttribute("width"), canvasElem.getAttribute("height"));
    bufferCanvas.beginPath();
    bufferCanvas.fillStyle = "rgb(148, 138, 255)";
    // bufferCanvas.fillRect(0, 0, canvasElem.getAttribute("width"), canvasElem.getAttribute("height"));

    Game.moveAllEntities();

    Game.drawObjects(Game.level);
    
    //Game.level.enemies.forEach(e => e.draw())

    // Update the camera position based on the player
    camera.update();

    // Apply camera transformation
    camera.apply();

    // Get the longest nested array (will be used for calculating level length)
    const longestRow = Game.getLongestLow(Game.level.tiles);
}, 1000 / Game.fps);
initGame();
//mario.givePowerup(1);
//mario.givePowerup(2);

//Game.items.push(new Coin(30, 30))
//Game.items.push(new Coin(250,150))
//will need to be called at the start of every level
/*
    new collision check formula:
        put all levls into 16x16 grid for collision checking
        check which grid mario is within (using manipulated version of current collision algorithm)
        check all tiles within that grid
*/