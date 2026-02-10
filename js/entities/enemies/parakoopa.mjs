import Koopa from "./koopa.mjs";
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
    
    moveEnt() {
        super.moveEnt();
        if (!this.collisions.bottom) this.gravity = this.fallingGravity;
        else this.gravity = this.originalGravity;
    }

    largeLevelHitboxCollision() {
        this.update();
        let levelHitboxes = Game.level.largeHitboxes
        for (let hitboxIndex = 0; hitboxIndex < levelHitboxes.length; hitboxIndex ++) {
            let levelHitbox = levelHitboxes[hitboxIndex];
            this.collisionSide = this.checkCollisionSide(levelHitbox);
            let entityHitbox = this;
            switch (this.collisionSide) {
                case "left": {
                    this.collisions.left = true;
                    this.setX(levelHitbox.x + levelHitbox.w);
                    if (isMario) {
                        this.velocityX = 0;
                        this.accelerationX = 0;
                    } else this.speed *= -1;
                    break;
                }
                case "right": {
                    this.collisions.right = true;
                    this.setX(levelHitbox.x - this.w);
                    if (isMario) {
                        this.velocityX = 0;
                        this.accelerationX = 0;
                    } else this.speed *= -1;
                    break;
                }
                case "top": {
                    this.collisions.top = true;
                    this.setY(levelHitbox.y + levelHitbox.h);
                    this.velocityY *= -1;
                    this.jumping = true;
                    break;
                }
                case "bottom": {
                    this.collisions.bottom = true;
                    this.setY(levelHitbox.y - this.h)
                    this.setParakoopaVelocity();
                    break;
                }
                case false: {
                    break;
                }
            }
            this.updateHitboxes();
            let hitboxIsBelow = false;
            // Check if hitbox is 1 pixel below mario and if no, mario is falling and add falling gravity
            if (!this.collisions.bottom && !hitboxIsBelow) {
                
                // Check if hitbox X value is close enough to mario
                if (Math.floor(this.x) < levelHitbox.x + levelHitbox.w && Math.floor(this.x + this.w) > levelHitbox.x) {
                    
                    // Check if hitbox is 1 pixel below mario
                    if  (Math.floor(this.y) < levelHitbox.y && Math.floor(this.y + this.h) >= levelHitbox.y) {
                        this.collisionSide = "bottom";
                        this.setParakoopaVelocity();
                        break;
                    } else {
                        this.jumping = true;
                        this.hasTileBelow = false;
                        this.gravity = this.originalGravity;
                    }
                }
            }
        }
    }

    // Runs the results of an entity's collision
    runTileCollisionResult(tile) {
        if (!tile instanceof Tile) return;
        switch (this.collisionSide) {
            case false || "false":
                if (this.collisions.bottom) {
                    this.gravity = 0;
                    this.velocityY = 0;
                } else this.jumping = true;
                break;
            case "left":
                if (tile.validCollisionSides[1] && !this.collisions.left) {
                    this.collisions.left = true;
                    this.setX(tile.x + tile.w);
                    this.speed *= -1;
                }
                break;
            case "right":
                if (tile.validCollisionSides[0] && !this.collisions.right) {
                    this.collisions.right = true;
                    this.setX(tile.x - this.w);
                    this.speed *= -1;
                }
                break;
            case "top":
                if (tile.validCollisionSides[3] && !this.collisions.top) {
                    this.collisions.top = true;
                    this.setY(tile.y + tile.h);
                    this.velocityY *= -1;//0.5;
                }
                break;
            case "bottom":
                if (tile.validCollisionSides[2] && this.velocityY > 0) {
                    this.collisions.bottom = true;
                    this.setY(tile.y - this.hitboxOffsets.y - this.hitbox.h);
                    this.speedAtStartOfJump = 0;
                    this.setParakoopaVelocity()
                    this.velocityY = this.gravity;
                }
                break;
        }
    }
}
