import Item from "./item.mjs";
export default class Mushroom extends Item {
    constructor(x, y) {
        super(x, y, 2, 0, 12, 16);
        this.sprite = assets.overworld.items.mushroom.l;
        this.w = 16;
        this.h = 16;
        this.spawned = false;
        this.speed = mario.physics.groundPhysics.walk.maxSpeed / 2;
        this.velocityY = 0;
        this.gravity = mario.physics.jumpPhysics.lower.fallingGravity / 2;
        this.collisions = {
            left: false,
            right: false,
            top: false,
            bottom: false
        }
    }

    // Method to move mushroom once spawned
    move() {
        // move mushroom at same speed as mario's max walk velocity
        /*
            Method:
                check if mushroom colliding with any tile on left/right
                if yes invert velocity and speed
                move mushroom
        */
        if (!this.collected) {
            /*
                For mushroom collision, use a smaller hitbox for mario
                use regular size for tiles and such
            */
            this.x += this.speed;
            this.hitbox.x = this.x + this.hitboxOffsets.x;
            this.velocityY += this.gravity;
            this.y += this.velocityY;
            this.hitbox.y = this.y + this.hitboxOffsets.y;
            let isBelow = false;
            Game.level.largeHitboxes.forEach(hb => {
                let side = this.checkTileCollision(hb);
                if (side == "left" && !this.collisions.left) {
                    this.collisions.left = true;
                    this.speed *= - 1;
                    this.setX(hb.x + hb.w - this.hitboxOffsets.x);
                }
                if (side == "right" && !this.collisions.right) {
                    this.collisions.right = true;
                    this.speed *= - 1;
                    this.setX(hb.x - this.w + this.hitboxOffsets.x);
                }
                if (side == "bottom" && !this.collisions.bottom) {
                    this.collisions.bottom = true;
                    this.setY(hb.y - this.h + this.hitboxOffsets.y);
                    this.velocityY = 0;
                }
                this.hasTileBelow = this.checkIfBelow(hb);
                if (this.hasTileBelow) {
                    isBelow = true;
                    this.setY(hb.y - this.hitbox.h);
                }
            })
            let indexX = Math.floor(this.x / 16),
                indexY = Math.floor(this.y / 16),
                iterationsX = 2,
                iterationsY = 3,
                startX = indexX < 0 ? 0 : indexX - iterationsX,
                startY = indexY < 0 ? 0 : indexY - iterationsY,
                endX = indexX + iterationsX,
                endY = indexY + iterationsY,
                levelTiles = Game.level.tiles,
                longestRow = levelTiles.reduce((longestIndex, currentList, currentIndex, array) => {
                    return currentList.length > array[longestIndex].length ? currentIndex : longestIndex;
                }, 0);
                if (indexY + endY > levelTiles.length) endY = levelTiles.length - 1;
            for (let y = startY; y <= endY; y ++) {
                if (y > levelTiles.length) break;
                let row = levelTiles[y];
                for (let x = startX; x <= levelTiles[y].length; x ++) {
                    let tile = row[x],
                        side = this.checkTileCollision(tile);
                    if (side == "left" && !this.collisions.left) {
                        this.collisions.left = true;
                        this.speed *= -1;
                        this.setX(tile.x + tile.w);
                    }
                    if (side == "right" && !this.collisions.right) {
                        this.collisions.right = true;
                        this.speed *= -1;
                        this.setX(tile.x - tile.w);
                    }
                    if (side == "bottom" && !this.collisions.bottom) {
                        this.collisions.bottom = true;
                        this.setY(tile.y - this.h);
                        this.velocityY = 0;
                    }
                    this.hasTileBelow = this.checkIfBelow(tile);
                    if (this.hasTileBelow) {
                        isBelow = true;
                        this.setY(tile.y - this.h);
                    }
                }
            }
            if (isBelow) {
                this.velocityY = 0;
                this.gravity = 0;
                this.hasTileBelow = true;
            } else {
                this.gravity = mario.physics.jumpPhysics.lower.fallingGravity / 2;
            }
        }
        this.hitbox.x = this.x + this.hitboxOffsets.x;
        this.hitbox.y = this.y + this.hitboxOffsets.y;
        this.collisions = {
            left: false,
            right: false,
            top: false,
            bottom: false
        }
    }

    // Method to make mushrooms bounce when tile below is hit by mario
    bounce(tile) {
        if (tile) if (this.spawned)
            if (this.checkIfTouching(tile)) {
                mario.y -= 2;
                mario.hitbox.y -= 2;
                let entSide = mario.checkCollisionSide(tile);
                mario.y += 2;
                mario.hitbox.y += 2;
                this.y +=2;
                this.hitbox.y += 2
                let itemSide = this.checkTileCollision(tile);
                this.y -= 2;
                this.hitbox.y -= 2;
                if (entSide == "top" && itemSide == "bottom") {
                    itemSide = this.x + (this.w / 2) < tile.x + (tile.w / 2) ? "left": "right";
                    entSide = mario.x + (mario.w / 2) < tile.x + (tile.w / 2) ? "left" : "right";
                    
                    // Compares the sides that the entity and item are on, to determine whether to change the item's direction
                    if (
                        (itemSide == "left" && entSide == "right" && this.speed > 0) ||
                        (itemSide == "right" && entSide == "left" && this.speed < 0)
                    ) this.speed *= -1;
                    //mushroom jump is 1 tile high
                    //length of time is about 1 second
                    this.velocityY = - 4.5;
                }
            }
    }
}