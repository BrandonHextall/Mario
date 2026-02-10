import Enemy from "./enemy.mjs";
export default class Beetle extends Enemy {
    constructor(x, y) {
        super(
            x, y,
            2, 1, 12, 12, // hitbox changes to 2, 0, 12, 12 when in shell
            assets.overworld.enemies.beetle.inshell,
            "beetle"
        )
    }
}