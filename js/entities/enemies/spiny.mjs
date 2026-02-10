import Enemy from "./enemy.mjs";
export default class Spiny extends Enemy {
    constructor(x, y) {
        super(
            x, y,
            3, 6, 10, 6,
            assets.overworld.enemies.spiny.walk[1],
            0, "spiny"
        )
        this.sprite = assets.overworld.enemies.spiny.walk[1].r;
    }
    //doesnt need a modified moveEnt() as it is a basic enemy (only when thrown down by a Lakitu does it need to be different)
    spawnFromLakitu() {

    }
}