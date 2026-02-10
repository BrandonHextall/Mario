import Enemy from "../entities/enemies/enemy.mjs";
import Entity from "./entity.mjs";
import Game from "../Game.mjs";
import assets from "../assets.mjs";
//import Bowser from "../entities/enemies/bowser.mjs";
export default class Mario extends Entity {
    constructor(x, y) {
        /*
            hitbox x y w h at different stages:
                small: 4, 4, 8, 11
                crouching: 4, 9, 11, 11
                big: 4, 8/9, 11, 20/21
        */
        super(x, y, 4, 4, 8, 12, assets.overworld.mario.normal.small.stand, "l");
        this.w = 14;
        this.keys = {
            left: false,
            right: false,
            up: false,
            down: false,
            sprint: false, // Sprint is the same as the powerup button
        }
        this.collisions = {
            left: false,
            right: false,
            top: false,
            bottom: false
        }
        this.maxFallSpeed = Game.getTotalValue(0, 4, 0, 0, 0); // 4 pixels per second
        this.holdingJumpButton = false;
        this.movementFromCrouch = {
            left: false,
            right: false,
            lastMovement: ""
        }
        this.jumping = true;
        this.crouching = false;
        this.skidding = false;
        this.accelerationX = 0;
        this.velocityX = 0;
        this.velocityY = 0;
        this.gravity = 0;
        this.lastMovementX = "";
        this.lastMovementY = "";
        this.directionAtStartOfJump = false;
        this.speedAtStartOfJump = 0;
        this.speedType = "lower";
        this.size = 1;
        this.lives = 3;
        this.activeFlower = false;
        this.canShootFireball = false; //mario has ability to shoot up to 3 fireballs at a time, and can shoot another when one has hit an object. Can also shoot fireballs quickly when certain button is presses (will need to implement this somehow)
        this.activeStar = false;
        this.starDuration = 0; //find out star duration
        this.fireballs = [];
        // When star is active, create timeout function that lasts the duration and the changes activeStar to false

    // Physics stuff
        this.physics = {
        // Ground physics
            groundPhysics: {
                walk: {
                    minVelocity: Game.getTotalValue(0, 0, 1, 3, 0),
                    maxSpeed: Game.getTotalValue(0, 1, 9, 0, 0),
                    acceleration: Game.getTotalValue(0, 0, 0, 9, 8),
                    maxSpeedUnderwater: Game.getTotalValue(0, 1, 1, 0, 0),
                    maxSpeedLevelEntry: Game.getTotalValue(0, 0, "D", 0, 0)
                },
                run: {
                    acceleration: Game.getTotalValue(0, 0, 0, "E", 4),
                    maxSpeed:  Game.getTotalValue(0, 2, 9, 0, 0)
                },
                // When sprint button released and current direction is held, Mario keeps current speed for 10 frames then instantly slow to walk speed which is why speed isn't lost when throwing fireballs while running
                releaseDeceleration: Game.getTotalValue(0, 0, 0, "D", 0),
                // If player stops holding opposite direction and presses no other button, will continue to decelrate
                skidDeceleration: Game.getTotalValue(0, 0, 1, "A", 0),
                // The speed below/ at which Mario/Luigi changes direciton while skidding (ie he doesn't come to a complete stop first)
                // This is the value that mario can be at or below in order to turn around and move in the opposite direction without stopping or skidding
                // So if mario was at or below this speed and the player presses the opposite button, mario will immediately turn around and walk in the opposite direction without his speed going down so his speed will be immediately reversed
                skidTurnaroundSpeed: Game.getTotalValue(0, 0, 9, 0, 0)
            },
        // Air physics
            /*
                IMPORTANT!!
                These are things that ALWAYS hold true:
                    Releasing the direction you go in will keep speed static, it will NOT slow you down
                    Holding/releasing jump/sprint button has NO EFFECT on midair momentum (meaning regardless of if you press or release the jump button, the speed will not be affected)
                    Midair physics underwater works EXACTLY how they do in air, same accelerations and everything else
            */
            // Values of midair momentum changes
            airPhysics: {
                // Holding forward in midair (to gain momentum)
                gainMomentum: {
                    // If current speed is less than Game.getTotalValue(0, 1, 9, 0, 0)
                lower: Game.getTotalValue(0, 0, 0, 9, 8),
                    // If current speed is more than/ equal to Game.getTotalValue(0, 0, 0, "E", 4")
                higher: Game.getTotalValue(0, 0, 0, "E", 4)
                },
                // Holding back in midair (to lose momentum)
                loseMomentum: {
                        // If speed is more than/ equal to Game.getTotalValue(0, 1, 9, 0, 0)
                    higher: Game.getTotalValue(0, 0, 0, "E", 4),
                        // If speed is lower than Game.getTotalValue(0, 1, 9, 0, 0) and speed at start of jump is more than/ equal to Game.getTotalValue(0, 1, "D", 0, 0)
                    lower: {
                        highJumpStart: Game.getTotalValue(0, 0, 0, "D", 0),
                        // If speed is lower than Game.getTotalValue(0, 1, 9, 0, 0) and speed at start of jump is less than Game.getTotalValue(0, 1, "D", 0, 0)
                        lowJumpStart: Game.getTotalValue(0, 0, 0, 9, 8)
                    }
                }
            },
        // Jumping/ vertical physics
            /*
                As long as jump button is held, Mario will rise at a slowing rate.
                As soon as jump button is released, Mario immediately starts falling
                Vertical downward velocity caps at Game.getTotalValue(0, 4, 8, 0, 0), and wraps back to Game.getTotalValue(0, 4, 0, 0, 0) when max velocity is exceeded

                Running of a ledge doesn't use any specific gravity but instead uses whatever the previous falling gravity was
            */
            jumpPhysics: {
                // Initial horizontal speed less than Game.getTotalValue(0, 1, 0, 0, 0)
                lower: {
                    // Initial velocity (-y)
                    initalVelocity: Game.getTotalValue(0, 4, 0, 0, 0),
                    // Holding jump button gravity (+y)
                    holdingJumpGravity: Game.getTotalValue(0, 0, 2, 0, 0),
                    // Falling gravity (+y)
                    fallingGravity: Game.getTotalValue(0, 0, 7, 0, 0),
                },
                // Initial horizontal speed between Game.getTotalValue(0, 1, 0, 0, 0) and Game.getTotalValue(0, 2, 4, "F", "F")
                between: {
                    // Initial velocity (-y)
                    initalVelocity: Game.getTotalValue(0, 4, 0, 0, 0),
                    // Holding jump button gravity (+y)
                    holdingJumpGravity: Game.getTotalValue(0, 0, 1, "E", 0),
                    // Falling gravity (+y)
                    fallingGravity: Game.getTotalValue(0, 0, 7, 0, 0),
                },
                // Initial horizontal speed more than/equal to Game.getTotalValue(0, 2, 5, 0, 0)
                greater: {
                    // Initial velocity (-y)
                    initalVelocity: Game.getTotalValue(0, 5, 0, 0, 0),
                    // Holding jump button gravity (+y)
                    holdingJumpGravity: Game.getTotalValue(0, 0, 2, 8, 0),
                    // Falling gravity (+y)
                    fallingGravity: Game.getTotalValue(0, 0, 9, 0, 0),
                },
                // Initial horizontal speed is level entry speed
                entry: {
                    // Initial velocity (-y)
                    initalVelocity: Game.getTotalValue(0, 0, 0, 0, 0),
                    // Holding jump button gravity (+y)
                    holdingJumpGravity: Game.getTotalValue(0, 0, 2, 8, 0),
                    // Falling gravity (+y)
                    fallingGravity: Game.getTotalValue(0, 0, 2, 8, 0)
                },
            },
        // Swimming Physics
            /*
                Underwater and ground levels have similar physics.
                Swimming is treated almost identical to jumping, but with lower gravity.
                Just like jumping, gravity values only reset on pressing jump button, meaning that if you swim out of a whirlpool, you will keep the lower gravity values.
                Whirlpools extend exactly 1 block from the edges of a pit. Unlike other gravity changes, the "surface" gravity while in or above darkened segment (shown on documentation image).
                While in whirlpools, mario Y-speed caps at Game.getTotalValue(0, 1, 8, 0, 0) rather than Game.getTotalValue(0, 4, 8, 0, 0), and an additional Game.getTotalValue(0, 0, 1, 0, 0) is added to his current gravity.
                If Mario has a current positive Y-Velocity of V (i think this means the initial velocity variable), then his Y-position doesn't change by V every frame (as it would in any other case), but by the value of (2V + gravity).
                While in the whirlpool region, Mario is moved 1 pixel towards the center of the pit every other frame
            */
            swimPhysics: {
                // Initial horizontal speed is normal
                normal: {
                    // Initial velocity (-y)
                    initial: Game.getTotalValue(0, 1, 8, 0, 0),
                    // Holding jump button gravity (+y)
                    holdingJumpGravity: Game.getTotalValue(0, 0, 0, "D", 0),
                    // Falling gravity (+y)
                    fallingGravity: Game.getTotalValue(0, 0, 0, "A", 0)
                },
                // Initial horizontal speed is in whirlpool zone
                whirlpool: {
                    // Initial velocity (-y)
                    initial: Game.getTotalValue(0, 1, 0, 0, 0),
                    // Holding jump button gravity (+y)
                    holdingJumpGravity: Game.getTotalValue(0, 0, 0, 4, 0),
                    // Falling gravity (+y)
                    fallingGravity: Game.getTotalValue(0, 0, 0, 9, 0)
                },
                // Initial horizontal speed is in surface zone
                surface: {
                    // Initial velocity (-y)
                    initial: Game.getTotalValue(0, 1, 8, 0, 0),
                    // Holding jump button gravity (+y)
                    holdingJumpGravity: Game.getTotalValue(0, 0, 1, 8, 0),
                    // Falling gravity (+y)
                    fallingGravity: Game.getTotalValue(0, 0, 1, 8, 0)
                }
            },
        // Other Physics
            /*
                Other physics that don't fit into other categories.
                xxx means that the s-, ss-, and ssspixel values are kept from the previous frame
            */
            otherPhysics: {
                // Climbing stuff
                climb: {
                    velocity: {
                        // Ascending (-y)
                        ascend: Game.getTotalValue(0, 0, "E", 0, 0),
                        // Descending (+y)
                        descend: Game.getTotalValue(2, 0, 0, 0, 0)
                    },
                    gravity: Game.getTotalValue(0, 0, 0, 0, 0)
                },
                // When stomping on enemies like squashing a Goomba
                stomp: {
                    goombaAndShell: {
                        velocity: Game.getTotalValue(),
                        gravity: Game.getTotalValue()
                    },
                    lakituBroCheepBullet: {
                        velocity: Game.getTotalValue(0, 3, "x", "x", "x"),
                        gravity: "last" // The fact that stomps don't have a fixed gravity means that if you stomp and enemy while moving upwards and are still holding jump button, you can continue to hold it to reduce gravity which results in a huge height boost
                    },
                    trampoline: {
                        normal: {
                            velocity: Game.getTotalValue(0, 7, 0, 0, 0),
                            gravity: "last" // This means that a trampoline jump at walk speed will propel you much higher than a running jump
                        },
                        holdingJumpGravity: {
                            velocity: Game.getTotalValue(0, "c", 0, 0, 0),
                            gravity: "last"
                        },
                        superTrampoline: {// Only with holding jump button
                            velocity: Game.getTotalValue(2, 0, 0, 0, 0),
                            gravity: Game.getTotalValue(0, 0, 7, 0, 0)
                        }
                    }
                },
                /*
                    The game changes the picel unit two frames before hitting a block/ceiling, and calculates the difference between the replaced and replacement values, and subtracts this number from Marios Y-Position 2 frames later.
                    For example. you are 3 frames away from a hit block with a velocity of -02000 and a gravity of 00700.
                    Your speed next fram will be 01700 but you will move a distance of -01900. Then the speed next frame would be 01E00 and you will move a distance of -01200.
                    next frame, your speed and change distance will both be 02500.
                */
                ceilingHit: {
                    // Hitting untouched ? blocks or hitting bricks while small
                    soft: {
                        velocity: Game.getTotalValue(0, 0, "x", "x", "x"),
                        gravity: "last"
                    },
                    // Hitting anything else (static/unbreakable blocks)
                    hard: {
                        velocity: Game.getTotalValue(0, 1, "x", "x", "x"),
                        gravity: "last"
                    }
                }
            }
        }
    }

