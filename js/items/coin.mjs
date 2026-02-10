import Item from "./item.mjs";
export default class Coin extends Item {
    constructor(x, y, dynamic = false) {
        super(x, y);
        this.w = 16;
        this.h = 16;
        this.spriteIndex = 1;
        this.sprite = assets.overworld.tiles.coins.coin[this.spriteIndex];
        this.spriteList = assets.overworld.tiles.coins.coin
        /*[    
            preRenderAsset(sprites.tiles.coins.coin[1], sprites.colours.overoworld.items), // Coin 1
            preRenderAsset(sprites.tiles.coins.coin[2], sprites.colours.overoworld.items), // Coin 2
            preRenderAsset(sprites.tiles.coins.coin[3], sprites.colours.overoworld.items), // Coin 3
        ]*/
        this.value = Game.pointValues.coin;
        this.startAnimation();
    }
}