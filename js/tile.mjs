import Game from "./Game.mjs";
export default class Tile { // Main class for tiles
    constructor(sprite, x, y, validCollisionSides, breakable, contents = 0, canCheckBelow = false, invisible) {
        this.sprite = sprite.l; // is number corresponding to index of asset in levelTiles
        this.isBroken = false;
        this.breakable = breakable;
        this.x = x;
        this.y = y;
        this.w = 16;
        this.h = 16;
        // this is to make the tile only allow certain collisions on certain sides and stops mario from colliding with the wrong sides of tiles that he shouldnt
        // 0 for none, 1 for wall, 2 for floor, 3 for left corner (allows left side collision), 4 for right corner (allows right side collision)
        this.validCollisionSides = Game.collisionCombos[validCollisionSides];
        this.canCheckBelow = canCheckBelow;
        this.contents = parseInt(contents); //coin is 1, mushroom 2, flower 3, star 4, vine 5, powerup 6 (this is to tell that either a mushroom or flower needs to be spawned depending on mario's size)
        this.usedInLargeHitbox = false;
        this.invisible = invisible;
    }
    
    draw() {Game.drawAsset(this)}
}