    // Changes player values based on keypresses and player speed
    // Handles ground movements
    groundMovement() {
        /*Game.level.tiles.forEach(row => roe.forEach(tile => {
            if (tile instanceof Tile) {
                if (tile.contents > 0) {
                    let side = this.checkCollisionSide(tile)
                }
            }
        }))*/
        this.largeLevelHitboxCollision();
        // Determines which values to use based on if mario is walking or running
        let playerMovementTypeX = this.keys.sprint ? "run" : "walk",
            levelTiles = Game.level.tiles;

        // Foreach (checks every single tile)
        levelTiles.forEach(row => row.forEach(tile => {
            this.addY(1);
            let side = this.checkCollisionSide(tile);
            this.addY(-1);
            if (side == "bottom") {
                this.hasTileBelow = true;
                this.jumping = false;
            }
        }))

        if (!this.jumping && this.hasTileBelow)
        
        // walking acceleration logic
            // Logic when player walks left
            if (this.keys.left) {
                // When player reaches max walk speed
                if (this.velocityX <= -this.physics.groundPhysics[playerMovementTypeX].maxSpeed) {
                    this.velocityX = -this.physics.groundPhysics[playerMovementTypeX].maxSpeed;

                    //here is where the 10 frames of maintaining speed is (i think, not actually 100% sure)

                    this.accelerationX = 0;
                }

                // When player begins walking left
                else if (this.velocityX == 0) this.accelerationX = -this.physics.groundPhysics.walk.minVelocity;

                // Logic for quick turn-around
                else if (!this.jumping && this.velocityX < this.physics.groundPhysics.skidTurnaroundSpeed && this.velocityX > 0) this.velocityX = -this.physics.groundPhysics.walk.minVelocity;

                // Logic when nothing special happening so player accelerates regularly
                else this.accelerationX = -this.physics.groundPhysics[playerMovementTypeX].acceleration;

            // Logic when player moves right
            } else if (this.keys.right) {

                // When player reaches max move speed
                if (this.velocityX >= this.physics.groundPhysics[playerMovementTypeX].maxSpeed) {
                    this.velocityX = this.physics.groundPhysics[playerMovementTypeX].maxSpeed;

                    //here is where the 10 frames of maintaining speed is (i think, not actually 100% sure)
                    
                    this.accelerationX = 0;
                }
                    
                // When player begins moving right
                else if (this.velocityX == 0) this.accelerationX = this.physics.groundPhysics.walk.minVelocity;

                // Logic for quick turn-around
                else if (!this.jumping && this.velocityX > -this.physics.groundPhysics.skidTurnaroundSpeed && this.velocityX < 0) this.velocityX = this.physics.groundPhysics.walk.minVelocity;

                // Logic when nothing special happening so player accelerates regularly
                else this.accelerationX = this.physics.groundPhysics[playerMovementTypeX].acceleration;

        // Walking deceleration Logic
            } else if (this.lastMovementX) {

                // Logic when last button pressed is left
                if (this.lastMovementX == "left") {

                    // When player releases movement button and coasts to a stop
                    if (this.velocityX < 0) this.accelerationX = this.physics.groundPhysics.releaseDeceleration;
                    
                    // When player presses opposite movement button to skid
                    else if (this.velocityX > 0 && !this.jumping) this.skidding = true;
                    
                    // When player releases opposite movement button and decelerates to stop from skidding
                    else {
                        this.lastMovementX = "";
                        this.velocityX = 0;
                        this.accelerationX = 0;
                    }
                }

                // Logic when last button pressed is right
                else if (this.lastMovementX == "right") {

                    // When player releases movement button and coasts to a stop
                    if (this.velocityX > 0) this.accelerationX = -this.physics.groundPhysics.releaseDeceleration;

                    // When player presses opposite movement button to skid
                    else if (this.velocityX < 0 && !this.jumping) this.skidding = true;
                    
                    // when player releases opposite movement button and decelerates to stop from skkidding
                    else {
                        this.lastMovementX = "";
                        this.velocityX = 0;
                        this.accelerationX = 0;
                    }
                }
            } else {
                this.accelerationX = 0;
                this.velocityX = 0;
            }
    
    // Skidding physics
        if (this.skidding && !this.jumping) {

            // Left skid
            if (this.lastMovementX == "left") {

                // Player is skidding. Pressing/releasing movement button has no effect and will decelerate at same rate to 0
                if (this.velocityX > 0) {
                    this.accelerationX = -this.physics.groundPhysics.skidDeceleration;
                    this.velocityX += this.accelerationX;
                }

                // Player velocity has reached opposite velocity so velocity and acceleration go to 0 to stop movement in opposite direction
                else {
                    this.velocityX = 0;
                    this.accelerationX = 0;
                    this.skidding = false;
                }

            // Right skid
            } else if (this.lastMovementX == "right") {

                // Player is skidding. Pressing/releasing movement button has no effect and will decelerate at same rate to 0
                if (this.velocityX < 0) {
                    this.accelerationX = this.physics.groundPhysics.skidDeceleration;
                    this.velocityX += this.accelerationX;
                }

                // Player velocity has reached opposite velocity so velocity and acceleration go to 0 to stop movement in opposite direction
                else {
                    this.velocityX = 0;
                    this.accelerationX = 0;
                    this.skidding = false;
                }
            }
        }
    }
    
