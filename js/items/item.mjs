import Game from "../Game.mjs";
export default class Item {
    constructor(x, y, hitboxX, hitboxY, hitboxW, hitboxH) { // Value is the number of points given when picked up
        this.x = x;
        this.y = y;
        this.hitboxOffsets = {x: hitboxX, y: hitboxY, w: hitboxW, h: hitboxH}
        this.hitbox = {x: this.x + hitboxX, y: this.y + hitboxY, w: hitboxW, h: hitboxH}
        this.value = Game.pointValues.powerUp;
        this.collected = false;
        this.canBeCollected = false;
        this.hasTileBelow = false;
        this.spawnY = y;
    }

    draw() {Game.drawAsset(this)}
    
    // Allows instantaneous adding to X
    addX(x) {
        this.x += x;
        this.hitbox.x = this.x + this.hitboxOffsets.x;
    }

    // Allows simple setting of X
    setX(x) {
        this.x = x;
        this.hitbox.x = this.x + this.hitboxOffsets.x;
    }
    
    // Allows instnataneous adding to Y
    addY(y) {
        this.y += y;
        this.hitbox.y = this.y + this.hitboxOffsets.y;
    }

    // Allows simple setting of Y
    setY(y) {
        this.y = y;
        this.hitbox.y = this.y + this.hitboxOffsets.y;
    }
    
    // Used to spawn the physical Item into the game and float it out of the tile
    spawn() {
        if (this.spawned) return true;
        //this.spawned = true;
        let floatHeight = 15;
        this.draw();
        setInterval(() => {
            if (this.y <= this.spawnY - floatHeight) {
                clearInterval();
                this.spawned = true;
                this.canBeCollected = true;
                this.hitbox.y = this.y + this.hitboxOffsets.y
                return true;
            };
            this.y -= 14 / Game.fps;
        }, 1000 / Game.fps);
        return true;
    }

    checkIfTouching(collider) {
        if (!collider) return false;
        let col = collider instanceof Mario ? collider.hitbox : collider
        return !(
            this.hitbox.x > col.x + col.w ||
            this.hitbox.x + this.hitbox.w < col.x ||
            this.hitbox.y > col.y + col.h ||
            this.hitbox.y + this.hitbox.h < col.y
        )
    }

    // Checks if there is a tile 1 pixel below item to stop it from falling
    checkIfBelow(collider) {
        if (collider)
        // Check if collider is close enough to the tile
        if (Math.floor(this.hitbox.x) < collider.x + collider.w && Math.floor(this.hitbox.x + this.hitbox.w) > collider.x) {

            // Check if collider is 1 pixel below item
            if (this.y + this.h + 1 == collider.y) {
                return true;
            }
        }
        return false;
    }

    checkTileCollision(obj) {
        if (this.collected) return false;
        if (obj && this.checkIfTouching(obj)) {
            let entityHitboxHalfW = this.w / 2,
                entityHitboxHalfH = this.h / 2,
                colliderHalfW = obj.w / 2,
                colliderHalfH = obj.h / 2,
                entityHitboxCenterX = this.x + this.w / 2,
                entityHitboxCenterY = this.y + this.h / 2,
                colliderCenterX = obj.x + obj.w / 2,
                colliderCenterY = obj.y + obj.h / 2,
                
                diffX = entityHitboxCenterX - colliderCenterX,
                diffY = entityHitboxCenterY - colliderCenterY,
                
                minXDist = entityHitboxHalfW + colliderHalfW,
                minYDist = entityHitboxHalfH + colliderHalfH,
                
                depthX = diffX > 0 ? minXDist - diffX : -minXDist - diffX,
                depthY = diffY > 0 ? minYDist - diffY : -minYDist - diffY;
                if (depthX != 0 && depthY != 0) {
                    if (Math.abs(depthX) < Math.abs(depthY)) {
                        return depthX > 0 ? "left" : "right";
                    } else {
                        return depthY > 0 ? "top" : "bottom";
                    }
                } else return false;
        } else return false;
    }
    startAnimation() {
        this.animationInterval = setInterval(() => {
            if (this.spriteIndex >= 3) Game.coinAnimationDirection = -1;
            else if (this.spriteIndex <= 1) {
                Game.coinAnimationDirection = 1;
                this.stopAnimation();
            }
            this.sprite = sprites.tiles.coins.coin[this.spriteIndex];
            this.spriteIndex += Game.coinAnimationDirection;
        }, 1000 / Game.fps * 9);
    }
    stopAnimation() {
        clearInterval(this.animationInterval)
        if (!this.collected) setTimeout(() => this.startAnimation(), 1000 / Game.fps * 18)
    }

    /*
        function to check collision of item
            use entity collision checker (unsure about variables, may have to create separate function for items)
            if collision, give mario the ability and remove the item from memory to stop it from checking/drawing anything
            if no collision, request animation from of function
        alternative:
            do all above but instead of animation frame, use setInterval in a variable and clear it if collision=true
    */
}