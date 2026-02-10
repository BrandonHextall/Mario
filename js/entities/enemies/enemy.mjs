import Game from "../../Game.mjs";
import Entity from "../entity.mjs";
import Mario from "../mario.mjs";
import { mario } from "../../main.mjs";
import Tile from "../../tile.mjs";
import Fireball from "../fireball.mjs";
export default class Enemy extends Entity {
    constructor(x, y, hitboxX, hitboxY, hitboxW, hitboxH, sprite, type, velocity = mario.physics.groundPhysics.walk.maxSpeed / 2 /*should be about 2 tiles/s*/) {
        super(
            x * Game.block,
            y * Game.block,
            hitboxX,
            hitboxY,
            hitboxW,
            hitboxH,
            sprite
        );
        //initial velocity must be negative else enemies will walk away from mario
        this.speed = 0//-velocity;
        this.originalSpeed = 0//-velocity;
        this.velocityY = 0;
        this.type = type; // Ground, Air, Water, etc. Used to ensure collision doesn't run unnecessarily
        this.gravity = 0//mario.physics.jumpPhysics.lower.fallingGravity * 2; //Might differ per enemy type, might not
        this.fallingGravity = 0//mario.physics.jumpPhysics.lower.fallingGravity / 2; //Might differ per enemy type, might not
        this.originalGravity = 0//this.gravity;
        this.horizontalCollision = false;
        this.canBeJumpedOn = false;
        this.spawned = false;
        this.collisions = {
            left: false,
            right: false,
            top: false,
            bottom: false
        }
    }

    checkSpawn() {
        if (!this.spawned) {
            if (mario.x >= this.x - (Game.block * 12)) this.spawned = true;
        }
    }

    // When something collides with it
    hit(obj) {
        /*
        Check instance of object
        if mario, check if jumped on/ hit from below. If returns false, check if activeStar. If jumped on, run jumpedOn(). If hit through tile (like with mushrooms), run hitBottom()
        if shell/fireball, hit enemy
        */
        if (obj instanceof Mario) {
            obj.givePowerup(0);
        } else if (obj instanceof Fireball /*|| obj is instance of shell enemies such as koopa, beetle, spiny, etc*/) {
            /*
                enemy gets hit
                check enemy type
                enemy vulnerability to fireball grouping:
                insta-kill: Goomba, Koopa Troopa (Green & Red)(But not when they’re already in their shells),
                            Koopa Paratroopa (wings disappear and they die directly), Buzzy Beetle, Hammer Bro, Lakitu,
                            Spinies, Bloober (squid), Cheep Cheep (red & green), Piranha Plant, Bullet Bill,
                            Buzzy Beetle (again, includes ceiling ones)
                bullet bills are only killable by jumping on them. They can only be killed by a shell if they DID NOT originate from a turret.
                Podoboo (lava fireball) is completely invincible, even to star ability

                Multiple hits: Bowser (5 hits)

                Immune: Bullet Bill, Bowser's fireballs, firebars
            */
        } else {

        }
    }

    // When mario jumps on enemy
    jumpedOn() {
        /*
            Check if this instanceof Goomba, Koopa, ParaKoopa (Koopa with wings), Buzzy Beetle, Spiny, Lakitu, Hammer Bro, Bullet Bill, Cheep Cheep
            Goomba: kill and animate death and point procurement
            Koopa:
                normal:
                    switch state to in-shell, animate point procurement
                in-shell:
                    stationary:
                        start moving in corresponding direction, animate point procurement
                    moving:
                        if hit by mario on the side, change mario size
                        if hit on top, make stationary and animate point procurement
            ParaKoopa:
                normal:
                    switch state to no-wings, animate point procurement
                no-wings:
                    normal Koopa method
                in-shell:
                    normal Koopa method
            Buzzy Beetle:
                normal:
                    switch state to in-shell
                in-shell:
                    stationary:
                        start moving
                    moving:
                        make stationary
            Lakitu:
                death and animate point procurement
            Bullet Bill:
                kill, animate death, animate point procurement
            Cheep Cheep (in-air only):
                kill, animate death, animate point procurement
        */
    }

    // When mario hits enemy underneath a tile, causing the enemy to take damage/die (if applicable) and jump up
    hitBottom() {
        /*
            Check enemy instance: Goomba, Koopa, ParaKoopa, Buzzy Beetle, Spiny, Hammer Bro. the rest don't do anything (as far as I know)
            
        */
    }

    checkAdjacentTiles() {
        let tiles = Game.level.tiles,
            iX = Math.floor(this.x / 16),
            iY = Math.floor(this.y / 16);
        if (iX > tiles[0].length || iY > tiles.length || iX <= 1 || iY <= 0) return;
        let t1 = tiles[iY][iX - 1],
            t2 = tiles[iY][iX + 1];
        if (t1 instanceof Tile && t2 instanceof Tile) {
            let c1 = this.checkIfTouching(tiles[iY][iX - 1]),
            c2 = this.checkIfTouching(tiles[iY][iX + 1]);
            if (c1 && c2) {
                this.speed = 0;
            } else this.speed = this.originalSpeed;
        }
    }

    detectMarioCollision() {
        this.checkCollisionSide(mario);
        if (this.collisionSide) mario.hitPlayer();
    }
}