    // Handles air movement
    airMovement() {
        let velocityParamY = (this.holdingJumpButton ? "holdingJump" : "falling") + "Gravity";
        if (this.keys.up) {
            if (!this.jumping && !this.holdingJumpButton) {
                this.directionAtStartOfJump = this.lastMovementX;
                this.speedAtStartOfJump = this.velocityX;
                this.holdingJumpButton = true;
                this.jumping = true;

                // This determines what kind of variables mario uses depending on how fast he is moving

                // // If X velocity is positive
                if (this.speedAtStartOfJump > 0) {

                    // Lower
                    if (this.speedAtStartOfJump < Game.getTotalValue(0, 1, 0, 0, 0)) this.speedType = "lower";

                    // Between
                    else if (this.speedAtStartOfJump >= Game.getTotalValue(0, 1, 0, 0, 0) && this.speedAtStartOfJump <= Game.getTotalValue(0, 2, 4, "F", "F")) this.speedType = "between";

                    // Higher
                    else if (this.speedAtStartOfJump >= Game.getTotalValue(0, 2, 5, 0, 0)) this.speedType = "greater";

                // If X velocity is negative
                } else if (this.speedAtStartOfJump < 0) {

                    // Lower
                    if (this.speedAtStartOfJump > -Game.getTotalValue(0, 1, 0, 0, 0)) this.speedType = "lower";
                
                    // Between
                    else if (this.speedAtStartOfJump <= -Game.getTotalValue(0, 1, 0, 0, 0) && this.speedAtStartOfJump >= -Game.getTotalValue(0, 2, 4, "F", "F")) this.speedType = "between";

                    // Higher
                    else if (this.speedAtStartOfJump <= Game.getTotalValue(0, 2, 5, 0, 0)) this.speedType = "greater";
                    
                // If X velocity is 0
                } else if (this.speedAtStartOfJump == 0) {
                    this.speedType = "lower";

                // Level entry velocity stuff
                } else {

                }
                this.velocityY = -this.physics.jumpPhysics[this.speedType].initalVelocity;
            } else this.gravity = this.physics.jumpPhysics[this.speedType][velocityParamY];
        }
        /*
        NOTE:   releasing direction of movement while midair will keep speed the same and will not slow down
        holding/releasing jump has NO effect on midair momentum, so will stay the same / continue changin regardless of the jump button
        */
        if (this.jumping) {
            /*
                mario moving left/right at start of jump:
                    if current direction key = start jump direction:
                        use air acceleration
                    if current direction key = opposite direction:
                        use air deceleration
                    if no current direction key:
                        maintain velocity (do not accelerate/decelerate)
            */
        // Both/no key pressed. Momentum remains constant
            if (!this.keys.left && !this.keys.right) this.accelerationX = 0;
                
        // Moving left at start of jump
            else {
                if (this.directionAtStartOfJump == "left") {

                    // If direction button is the same as direction at the start of the jump (or if no direction is currently held)
                    if (this.lastMovementX == this.directionAtStartOfJump) this.accelerationX = -this.physics.airPhysics.gainMomentum[this.velocityX < -Game.getTotalValue(0, 1, 9, 0, 0) ? "higher" : "lower"];
                    
                    // If direction button is opposite to direction at the start of the jump
                    else {
                        
                        // If X velocity when moving left is greater than getTotalValue(0, 1, 9, 0, 0)
                        if (this.velocityX <= -Game.getTotalValue(0, 1, 9, 0, 0)) this.accelerationX = this.physics.airPhysics.loseMomentum.higher;

                        // If X velocity when moving left is less than getTotalValue(0, 1, 9, 0, 0) and speed at start of jump is less than getTotalValue(0, 1, "D", 0, 0)
                        else if (this.velocityX >= -Game.getTotalValue(0, 1, 9, 0, 0) && this.speedAtStartOfJump <= -Game.getTotalValue(0, 1, "D", 0, 0)) this.accelerationX = this.physics.airPhysics.loseMomentum.lower.highJumpStart;

                        // If X velocity when moving left is less than getTotalValue(0, 1, 9, 0, 0) and speed at start of jump is greater than getTotalValue(0, 1, "D", 0, 0)
                        else if (this.velocityX >= -Game.getTotalValue(0, 1, 9, 0, 0) && this.speedAtStartOfJump > -Game.getTotalValue(0, 1, "D", 0, 0)) this.accelerationX = this.physics.airPhysics.loseMomentum.lower.lowJumpStart;
                    }

            // Moving right at start of jump
                } else if (this.directionAtStartOfJump == "right") {

                    // If direction button is the same as direction at the start of the jump (or if no direction is currently held)
                    if (this.lastMovementX == this.directionAtStartOfJump) this.accelerationX = this.physics.airPhysics.gainMomentum[this.velocityX >= Game.getTotalValue(0, 1, 9, 0, 0) ? "higher" : "lower"];
                    
                    // If direction button is opposite to direction at the start of the jump
                    else {

                        // If X velocity when moving right is greater than getTotalValue(0, 1, 9, 0, 0)
                        if (this.velocityX >= Game.getTotalValue(0, 1, 9, 0, 0)) this.accelerationX = -this.physics.airPhysics.loseMomentum.higher;

                        // If X velocity when moving right is less than getTotalvalue(0, 1, 9, 0, 0) and speed at start of jump is less than getTotalValue(0, 1, "D", 0, 0)
                        else if (this.velocityX <= Game.getTotalValue(0, 1, 9, 0, 0) && this.speedAtStartOfJump >= Game.getTotalValue(0, 1, "D", 0, 0)) this.accelerationX = -this.physics.airPhysics.loseMomentum.lower.highJumpStart;

                        // If X velociry when moving left is less than getTotalValue(0, 1, 9, 0, 0) and speed at start of jump is less than getTotalValue(0, 1, "D", 0, 0)
                        else if (this.velocityX <= Game.getTotalValue(0, 1, 9, 0, 0) && this.speedAtStartOfJump < Game.getTotalValue(0, 1, "D", 0, 0)) this.accelerationX = -this.physics.airPhysics.loseMomentum.lower.lowJumpStart;
                    }

            // If mario starts jump standing still
                } else {
                    if (this.keys.left && !this.keys.right) {
                        this.accelerationX = -this.physics.airPhysics.gainMomentum[this.velocityX < -Game.getTotalValue(0, 1, 9, 0, 0) ? "higher" : "lower"];
                        this.lastMovementX = "left";
                    } else if (this.keys.right && !this.keys.left) {
                        this.accelerationX = this.physics.airPhysics.gainMomentum[this.velocityX > Game.getTotalValue(0, 1, 9, 0, 0) ? "higher" : "lower"];
                        this.lastMovementX = "right";
                    }
                }
            }
        }
    }

