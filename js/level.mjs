import Game from "./Game.mjs";
import Tile from "./tile.mjs";
import Goomba from "./entities/enemies/goomba.mjs";
import Koopa from "./entities/enemies/koopa.mjs";
import Parakoopa from "./entities/Enemies/parakoopa.mjs";
import Beetle from "./entities/enemies/beetle.mjs";
import Squid from "./entities/enemies/squid.mjs";
import Bullet from "./entities/enemies/bullet.mjs";
import Hammer from "./entities/hammer.mjs";
import Plant from "./entities/enemies/plant.mjs";
import Lakitu from "./entities/enemies/lakitu.mjs";
import Fish from "./entities/enemies/fish.mjs";
import Bro from "./entities/enemies/hammerBro.mjs";
import Bowser from "./entities/enemies/bowser.mjs";
import Flame from "./entities/flame.mjs";
import Spiny from "./entities/enemies/spiny.mjs";
import LavaBall from "./entities/enemies/lavaball.mjs";
export default class Level {
    constructor(tiles, tileList, location, entities, background) {
        //both background and tilemap are a grid of tiles 15x15 and will be in exactly the same format except the background won't be tangible
        //figure out level generation and creation, then sort out entities and stuff, then introduce the background (should require very little actual code to implement)
        this.tiles = tiles;
        this.tileList = tileList;
        this.location = location;
        this.entities = entities;
        this.enemies = [];
        this.background = background;
        this.largeHitboxes = [];
        this.items = [];
        for (let rowIndex = 0; rowIndex < this.tiles.length; rowIndex ++) {
            for (let columnIndex = 0; columnIndex < this.tiles[rowIndex].length; columnIndex ++) {
                if (this.tiles[rowIndex][columnIndex]) {
                    //                                           |               sprite                             |             x           |          y           |          validCollisionSides        |                    breakable                       |
                    this.tiles[rowIndex][columnIndex] = new Tile(this.tileList[this.tiles[rowIndex][columnIndex][0]], columnIndex * Game.block, rowIndex * Game.block, this.tiles[rowIndex][columnIndex][1], this.tiles[rowIndex][columnIndex][2] ? true : false, this.tiles[rowIndex][columnIndex][3] ? this.tiles[rowIndex][columnIndex][3] : 0);
                }
            }
        }
        this.setEntities();
        this.createLargeHitboxes();
    }

    // Creates and sets entities to their set positions
    setEntities() {
        this.entities.forEach(e => {
            // Checking entity type
            switch (e[0]) {
                case "goomba": 
                    this.enemies.push(new Goomba(e[1], e[2]));
                    break;
                case "beetle":
                    this.enemies.push(new Beetle(e[1], e[2]));
                    break;
                case "squid":
                    this.enemies.push(new Squid(e[1], e[2]));
                    break;
                case "bullet":
                    this.enemies.push(new Bullet(e[1], e[2]));
                    break;
                case "hammer":
                    this.enemies.push(new Hammer(e[1], e[2]));
                    break;
                case "koopa":
                    this.enemies.push(new Koopa(e[1], e[2], e[3]));
                    break;
                case "parakoopa":
                    this.enemies.push(new Parakoopa(e[1], e[2]));
                    break;
                case "plant":
                    this.enemies.push(new Plant(e[1], e[2]));
                    break;
                case "lakitu":
                    this.enemies.push(new Lakitu(e[1], e[2]));
                    break;
                case "fish":
                    this.enemies.push(new Fish(e[1], e[2], e[3]));
                    break;
                case "bro":
                    this.enemies.push(new Bro(e[1], e[2], e[3]));
                    break;
                case "bowser":
                    this.enemies.push(new Bowser(e[1], e[2], e[3]));
                    break;
                case "flame":
                    this.enemies.push(new Flame(e[1], e[2]));
                    break;
                case "spiny":
                    this.enemies.push(new Spiny(e[1], e[2]));
                    break;
                case "lavaball":
                    this.enemies.push(new LavaBall(e[1], e[2]));
                    break;
            }
        })
    }

