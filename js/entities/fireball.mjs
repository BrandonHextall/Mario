import Entity from "./entity.mjs";
export default class Fireball extends Entity { // Fireball class
    constructor(x, y) {
        /*
            Spawns in front of mario (direction dependent)
            First bounce is 1 tile ahead of him
            Bounces 4 tiles forward each time
            Fireball able to bounce 3 times per second, with an X velocity of 2 tiles per second
            Bounces just over 1 tile every time
        */
        super(x, y, 0, 0, 8, 8, sprites.dynamicObjects.fireball[1])
        this.velocityX = 5//Game.pixel * 3; // 3 bounces per second (i think)
        this.velocityY = 2.7//(Game.pixel / Game.fps) * 50;
        this.originalVelocityY = this.velocityY;
        this.gravity = 0.5//0.1; // Makes fireball bounce every 1 second
    }
    isTouching(collider) {
        if (!collider) return false;
        let colliderProperty = collider.hitbox ? collider.hitbox : collider;
        return !(
            this.x > colliderProperty.x + colliderProperty.w ||
            this.x + this.w < colliderProperty.x ||
            this.y > colliderProperty.y + colliderProperty.h ||
            this.y + this.h < colliderProperty.y
        )
    }
    checkCollision() {
        let collided = false;
        if (this.y > 400) {
            collided = true;
            return;
        }
        const checkCol = (tile) => {
            let side = this.checkCollisionSide(tile);
            if (side == "left" || side == "right") mario.fireballs.splice(mario.fireballs.indexOf(this), 1);
            else if (side == "bottom") {
                this.y = tile.y - this.h - 2;
                this.velocityY = -this.originalVelocityY;
            }
        }
        Game.level.largeHitboxes.forEach(hb => {
            if (!collided) checkCol(hb);
        })
        Game.level.tiles.forEach(row => row.forEach(tile => {
            if (tile && !collided && !tile.usedInLargeHitbox && !tile.contents) checkCol(tile);
        }))

        // Used to hit enemies with fireballs (with own checkIfTouching)
        /*Game.level.enemies.forEach(enemy => {
            if (this.isTouching(enemy)) {
                enemy.hitEnemy();
                mario.fireballs.splice(mario.fireballs.indexOf(this), 1);
            }
        })*/

        // Used to hit enemies with fireballs (with Entity checkIfTouching)
        Game.level.enemies.forEach(enemy => {
            if (this.checkIfTouching(enemy)) {
                enemy.hitEnemy();
                mario.fireballs.splice(mario.fireballs.indexOf(this), 1);
            }
        })
        this.x += this.velocityX;
        this.hitbox.x = this.x + this.hitboxOffsets.x;
        this.y += this.velocityY;
        this.hitbox.y = this.y + this.hitboxOffsets.y
        this.velocityY += this.gravity;
    }
}