import Enemy from "./enemies/enemy.mjs";
export default class Flame extends Enemy {
    constructor(x, y) {
        super(
            x, y,
            6, 4, 4, 4,
            assets.overworld.enemies.flame[1],
            "flame", 0
        )
    }
}