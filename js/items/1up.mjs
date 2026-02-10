import Mushroom from "./mushroom.mjs";
export default class ExtraLife extends Mushroom {
    constructor(x, y) {
        super(x, y);
        this.sprite = assets.overworld.items.ExtraLife.l;
        this.value = Game.pointValues.powerUp;
        this.w = 16;
        this.h = 16;
    }
}