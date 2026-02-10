import Enemy from "./enemy.mjs";
export default class Fish extends Enemy {
    constructor(x, y, colour) {
        super(
            x, y,
            3, 6, 10, 6,
            assets.overworld.enemies.fish[colour][1],
            "fish", 0 
        )
        this.canBeJumpedOn = true;
        this.direction = "l";
    }

    //needs its own movement method
    //@Override
    moveEnt() {
        
    }
}