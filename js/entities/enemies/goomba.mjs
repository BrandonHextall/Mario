import Enemy from "./enemy.mjs";
export default class Goomba extends Enemy {
    constructor(x, y) {
        super(
            x, y,
            2, 2, 12, 12,
            assets.overworld.enemies.goomba.walk[1],
            "goomba"
        );
        this.canBeJumpedOn = true;
        this.velocityY = 0;
        this.gravity = mario.physics.jumpPhysics.lower.fallingGravity / 2;
    }

    //@Override
    changeDirection() {}
}