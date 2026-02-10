import Enemy from "./enemy.mjs";
export default class Bro extends Enemy {
    constructor(x, y, colour) {
        super(
            x, y,
            4, 4, 8, 18,
            assets.overworld.enemies.bro[colour].normal[1],
            "bro", 0 
        )
        this.canBeJumpedOn = true;
    }

    //jumping intervals and number of hammers thrown before jumping are set to random intervals (usually 2-4 hammers before jumping)
    //@Override
    moveEnt() {

    }

    throwHammer() {

    }
}