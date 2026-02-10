import Enemy from "./enemy.mjs";
import Game from "../../Game.mjs";
import Tile from "../../tile.mjs";
import assets from "../../assets.mjs";
import Mario from "../mario.mjs";
import { mario } from "../../main.mjs";
export default class Koopa extends Enemy {
    constructor(x, y, colour, isAir = false) {
        super(
            x, y,
            2, 9, 12, 12,
            isAir ? assets.overworld.enemies.koopa.air[1] : assets.overworld.enemies.koopa.ground[colour][1],
            "koopa"
        );
        this.canBeJumpedOn = true;
        this.velocityY = 0;
        this.gravity = mario.physics.jumpPhysics.lower.fallingGravity / 2;
        this.colour = colour;
        this.inShell = false;
    }

    // Koopa in shell. being hit pushes it in required direction, can kill other enemies
    inShell() {

    }

    // Changes the direction of red Koopas when they reach the end of a row of tiles
    changeRedDirection() {
        let ix1 = Math.round((this.x - 8) / 16),
            ix2 = Math.round((this.x + 8) / 16),
            iy = Math.floor(this.y / 16) + 2,
            tiles = Game.level.tiles;
        if (iy > tiles.length || iy < 0) return;
        let tile1 = tiles[iy][ix1],
            tile2 = tiles[iy][ix2];
        if (!(tile1 instanceof Tile) || !(tile2 instanceof Tile)) {
            this.speed *= -1;
            this.originalSpeed = this.speed;
        }
    }

    moveEnt() {
        this.speed = 0;
        this.originalSpeed = 0;
        this.collisions.bottom = true;
        super.moveEnt();
        //Game.log(this.collisionSide + 1);
        if (this.collisionSide == "bottom" || this.collisionSide == "left" || this.collisionSide == "right") {
            //Game.log("x")
            if (this.inShell) {
                //Game.log("y")
                //if (this.speed != 0) {
                    // Sets shell speed depending on which side mario hit it from
                    let direction = this.collisionSide == "left" ? "l" : this.collisionSide == "right" ? "r" : "";
                    if (!direction) {
                        let diff = this.x - mario.x;
                        //Game.log(diff);
                    }
                        
                //}
            } else this.inShell = true
        }
    }
}