import Enemy from "./enemy.mjs";
export default class Plant extends Enemy {
    constructor(x, y) {
        super(
            x, y,
            3, 14, 10, 6,
            assets.overworld.enemies.plant.green[1],
            "plant", 0
        )
    }

    // will either create its own moveEnt() method for moving in and out of pipes, or create a different method entirely for it
    //@Override
    moveEnt() { // Keeping blank move method so that the plant does not move.

    }
}