import Enemy from "./enemy.mjs";
import { mario } from "../../main.mjs";
export default class Bowser extends Enemy {
    constructor(x, y, colour) {
        super(
            x, y,
            0, 2, 15, 19,
            assets.overworld.enemies.bowser[colour][1],
            "bowser"
        )
        this.health = 5;
        this.currentHitbox = 1;
        this.multiHitboxOffsets = [{x: 0, y: 2, w: 15, h: 19}, {x: 15, y: 10, w: 17, h: 18}]
    }

    //@Override
    updateHitboxes() {
        this.hitbox.w = this.hitboxOffsets.w;
        this.hitbox.h = this.hitboxOffsets.h;
        super.updateHitboxes();
    }

    //@Override
    drawHitbox(colour) {
        this.changeHitbox();
        super.drawHitbox(colour);
        this.changeHitbox();
        super.drawHitbox(colour);
    }

    changeHitbox() {
        this.currentHitbox = this.currentHitbox == 1 ? 0 : 1;
        this.hitboxOffsets = this.multiHitboxOffsets[this.currentHitbox];
        this.updateHitboxes();
    }
    
    // @Override
    //moveEnt() {}

    // @Override
    detectMarioCollision() {
        this.checkCollisionSide(mario);
        if (this.collisionSide) mario.hitPlayer();
        else {
            this.changeHitbox();
            this.checkCollisionSide(mario);
            if (this.collisionSide) mario.hitPlayer();
        }
    }

    throwHammer() {

    }

    spewFireball() {


    }
}