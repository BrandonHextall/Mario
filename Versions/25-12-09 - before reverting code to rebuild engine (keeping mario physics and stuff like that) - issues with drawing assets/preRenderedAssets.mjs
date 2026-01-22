import {preRenderAsset} from "./preRender.mjs";
import {array} from "./tilemaps.mjs";
export var assets = {
    overworld: {
        mario: {
            // Overworld colours
            normal: {
                small: {
                    stand: preRenderAsset(array.mario.small.stand, array.colours.overworld.mario.normal),
                    walk: {
                        1: preRenderAsset(array.mario.small.walk[1], array.colours.overworld.mario.normal),
                        2: preRenderAsset(array.mario.small.walk[2], array.colours.overworld.mario.normal),
                        3: preRenderAsset(array.mario.small.walk[3], array.colours.overworld.mario.normal)
                    },
                    skid: preRenderAsset(array.mario.small.skid, array.colours.overworld.mario.normal),
                    jump: preRenderAsset(array.mario.small.jump, array.colours.overworld.mario.normal),
                    death: preRenderAsset(array.mario.small.death, array.colours.overworld.mario.normal),
                    flagpole: {
                        1: preRenderAsset(array.mario.small.flagpole[1], array.colours.overworld.mario.normal),
                        2: preRenderAsset(array.mario.small.flagpole[2], array.colours.overworld.mario.normal)
                    },
                    swim: {
                        1: preRenderAsset(array.mario.small.swim[1], array.colours.overworld.mario.normal),
                        2: preRenderAsset(array.mario.small.swim[2], array.colours.overworld.mario.normal),
                        3: preRenderAsset(array.mario.small.swim[3], array.colours.overworld.mario.normal),
                        4: preRenderAsset(array.mario.small.swim[4], array.colours.overworld.mario.normal),
                        5: preRenderAsset(array.mario.small.swim[5], array.colours.overworld.mario.normal)
                    }
                },
                big: {
                    stand: preRenderAsset(array.mario.big.stand, array.colours.overworld.mario.normal),
                    walk: {
                        1: preRenderAsset(array.mario.big.walk[1], array.colours.overworld.mario.normal),
                        2: preRenderAsset(array.mario.big.walk[2], array.colours.overworld.mario.normal),
                        3: preRenderAsset(array.mario.big.walk[3], array.colours.overworld.mario.normal)
                    },
                    skid: preRenderAsset(array.mario.big.skid, array.colours.overworld.mario.normal),
                    jump: preRenderAsset(array.mario.big.jump, array.colours.overworld.mario.normal),
                    crouch: preRenderAsset(array.mario.big.crouch, array.colours.overworld.mario.normal),
                    throw: preRenderAsset(array.mario.big.throw, array.colours.overworld.mario.normal),
                    flagpole: {
                        1: preRenderAsset(array.mario.big.flagpole[1], array.colours.overworld.mario.normal),
                        2: preRenderAsset(array.mario.big.flagpole[2], array.colours.overworld.mario.normal)
                    },
                    swim: {
                        1: preRenderAsset(array.mario.big.swim[1], array.colours.overworld.mario.normal),
                        2: preRenderAsset(array.mario.big.swim[2], array.colours.overworld.mario.normal),
                        3: preRenderAsset(array.mario.big.swim[3], array.colours.overworld.mario.normal),
                        4: preRenderAsset(array.mario.big.swim[4], array.colours.overworld.mario.normal),
                        5: preRenderAsset(array.mario.big.swim[5], array.colours.overworld.mario.normal),
                        6: preRenderAsset(array.mario.big.swim[6], array.colours.overworld.mario.normal)
                    }
                },
                growShrink: {
                    standing: {
                        1: preRenderAsset(array.mario.growShrink.standing[1], array.colours.overworld.mario.normal),
                        2: preRenderAsset(array.mario.growShrink.standing[2], array.colours.overworld.mario.normal),
                        3: preRenderAsset(array.mario.growShrink.standing[3], array.colours.overworld.mario.normal)
                    },
                    jumping: {
                        1: preRenderAsset(array.mario.growShrink.jumping[1], array.colours.overworld.mario.normal),
                        2: preRenderAsset(array.mario.growShrink.jumping[2], array.colours.overworld.mario.normal),
                        3: preRenderAsset(array.mario.growShrink.jumping[3], array.colours.overworld.mario.normal),
                        4: preRenderAsset(array.mario.growShrink.jumping[4], array.colours.overworld.mario.normal)
                    }
                }
            },
            flower: {
                small: {
                    stand: preRenderAsset(array.mario.small.stand, array.colours.overworld.mario.fire),
                    walk: {
                        1: preRenderAsset(array.mario.small.walk[1], array.colours.overworld.mario.fire),
                        2: preRenderAsset(array.mario.small.walk[2], array.colours.overworld.mario.fire),
                        3: preRenderAsset(array.mario.small.walk[3], array.colours.overworld.mario.fire)
                    },
                    skid: preRenderAsset(array.mario.small.skid, array.colours.overworld.mario.fire),
                    jump: preRenderAsset(array.mario.small.jump, array.colours.overworld.mario.fire),
                    death: preRenderAsset(array.mario.small.death, array.colours.overworld.mario.fire),
                    flagpole: {
                        1: preRenderAsset(array.mario.small.flagpole[1], array.colours.overworld.mario.fire),
                        2: preRenderAsset(array.mario.small.flagpole[2], array.colours.overworld.mario.fire)
                    },
                    swim: {
                        1: preRenderAsset(array.mario.small.swim[1], array.colours.overworld.mario.fire),
                        2: preRenderAsset(array.mario.small.swim[2], array.colours.overworld.mario.fire),
                        3: preRenderAsset(array.mario.small.swim[3], array.colours.overworld.mario.fire),
                        4: preRenderAsset(array.mario.small.swim[4], array.colours.overworld.mario.fire),
                        5: preRenderAsset(array.mario.small.swim[5], array.colours.overworld.mario.fire)
                    }
                },
                big: {
                    stand: preRenderAsset(array.mario.big.stand, array.colours.overworld.mario.fire),
                    walk: {
                        1: preRenderAsset(array.mario.big.walk[1], array.colours.overworld.mario.fire),
                        2: preRenderAsset(array.mario.big.walk[2], array.colours.overworld.mario.fire),
                        3: preRenderAsset(array.mario.big.walk[3], array.colours.overworld.mario.fire)
                    },
                    skid: preRenderAsset(array.mario.big.skid, array.colours.overworld.mario.fire),
                    jump: preRenderAsset(array.mario.big.jump, array.colours.overworld.mario.fire),
                    crouch: preRenderAsset(array.mario.big.crouch, array.colours.overworld.mario.fire),
                    throw: preRenderAsset(array.mario.big.throw, array.colours.overworld.mario.fire),
                    flagpole: {
                        1: preRenderAsset(array.mario.big.flagpole[1], array.colours.overworld.mario.fire),
                        2: preRenderAsset(array.mario.big.flagpole[2], array.colours.overworld.mario.fire)
                    },
                    swim: {
                        1: preRenderAsset(array.mario.big.swim[1], array.colours.overworld.mario.fire),
                        2: preRenderAsset(array.mario.big.swim[2], array.colours.overworld.mario.fire),
                        3: preRenderAsset(array.mario.big.swim[3], array.colours.overworld.mario.fire),
                        4: preRenderAsset(array.mario.big.swim[4], array.colours.overworld.mario.fire),
                        5: preRenderAsset(array.mario.big.swim[5], array.colours.overworld.mario.fire),
                        6: preRenderAsset(array.mario.big.swim[6], array.colours.overworld.mario.fire)
                    }
                },
                growShrink: {
                    standing: {
                        1: preRenderAsset(array.mario.growShrink.standing[1], array.colours.overworld.mario.fire),
                        2: preRenderAsset(array.mario.growShrink.standing[2], array.colours.overworld.mario.fire),
                        3: preRenderAsset(array.mario.growShrink.standing[3], array.colours.overworld.mario.fire)
                    },
                    jumping: {
                        1: preRenderAsset(array.mario.growShrink.jumping[1], array.colours.overworld.mario.fire),
                        2: preRenderAsset(array.mario.growShrink.jumping[2], array.colours.overworld.mario.fire),
                        3: preRenderAsset(array.mario.growShrink.jumping[3], array.colours.overworld.mario.fire),
                        4: preRenderAsset(array.mario.growShrink.jumping[4], array.colours.overworld.mario.fire)
                    }
                }
            },
            /*star: {
                small: {
                    stand: preRenderAsset(array.mario.small.stand, array.colours.overworld.mario.star),
                    walk: {
                        1: preRenderAsset(array.mario.small.walk[1], array.colours.overworld.mario.star),
                        2: preRenderAsset(array.mario.small.walk[2], array.colours.overworld.mario.star),
                        3: preRenderAsset(array.mario.small.walk[3], array.colours.overworld.mario.star)
                    },
                    skid: preRenderAsset(array.mario.small.skid, array.colours.overworld.mario.star),
                    jump: preRenderAsset(array.mario.small.jump, array.colours.overworld.mario.star),
                    death: preRenderAsset(array.mario.small.death, array.colours.overworld.mario.star),
                    flagpole: {
                        1: preRenderAsset(array.mario.small.flagpole[1], array.colours.overworld.mario.star),
                        2: preRenderAsset(array.mario.small.flagpole[2], array.colours.overworld.mario.star)
                    },
                    swim: {
                        1: preRenderAsset(array.mario.small.swim[1], array.colours.overworld.mario.star),
                        2: preRenderAsset(array.mario.small.swim[2], array.colours.overworld.mario.star),
                        3: preRenderAsset(array.mario.small.swim[3], array.colours.overworld.mario.star),
                        4: preRenderAsset(array.mario.small.swim[4], array.colours.overworld.mario.star),
                        5: preRenderAsset(array.mario.small.swim[5], array.colours.overworld.mario.star)
                    }
                },
                big: {
                    stand: preRenderAsset(array.mario.big.stand, array.colours.overworld.mario.star),
                    walk: {
                        1: preRenderAsset(array.mario.big.walk[1], array.colours.overworld.mario.star),
                        2: preRenderAsset(array.mario.big.walk[2], array.colours.overworld.mario.star),
                        3: preRenderAsset(array.mario.big.walk[3], array.colours.overworld.mario.star)
                    },
                    skid: preRenderAsset(array.mario.big.skid, array.colours.overworld.mario.star),
                    jump: preRenderAsset(array.mario.big.jump, array.colours.overworld.mario.star),
                    crouch: preRenderAsset(array.mario.big.crouch, array.colours.overworld.mario.star),
                    throw: preRenderAsset(array.mario.big.throw, array.colours.overworld.mario.star),
                    flagpole: {
                        1: preRenderAsset(array.mario.big.flagpole[1], array.colours.overworld.mario.star),
                        2: preRenderAsset(array.mario.big.flagpole[2], array.colours.overworld.mario.star)
                    },
                    swim: {
                        1: preRenderAsset(array.mario.big.swim[1], array.colours.overworld.mario.star),
                        2: preRenderAsset(array.mario.big.swim[2], array.colours.overworld.mario.star),
                        3: preRenderAsset(array.mario.big.swim[3], array.colours.overworld.mario.star),
                        4: preRenderAsset(array.mario.big.swim[4], array.colours.overworld.mario.star),
                        5: preRenderAsset(array.mario.big.swim[5], array.colours.overworld.mario.star),
                        6: preRenderAsset(array.mario.big.swim[6], array.colours.overworld.mario.star)
                    }
                },
                growShrink: {
                    standing: {
                        1: preRenderAsset(array.mario.growShrink.standing[1], array.colours.overworld.mario.star),
                        2: preRenderAsset(array.mario.growShrink.standing[2], array.colours.overworld.mario.star),
                        3: preRenderAsset(array.mario.growShrink.standing[3], array.colours.overworld.mario.star)
                    },
                    jumping: {
                        1: preRenderAsset(array.mario.growShrink.jumping[1], array.colours.overworld.mario.star),
                        2: preRenderAsset(array.mario.growShrink.jumping[2], array.colours.overworld.mario.star),
                        3: preRenderAsset(array.mario.growShrink.jumping[3], array.colours.overworld.mario.star),
                        4: preRenderAsset(array.mario.growShrink.jumping[4], array.colours.overworld.mario.star)
                    }
                }
            },*/
            bubble: preRenderAsset(array.mario.small.swim.bubble, array.colours.overworld.mario.normal)
        },
        enemies: {
            goomba: { //ground
                walk: {
                    1: preRenderAsset(array.enemies.goomba.walk[1], array.colours.overworld.ground),
                    2: preRenderAsset(array.enemies.goomba.walk[2], array.colours.overworld.ground)
                },
                squish: preRenderAsset(array.enemies.goomba.squish, array.colours.overworld.ground)
            },
            beetle: {
                walk: {
                    1: preRenderAsset(array.enemies.beetle.walk[1], array.colours.overworld.ground),
                    2: preRenderAsset(array.enemies.beetle.walk[2], array.colours.overworld.ground)
                },
                inshell: preRenderAsset(array.enemies.beetle.inshell, array.colours.overworld.ground)
            },
            squid: {
                normal: preRenderAsset(array.enemies.squid.normal, array.colours.overworld.ground),
                squish: preRenderAsset(array.enemies.squid.squish, array.colours.overworld.ground)
            },
            bullet: preRenderAsset(array.enemies.bullet, array.colours.overworld.ground),
            hammer: {
                1: preRenderAsset(array.enemies.hammer[1], array.colours.overworld.ground),
                2: preRenderAsset(array.enemies.hammer[2], array.colours.overworld.ground),
                3: preRenderAsset(array.enemies.hammer[3], array.colours.overworld.ground),
                4: preRenderAsset(array.enemies.hammer[4], array.colours.overworld.ground),
            },
            koopa: {
                ground: {
                    green: {
                        1: preRenderAsset(array.enemies.koopa.ground[1], array.colours.overworld.green),
                        2: preRenderAsset(array.enemies.koopa.ground[2], array.colours.overworld.green),
                        shell: preRenderAsset(array.enemies.koopa.shell, array.colours.overworld.green),
                        wakeup: preRenderAsset(array.enemies.koopa.shell, array.colours.overworld.green)
                    },
                    red: {
                        1: preRenderAsset(array.enemies.koopa.ground[1], array.colours.overworld.red),
                        2: preRenderAsset(array.enemies.koopa.ground[2], array.colours.overworld.red),
                        shell: preRenderAsset(array.enemies.koopa.shell, array.colours.overworld.red),
                        wakeup: preRenderAsset(array.enemies.koopa.shell, array.colours.overworld.red)
                    }
                },
                air: {
                    1: preRenderAsset(array.enemies.koopa.air[1], array.colours.overworld.green),
                    2: preRenderAsset(array.enemies.koopa.air[2], array.colours.overworld.green)
                }
            },
            plant: {
                green: {
                    1: preRenderAsset(array.enemies.plant[1], array.colours.overworld.green),
                    2: preRenderAsset(array.enemies.plant[2], array.colours.overworld.green)
                },
                red: {
                    1: preRenderAsset(array.enemies.plant[1], array.colours.overworld.red),
                    2: preRenderAsset(array.enemies.plant[2], array.colours.overworld.red)
                }
            },
            lakitu: {
                green: {
                    1: preRenderAsset(array.enemies.lakitu[1], array.colours.overworld.green),
                    2: preRenderAsset(array.enemies.lakitu[2], array.colours.overworld.green)
                },
                red: {
                    1: preRenderAsset(array.enemies.lakitu[1], array.colours.overworld.red),
                    2: preRenderAsset(array.enemies.lakitu[2], array.colours.overworld.red)
                }
            },
            fish: {
                green: {
                    1: preRenderAsset(array.enemies.fish[1], array.colours.overworld.green),
                    2: preRenderAsset(array.enemies.fish[2], array.colours.overworld.green),
                },
                red: {
                    1: preRenderAsset(array.enemies.fish[1], array.colours.overworld.red),
                    2: preRenderAsset(array.enemies.fish[2], array.colours.overworld.red),
                }
            },
            bro: {
                green: {
                    normal: {
                        1: preRenderAsset(array.enemies.bro.normal[1], array.colours.overworld.green),
                        2: preRenderAsset(array.enemies.bro.normal[2], array.colours.overworld.green),
                        3: preRenderAsset(array.enemies.bro.normal[3], array.colours.overworld.green),
                        4: preRenderAsset(array.enemies.bro.normal[4], array.colours.overworld.green)
                    },
                    holding: {
                        1: preRenderAsset(array.enemies.bro.holding[1], array.colours.overworld.green),
                        2: preRenderAsset(array.enemies.bro.holding[2], array.colours.overworld.green)
                    }
                },
                red: {
                    normal: {
                        1: preRenderAsset(array.enemies.bro.normal[1], array.colours.overworld.red),
                        2: preRenderAsset(array.enemies.bro.normal[2], array.colours.overworld.red),
                        3: preRenderAsset(array.enemies.bro.normal[3], array.colours.overworld.red),
                        4: preRenderAsset(array.enemies.bro.normal[4], array.colours.overworld.red)
                    },
                    holding: {
                        1: preRenderAsset(array.enemies.bro.holding[1], array.colours.overworld.red),
                        2: preRenderAsset(array.enemies.bro.holding[2], array.colours.overworld.red)
                    }
                }
            }
        }
    },
    underground: {

    },
    castle: {

    },
    underwater: {
        
    }
}