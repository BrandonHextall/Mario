import Enemy from "./enemy.mjs";
export default class Bullet extends Enemy {
    constructor(x, y) {
        super(
            x, y,
            3, 7, 10, 6,
            assets.overworld.enemies.bullet,
            "bullet", 0
        )
    }
}