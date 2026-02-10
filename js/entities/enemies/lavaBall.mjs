import Enemy from "./enemy.mjs";
export default class LavaBall extends Enemy {
    constructor(x, y) {
        super(
            x, y,
            3, 6, 10, 6,
            assets.overworld.enemies.fireball,
            "lavaball"
        )
    }
}