    // Handles water movement
    //will cross this shitty bridge when i come to it
    waterMovement() {

    }

    // Gives mario powerups
    givePowerup(powerup) {
        if (typeof powerup === "number") {
            switch (powerup) {
                case 0: // Mario is hit
                    /*
                        Process:
                            check position of collision
                            if top, jump on and hit enemy
                            else:
                                check mario's size
                                if small,
                    */
                    this.sprite = assets[Game.level.location].mario.normal.small.stand[this.direction];
                    this.y += 16;
                    this.h = 16;
                    this.hitbox.y += 16;
                    this.w = 16;

                case 1: // Mushroom
                    if (this.size != 1) return;
                    // Mario's sprite needs to be changed to standing for the grow animation
                    this.sprite = assets[Game.level.location].mario.normal.small.stand[this.direction];
                    /*
                        this is where the small-to-big animation will play.
                        when mario picks up mushroom, animation plays, making him bigger
                        when animation finished, y-coord needds to be increased by 16 (i think, may be subject to change)
                    */

                    // Grow animation
                    //animation here

                    // Final sprite for animation

                    // Give new sprite depending on whether mario standing or jumping as well as direction
                    this.sprite = assets[Game.level.location].mario.normal.big.stand[this.direction];

                    // Y-axis modification
                    this.y -= 16;
                    this.h = 32;
                    this.hitbox.y -= 16;

                    this.w = 16;

                    // Readjusting hitboxes
                    this.hitboxOffsets = {x: 2, y: 5, w: 12, h: 27}
                    this.hitbox = {x: this.x + this.hitboxOffsets.x, y: this.y + this.hitboxOffsets.y, w: this.hitboxOffsets.w, h: this.hitboxOffsets.h}
                    this.size = 2;
                    return;
                case 2: // Flower
                    this.activeFlower = true;
                    this.canShootFireball = true;

                    // Final sprite for animation
                    this.sprite = assets.overworld.mario.normal.big.stand[this.direction];

                    // Y-axis modification
                    if (this.size == 1) {
                        this.y -= 16;
                        this.h = 32;
                        this.hitbox.y -= 16;
                    }

                    // Readjusting hitboxes
                    this.hitboxOffsets = {x: 2, y: 5, w: 12, h: 27}
                    this.hitbox = {x: this.x + this.hitboxOffsets.x, y: this.y + this.hitboxOffsets.y, w: this.hitboxOffsets.w, h: this.hitboxOffsets.h}
                    this.size = 2;
                    return;
                case 3: // Star
                    this.activeStar = true;
                    setTimeout(this.activeStar = false, this.starDuration);
                    return;
                case 4: // 1-Up
                    return;
            }
        }
    }