    createLargeHitboxes() {

        // changing all tile usedInLargeHitbox attribute to false
        this.tiles.forEach(row => row.forEach(tile => {if (tile) tile.usedInLargeHitbox = false;}));

        let tiles = this.tiles;
        this.largeHitboxes = undefined;
        this.largeHitboxes = []
        for (let tileIndexY = 0; tileIndexY < tiles.length; tileIndexY ++) {
            for (let tileIndexX = 0; tileIndexX < tiles[tileIndexY].length; tileIndexX ++) {
                let row = tiles[tileIndexY];
                let currentTile = row[tileIndexX];
                if (currentTile && !currentTile.invisible) {

                    // Checks if there is a tile adjacent to current tile
                    if (tileIndexY + 1 < tiles.length) {
                        if (tiles[tileIndexY + 1][tileIndexX]) {
                            this.tiles[tileIndexY][tileIndexX].usedInLargeHitbox = true;
                        }
                    }
                    if (tileIndexX + 1 < tiles[tileIndexY].length) {
                        if (tiles[tileIndexY][tileIndexX + 1]) {
                            this.tiles[tileIndexY][tileIndexX].usedInLargeHitbox = true;
                        }
                    }

                    // Valid collision sides: left=0, right=1, bottom=2, top=3
                    let newHitbox = {
                        x: currentTile.x,
                        y: currentTile.y,
                        w: currentTile.w,
                        h: currentTile.h //possibly minus 5 if hitbox needs to be thinner than tiles to allow tiles to be hit
                    }

                    // Checking if tiles exist to the right of the current tile
                    // Running through the row adding tiles to hitbox until no tile in index
                    for (let addingTileIndex = tileIndexX + 1; addingTileIndex < row.length; addingTileIndex ++) {
                        let nextTile = row[addingTileIndex];
                        if (nextTile && !nextTile.usedInLargeHitbox) {
                            this.tiles[tileIndexY][addingTileIndex].usedInLargeHitbox = true;

                            // Changes valid collision sides to stop mario from clipping and stopping velocity when it shouldn't
                            this.tiles[tileIndexY][tileIndexX].validCollisionSides = Game.collisionCombos[12];
                            //this.tiles[tileIndexY][addingTileIndex].validCollisionSides[0] = false;
                            //this.tiles[tileIndexY][addingTileIndex].validCollisionSides[1] = false;
                            newHitbox.w += Game.block;
                        } else {
                            if (newHitbox.w > 16) this.largeHitboxes.push(newHitbox);
                            break;
                        }
                    }

                    if (newHitbox.w == 16)

                    // Checking tile below current tile
                    if (tiles[tileIndexY + 1]) {
                        if (tiles[tileIndexY + 1][tileIndexX])

                        // Runnning through the column adding tiles to hitbox until no tile in index
                        for (let addingTileIndex = tileIndexY + 1; addingTileIndex < tiles.length; addingTileIndex ++) {
                            let nextTile = tiles[addingTileIndex][tileIndexX];
                            if (nextTile)
                            if (!nextTile.usedInLargeHitbox) {
                                this.tiles[addingTileIndex][tileIndexX].usedInLargeHitbox = true;

                                // Changes valid collision sides to stop mario from clipping and stopping velocity when it shouldn't
                                this.tiles[addingTileIndex][tileIndexX].validCollisionSides = Game.collisionCombos[3];
                                newHitbox.h += Game.block;
                            } else break;
                            else break;
                        }
                    }
                    if (newHitbox.w > 16 || newHitbox.h > 16) this.largeHitboxes.push(newHitbox);
                    if (!currentTile.usedInLargeHitbox) currentTile.validCollisionSides = Game.collisionCombos[0];
                }
            }
        }
    }
}