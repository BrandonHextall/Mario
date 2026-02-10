import Enemy from "./enemies/enemy.mjs";
export default class Hammer extends Enemy {
    constructor(x, y) {
        super(
            x, y,
            1, 1, 8, 8,
            assets.overworld.enemies.hammer[1],
            "hammer", 0
        )
    }
}