    // Updates player values
    updatePhysics() {
        //this.largeLevelHitboxCollision();
        //this.largeLevelHitboxCollision();
        //this.update();

        //mario max fall speed if 04800 and wraps back to 04000 when exceeded
        if (this.velocityY >= Game.getTotalValue(0, 4, 8, 0, 0)) this.velocityY = Game.getTotalValue(0, 4, 0, 0, 0);

    // Checks for reaching/exceeding maximum walk/run velocity
        // Run velocity
        if (this.keys.sprint) {

            // If mario moving right
            if (this.velocityX >= this.physics.groundPhysics.run.maxSpeed) {
                this.accelerationX = 0;
                this.velocityX = this.physics.groundPhysics.run.maxSpeed;
                
            // If mario moving left
            } else if (this.velocityX <= -this.physics.groundPhysics.run.maxSpeed) {
                this.accelerationX = 0;
                this.velocityX = -this.physics.groundPhysics.run.maxSpeed;
            }
        // Walk velocity
        } else {

            // If mario moving right
            if (this.velocityX >= this.physics.groundPhysics.walk.maxSpeed) {
                this.accelerationX = 0;
                this.velocityX = this.physics.groundPhysics.walk.maxSpeed;

            // If mario moving left
            } else if (this.velocityX <= -this.physics.groundPhysics.walk.maxSpeed) {
                this.accelerationX = 0;
                this.velocityX = -this.physics.groundPhysics.walk.maxSpeed;
            }
        }
    }

