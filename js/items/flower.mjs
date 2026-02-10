import Item from "./item.mjs";
export default class Flower extends Item {
    constructor(x, y) {
        super (x, y, 2, 0, 12, 16);
        this.sprite = preRenderAsset([...sprites.items.flower.head[1].flowerPower, ...sprites.items.flower.stem], sprites.colours.overworld.items).l;
        this.spriteList = [
            assets.overworld.items.flower[0],
            assets.overworld.items.flower[1],
            assets.overworld.items.flower[2],
            assets.overworld.items.flower[3],
            /*preRenderAsset([...sprites.items.flower.head[1].flowerPower, ...sprites.items.flower.stem], sprites.colours.overworld.items).l,
            preRenderAsset([...sprites.items.flower.head[2], ...sprites.items.flower.stem], sprites.colours.overworld.items).l,
            preRenderAsset([...sprites.items.flower.head[3], ...sprites.items.flower.stem], sprites.colours.overworld.items).l,
            preRenderAsset([...sprites.items.flower.head[4], ...sprites.items.flower.stem], sprites.colours.overworld.items).l*/
        ]
        this.spriteIndex = 0;
    }
}