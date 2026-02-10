import Game from "../Game.mjs";
import Tile from "../tile.mjs";
import tilemaps from "../tilemaps.mjs";

const   getId = (what)  => {return document.getElementById(what)},
        canvasElem = getId('canvas'),
        canvas = canvasElem.getContext('2d'),
        bufferElem = document.createElement('canvas'),
        bufferCanvas = bufferElem.getContext('2d'),
        debug = getId("debug");
        canvasElem.focus();
export default class Entity {
    /*
        5 different units of measurement: block, pixel, subpixel, subsubpixel, and subsubsubpixel.
        Each value is 1/16 of the previous value (block=16, pixel=1, s-pixel = 1/16, etc)
        Each value ranges from 0 to 15 (on documentation its 0-F where A-F is 10-15)
        May be helpful to note that more often than not, blocks won't be used.

        Subsub- and subsubsubpixels do NOT factor into Mario's X position and are only used for precise accelerations
        A movement speed of 000xx will NOT move mario (furthermore, the xx position from the previous fram stays the same if he somehow comes to a stop)
        The following applies to ALL physics, not just ground physics:
            If at any time, Mario's current X acceleration causes his X-Velocity to reach/exceed its current maximum, his ss- and ssspixel values drop to 0
            If his Y-Velocity is reached/exceeded, the ss-, ss-, and ssspixel values drop to 0

        use an extra hitbox for entities that is 2 pixel larger than the actual hitbox
        use this to detect if the entity is 1 pixel away from a tile and if so, they are technically touching it
    */
    constructor(x, y, hitboxX, hitboxY, hitboxW, hitboxH, sprite, direction = "l") {
        this.x = x;
        this.y = y;
        this.hitboxOffsets = {x: hitboxX, y: hitboxY, w: hitboxW, h: hitboxH}
        this.hitbox = {x: this.x + this.hitboxOffsets.x, y: this.y + this.hitboxOffsets.y, w: hitboxW, h: hitboxH}
        this.collisions = {left: false, right: false, top: false, bottom: false}
        this.sprite = sprite;
        this.direction = "l";
        this.collisionSide = false;
        this.gravityHasChanged = false;
        this.w = this.sprite["l"].width;
        this.h = this.sprite["l"].height;
        this.hasTileBelow = false;
    }

    // Draws entity
    draw = () => Game.drawAsset(this);
    
    // Checks if colliding object is in contact with ent
    checkIfTouching(collider) {
        if (!collider) return false;
        let entityHitbox = this, colliderProperty = collider.hitbox ? collider.hitbox : collider;
        return !(
            entityHitbox.x > colliderProperty.x + colliderProperty.w ||
            entityHitbox.x + entityHitbox.w < colliderProperty.x ||
            entityHitbox.y > colliderProperty.y + colliderProperty.h ||
            entityHitbox.y + entityHitbox.h < colliderProperty.y
        )
    }

    // Checks which side a collision occurs
    checkCollisionSide(collider) {
        if (collider) {
            let colliderProperty = collider.hitbox ? collider.hitbox : collider;
            if (collider instanceof Tile) if (collider.isBroken) return false
            if (this.checkIfTouching(collider)) {
                let entityHitbox = this,
                entityHitboxHalfW = entityHitbox.w / 2,
                entityHitboxHalfH = entityHitbox.h / 2,
                colliderHalfW = colliderProperty.w / 2,
                colliderHalfH = colliderProperty.h / 2,
                entityHitboxCenterX = entityHitbox.x + entityHitbox.w / 2,
                entityHitboxCenterY = entityHitbox.y + entityHitbox.h / 2,
                colliderCenterX = colliderProperty.x + colliderProperty.w / 2,
                colliderCenterY = colliderProperty.y + colliderProperty.h / 2,
                
                // Calculate the distance between centers
                diffX = entityHitboxCenterX - colliderCenterX,
                diffY = entityHitboxCenterY - colliderCenterY,
                
                // Calculate the minimum distance to separate along X and Y
                minXDist = entityHitboxHalfW + colliderHalfW,
                minYDist = entityHitboxHalfH + colliderHalfH,
                
                // Calculate the depth of collision for both the X and Y axis
                depthX = diffX > 0 ? minXDist - diffX : -minXDist - diffX,
                depthY = diffY > 0 ? minYDist - diffY : -minYDist - diffY;
                // Now that you have the depth, you can pick the smaller depth and move along that axis.

                /*
                    This is where the collision problem lies.
                    the collision between the player and the tile isnt deep enough on the top of the tile to trigger a y-axis collision
                    instead, the game detects an x-axis collision and the player falls straight through the tiles
                    check if tiles are only floors by checking if they have any collision on the top and none on left and right
                    only allow the function to return a y-level collision

                    chatgpt example:
                        check collision between multiple tiles at once
                        do this by finding a range of tiles that mario may be colliding with
                        check collision between mario and a new tile hitbox by creating a square using the tile coorinates
                */
                if (depthX != 0 && depthY != 0) {
                    if (Math.abs(depthX) < Math.abs(depthY)) {

                        // Collision along X axis. React accordingly
                        //                                             left                                             right
                        //this.x = depthX > 0 ? colliderProperty.x + colliderProperty.w - this.hitboxOffsets.x : colliderProperty.x - entityHitbox.w - this.hitboxOffsets.x;
                        return depthX > 0 ? "left" : "right";
                    } else {
                        // Collision along Y axis
                        //                                              top                                             bottom
                        //this.y = depthY > 0 ? colliderProperty.y + colliderProperty.h - this.hitboxOffsets.y : colliderProperty.y - entityHitbox.h - this.hitboxOffsets.y;
                        return depthY > 0 ? "top" : "bottom";
                    }
                } else return false;
            } else return false;
        } else return false;
    }