    moveEnt() {
        let marioYposIncrement = 1;
            this.updateCoords();
            this.largeLevelHitboxCollision();
            this.addY(-marioYposIncrement);
            super.moveEnt();
            this.addY(marioYposIncrement);
            if (this.size == 2 && this.keys.down) this.crouch();
            else if (this.crouching && !this.keys.down) this.standUp();
    }
    
    // Enables crouching
    crouch() {
        if (this.size != 2 || this.jumping) return false;
        if (!this.crouching) {
            this.y += 8;
            this.h -= 8;
            this.newPosY = this.y;
        }
        //mario cannot crouch in midair
        this.accelerationX = 0;

        // applies last movement value from left and right to allow movement directly after crouching
        if (this.lastMovementX) this.movementFromCrouch.lastmovement = this.lastMovementX;
        this.keys.left = false;
        this.keys.right = false;
        this.sprite = assets.overworld.mario.normal.big.crouch;
        this.hitboxOffsets = {x: 3, y: 12, w: 10, h: 12}
        this.hitbox = {x: this.x + this.hitboxOffsets.x, y: this.y + this.hitboxOffsets.y, w: this.hitboxOffsets.w, h: this.hitboxOffsets.h}
        this.crouching = true;
    }

    // Stand up from crouch 
    standUp() {
        if (this.size != 2) return false;
        // Reapplies original movement values to make player move again after crouching
        this.keys.left = this.movementFromCrouch.left;
        this.keys.right = this.movementFromCrouch.right;
        this.lastMovementX = this.movementFromCrouch.lastMovement;
        if (!(this.keys.left && this.keys.right)) this.lastMovementX = this.keys.left ? "left" : "right";
        
        // Returns placeholder values to false for next crouch (probably unneccesary, will keep commented until needed)
        //this.movementFromCrouch = {left: false, right: false}

        this.crouching = false;
        this.sprite = assets.overworld.mario.normal.big.stand;
        this.hitboxOffsets = {x: 2, y: 8, w: 12, h: 24}
        this.hitbox = {x: this.x + this.hitboxOffsets.x, y: this.y + this.hitboxOffsets.y, w: this.hitboxOffsets.w, h: this.hitboxOffsets.h}
    }

