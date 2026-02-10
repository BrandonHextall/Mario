import Enemy from "./enemy.mjs";
export default class Lakitu extends Enemy {
    constructor(x, y) {
        super(
            x, y,
            2, 9, 12, 12,
            assets.overworld.enemies.lakitu.green[1],
            "lakitu", 0 
        )
        this.canBeJumpedOn = true;
    }

    //has different mechanics and physics to all other enemies, so will need to make its own moveEnt() method
    //@Override
    moveEnt() {

    }
}