    // Checks which side a collision occurs (new method only used in 1 section, may need to edit this)
    checkCollisionSideNew(collider) {
        if (collider) {
            if (this.checkIfTouching(collider)) {
                // Checks which side Mario is closest to, which determines the side he is colliding with
                let overlapLeft = (collider.x + collider.w) - this.x,
                    overlapRight = (this.x + this.w) - collider.x,
                    overlapTop = (collider.y + collider.h) - this.y,
                    overlapBottom = (this.y + this.h) - collider.y,
                    minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom)
                if (minOverlap == overlapLeft) return "left";
                else if (minOverlap == overlapRight) return "right";
                else if (minOverlap == overlapTop) return "top";
                else if (minOverlap == overlapBottom) return "bottom";
                else return false;
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
                    this.velocityY = 0;
                    this.gravity = 0;
                    this.jumping = false;
                }
                break;
        }
    }

    // Collision for large hitboxes. Stops entities from clipping and breaking their physics
    largeLevelHitboxCollision() {
        this.update();
        let levelHitboxes = Game.level.largeHitboxes
        for (let hitboxIndex = 0; hitboxIndex < levelHitboxes.length; hitboxIndex ++) {
            let levelHitbox = levelHitboxes[hitboxIndex];
            this.collisionSide = this.checkCollisionSide(levelHitbox);
            switch (this.collisionSide) {
                case "left": {
                    this.collisions.left = true;
                    this.setX(levelHitbox.x + levelHitbox.w);
                    this.speed *= -1;
                    break;
                }
                case "right": {
                    this.collisions.right = true;
                    this.setX(levelHitbox.x - this.w);
                    this.speed *= -1;
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
                    this.velocityY = 0;
                    this.gravity = 0;
                    this.jumping = false;
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
                        this.jumping = false;
                        this.velocityY = 0;
                        this.gravity = 0;
                        this.collisions.bottom = true;
                        hitboxIsBelow = true;
                        this.hasTileBelow = true;
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

    // Manages basic movement and collision of entities
    moveEnt() {
        /*
            When checking tile collision, mario hits whichever tile he is MOST hitting
            eg. if he is jumping and hits 2 tiles, whichever tile that the majority of his body is under is the one he hits
            this must get fixed as he always hits the tile on his left and when he is very close to being fully under the right tile, he clips to being centrally under the right tile (when under a breakable and unbreakable tile)
            possible fix is to use largeHitbox collision first, then decrement his y-pos by 1 if he had a top collision, then check the tile, then revert his position
            when colliding with a tile:
                check if theres a tile on the right.
                If yes:
                    check diff between mario and tile X pos.
                    If the difference is more than half, break next tile
                if no:
                    break current tile
        */
        this.gravityHasChanged = false; // this is specifically for Parakoops as they seem to not like using the right gravity
        let levelTiles = Game.level.tiles;

        this.updateCoords();
        this.largeLevelHitboxCollision();
        
        // Checking tile collision

        // These variables determine which tiles around the entity are checked. For some reason it only works when it uses the tiles adjacent to it.
        let startX = Math.floor(this.x / 16),
            startY = Math.floor(this.y / 16),
            endX = Math.floor((this.x + this.w) / 16),
            endY = Math.floor((this.y + this.h) / 16),
            x = startX, y = startY;
        for (y; y <= endY; y ++) {
            if (y >= levelTiles.length) continue;
            for (x; x <= endX; x ++) {
                if (x >= levelTiles[y].length) break;
                let tile = levelTiles[y][x];
                this.collisionSide = this.checkCollisionSide(tile);
                if (tile) this.runTileCollisionResult(tile);
                this.updateHitboxes();
            }
        }

        //try using Math.floor() when drawing tiles, as this may help with visual clarity and do the same with mario
        /*
            try using some sort of pythagoras shit to determine if any tiles will coincide with the new position after moving
            will need original coords (x1 and y1) and coords after applying velocity (x2 and y2)
            will be something like: (x2 - x1) * (x2 - x1) and (y2 - y1) * (y2 - y1)

            just have a look at the map/grid/coordinate formulas to find the correct formula for translation

            new idea: add all variants of tiles wherein the necessary collision sides are given in the tileList, not when creating a new tile
    */
    this.changeDirection();
    }

    // Updates entity position
    update() {
        this.resetCollision();
        this.updateHitboxes();
    }

    // Updates hitboxes
    updateHitboxes() {
        this.hitbox.x = this.direction == "l" ? this.x + this.hitboxOffsets.x : this.x + (this.w - this.hitboxOffsets.x) - this.hitboxOffsets.w;
        this.hitbox.y = this.y + this.hitboxOffsets.y;
    }

    // Resets collision side values
    resetCollision() {
        this.collisions.left = false;
        this.collisions.right = false;
        this.collisions.top = false;
        this.collisions.bottom = false;
    }
    
    // Updates coordinates
    updateCoords() {
        this.x += this.speed;
        this.velocityY += this.gravity;
        this.y += this.velocityY;
    }
    
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

    changeDirection() {
        if (this.velocityX) this.direction = this.velocityX > 0 ? "r" : "l"
        else if (this.speed) this.direction = this.speed > 0 ? "r" : "l";
    }

    // Draws hitboxes. Used for debugging
    drawHitbox(colour) {
        bufferCanvas.beginPath();
        bufferCanvas.fillStyle = colour;
        bufferCanvas.fillRect(this.hitbox.x, this.hitbox.y, this.hitbox.w, this.hitbox.h);
    }
}