    //@Override
    // Overrides original moveEnt() and adds fireball checks
    moveEnt() {
        // Ground movement
        this.groundMovement();

        // Air movement
        this.airMovement();
        
        // FlowerPower Fireball creation (Fireball will have its own Entity class)
        if (this.activeFlower && !this.keys.sprint) this.canShootFireball = true;
        if (this.activeFlower && this.canShootFireball && this.keys.sprint /*&& this.fireballs.length < 3*/) {
            let fireball = new Fireball(this.hitbox.x + this.hitbox.w, this.y + 11);
            this.fireballs.push(fireball);
            this.canShootFireball = false;
        }
        super.moveEnt();
        this.runEnemyCollision();
        this.sprite = assets.overworld.mario.normal[this.size == 1 ? "small" : "big"][this.crouching ? "crouch" : "stand"][this.direction]
    }

    // spawns tile contents or destroys it
    execTileHit(tile) {
        //Mario is able to go 1 pixel into tiles he hits. This needs to be implemented at some point
        let levelTiles = Game.level.tiles,
            xDiff = (this.x + (this.w / 2)) - (tile.x + (tile.w / 2)),
            tilePosX = tile.x / 16,
            tilePosY = tile.y / 16,
            tileRemoved = false;
        if (xDiff < -7 && levelTiles[tilePosY][tilePosX - 1] instanceof Tile) {
            tilePosX -= 1;
        } else if (xDiff > 7 && levelTiles[tilePosY][tilePosX + 1] instanceof Tile) {
            tilePosX += 1;
        }
        tile = levelTiles[tilePosY][tilePosX];
        if (tile.breakable) {
            levelTiles[tilePosY][tilePosX] = undefined;
            Game.level.createLargeHitboxes();
        } else {
            let item = Game.items[Game.items.indexOf(tile.contents)]
            if (typeof tile.contents === "number") {

                // Checks mario's size to change the tile contents depending on size
                if (tile.contents == 6) tile.contents = mario.size == 1 ? 2 : 3;
                
                // This is where the items are spawned
                switch (tile.contents) {
                    case 1: // Coin

                        // Give player coin + points
                        Game.coins ++
                        Game.score += Game.pointValues.coin;

                        // Animate coin above tile
                        let coin = new Coin(tile.x, tile.y, true);
                        tile.contents = coin;
                        break;
                    case 2: // Mushroom
                        let mushroom = new Mushroom(tile.x, tile.y, Game.pointValues.powerUp);
                        Game.items.push(mushroom);
                        tile.contents = mushroom;
                        break;
                    case 3: // Flower
                        let flower = new Flower(tile.x, tile.y);
                        Game.items.push(flower);
                        tile.contents = flower;
                        break;
                    case 4: // Star
                        let star = new Star(tile.x, tile.y);
                        Game.items.push(star);
                        tile.contents = star;
                        break;
                    case 5: // Vine
                        // Vine may have to have extra attribute pointing to which extra section of the level to travel to
                        let vine = new Vine(tile.x, tile.y);
                        //this.contents = vine;
                        break;
                }
                tile.contents.spawn();
            }
        }
        Game.items.forEach(item => {if (item instanceof Mushroom || item instanceof ExtraLife) if (item.checkIfTouching(tile)) item.bounce(tile)})
    }

