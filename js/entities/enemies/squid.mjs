import Enemy from "./enemy.mjs";
export default class Squid extends Enemy {
    constructor(x, y,) {
        super(
            x, y,
            3, 12, 10, 5,
            assets.overworld.enemies.squid.normal,
            "squid"
        )
    }
}