import Koopa from "./Enemies/koopa.mjs";
export default class Parakoopa extends Koopa {
    constructor(x, y, isAir = true) {
        super(
            x, y,
            2, 9, 12, 12,
            assets.overworld.enemies.koopa.air[1],
            "parakoopa"
        )
        this.canBeJumpedOn = true;
    }

    setParakoopaVelocity() {
        this.velocityY = -mario.physics.jumpPhysics.lower.holdingJumpGravity * 30;
    }
    loseWings() {

    }
}