    // Changes mario based on his size
    hitPlayer() {
        if (this.activeStar) {
            //run enemy death
            return false;
        }
        //if (this.checkIfTouching(enemy)) {
        if (this.collisionSide != "top") {
            if (this.activeStar) {
                //kill enemy
            } else {
                //hit mario
                //use givepowerup()
                //this.givePowerup(0);
            
                switch (this.size) {
                    case 2: // Tall mario
                        // Mario's sprite needs to be changed to standing for the shrink animation
                        this.sprite = assets.overworld.mario.normal.big.stand;
                        /*
                            this is where the big-to-small animation will play.
                            when mario is hit, animation plays, making him smaller
                            when animation finished, y-coord needds to be decreased by 16 (i think, may be subject to change)
                        */

                        // Shrink animation
                        //animation here

                        // Final sprite for animation
                        this.sprite = assets.overworld.mario.normal.small.stand;

                        // Y-axis modification
                        this.y += 16;
                        this.h = 16;

                        this.hitboxOffsets = {x: 4, y: 4, w: 8, h: 12}
                        this.hitbox = {x: this.x + this.hitboxOffsets.x, y: this.y + this.hitboxOffsets.y, w: this.hitboxOffsets.w, h: this.hitboxOffsets.h}
                        this.size = 1;
                        return true;
                    case 1: // Short mario
                        //mario loses life, level resets (or game over)
                        this.checkLives();
                        return true;
                }
            }
        }
    }

    // Collision for large hitboxes. Stops entities from clipping and breaking their physics
    largeLevelHitboxCollision() {
        this.update();
        let levelHitboxes = Game.level.largeHitboxes;
        for (let hitboxIndex = 0; hitboxIndex < levelHitboxes.length; hitboxIndex ++) {
            let levelHitbox = levelHitboxes[hitboxIndex];
            this.collisionSide = this.checkCollisionSide(levelHitbox);
            switch (this.collisionSide) {
                case "left": {
                    this.collisions.left = true;
                    this.setX(levelHitbox.x + levelHitbox.w);
                    this.velocityX = 0;
                    this.accelerationX = 0;
                    break;
                }
                case "right": {
                    this.collisions.right = true;
                    this.setX(levelHitbox.x - this.w);
                    this.velocityX = 0;
                    this.accelerationX = 0;
                    break;
                }
                case "top": {
                    this.collisions.top = true;
                    this.setY(levelHitbox.y + levelHitbox.h);
                    this.velocityY *= -0.5;
                    this.jumping = true;
                    break;
                }
                case "bottom": {
                    this.collisions.bottom = true;
                    this.setY(levelHitbox.y - this.h)
                    this.velocityY = 0;
                    this.gravity = 0;
                    this.jumping = false;
                    break;
                }
                case false: {
                    break;
                }
            }
            this.updateHitboxes();
            let hitboxIsBelow = false;
            // Check if hitbox is 1 pixel below mario and if no, mario is falling and add falling gravity
            if (!this.collisions.bottom && !hitboxIsBelow) {
                
                // Check if hitbox X value is close enough to mario
                if (Math.floor(this.x) < levelHitbox.x + levelHitbox.w && Math.floor(this.x + this.w) > levelHitbox.x) {
                    
                    // Check if hitbox is 1 pixel below mario
                    if  (Math.floor(this.y) < levelHitbox.y && Math.floor(this.y + this.h) >= levelHitbox.y) {
                        this.collisionSide = "bottom";
                        this.jumping = false;
                        this.velocityY = 0;
                        this.gravity = 0;
                        this.collisions.bottom = true;
                        hitboxIsBelow = true;
                        this.hasTileBelow = true;
                        break;
                    } else {
                        this.jumping = true;
                        this.hasTileBelow = false;
                        this.gravity = this.physics.jumpPhysics[this.speedType][this.holdingJumpButton ? "holdingJumpGravity" : "fallingGravity"];
                    }
                }
            }
        }
    }

    checkIfTouchingEntityHitbox(ent) {
        if (!(ent instanceof Entity)) return false;
        return !(
            this.hitbox.x > ent.hitbox.x + ent.hitbox.w ||
            this.hitbox.x + this.hitbox.w < ent.hitbox.x ||
            this.hitbox.y > ent.hitbox.y + ent.hitbox.h ||
            this.hitbox.y + this.hitbox.h < ent.hitbox.y
        )
    }

    checkEnemyCollision(ent) {
        if (! (ent instanceof Entity)) return;
        if (this.checkIfTouchingEntityHitbox(ent)) {
            /**
             * check entity type
             * if can be jumped on, check collision side
             * if top, hit enemy
             * else hit mario
            */
            ent.collisionSide = this.checkCollisionSide(ent);
            //Game.log(ent.collisionSide + 2)
        }
    }

    updateCoords() {
        this.velocityX += this.accelerationX;
        this.x += this.velocityX;
        this.velocityY += this.gravity;
        this.y += this.velocityY;
    }

    runEnemyCollision() {
        Game.level.enemies.forEach(ent => {
            if (ent instanceof Entity) {
                ent.detectMarioCollision();
            }
        })
    }
    
    // Checks how many lives mario has. will either take away a life and check if game over, or just check game over
    checkLives() {
        // If lives == 0, game over
        // Else restart from checkpoint (reset size)
    }

    // Updates hitboxes
    //@Override
    updateHitboxes() {
        this.hitbox.x = this.x + this.hitboxOffsets.x
        this.hitbox.y = this.y + this.hitboxOffsets.y;
    }
}