import preRenderAsset from "./preRender.mjs";
import array from "./tilemaps.mjs";
const assets = {
    overworld: {
        mario: {
            // Overworld colours
            normal: {
                small: {
                    stand: preRenderAsset(array.mario.small.stand, array.colours.overworld.mario.normal, true),
                    walk: {
                        1: preRenderAsset(array.mario.small.walk[1], array.colours.overworld.mario.normal, true),
                        2: preRenderAsset(array.mario.small.walk[2], array.colours.overworld.mario.normal, true),
                        3: preRenderAsset(array.mario.small.walk[3], array.colours.overworld.mario.normal, true),
                    },
                    skid: preRenderAsset(array.mario.small.skid, array.colours.overworld.mario.normal, true),
                    jump: preRenderAsset(array.mario.small.jump, array.colours.overworld.mario.normal, true),
                    death: preRenderAsset(array.mario.small.death, array.colours.overworld.mario.normal, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.small.flagpole[1], array.colours.overworld.mario.normal, true),
                        2: preRenderAsset(array.mario.small.flagpole[2], array.colours.overworld.mario.normal, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.small.swim[1], array.colours.overworld.mario.normal, true),
                        2: preRenderAsset(array.mario.small.swim[2], array.colours.overworld.mario.normal, true),
                        3: preRenderAsset(array.mario.small.swim[3], array.colours.overworld.mario.normal, true),
                        4: preRenderAsset(array.mario.small.swim[4], array.colours.overworld.mario.normal, true),
                        5: preRenderAsset(array.mario.small.swim[5], array.colours.overworld.mario.normal, true),
                    }
                },
                big: {
                    stand: preRenderAsset(array.mario.big.stand, array.colours.overworld.mario.normal, true),
                    walk: {
                        1: preRenderAsset(array.mario.big.walk[1], array.colours.overworld.mario.normal, true),
                        2: preRenderAsset(array.mario.big.walk[2], array.colours.overworld.mario.normal, true),
                        3: preRenderAsset(array.mario.big.walk[3], array.colours.overworld.mario.normal, true),
                    },
                    skid: preRenderAsset(array.mario.big.skid, array.colours.overworld.mario.normal, true),
                    jump: preRenderAsset(array.mario.big.jump, array.colours.overworld.mario.normal, true),
                    crouch: preRenderAsset(array.mario.big.crouch, array.colours.overworld.mario.normal, true),
                    throw: preRenderAsset(array.mario.big.throw, array.colours.overworld.mario.normal, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.big.flagpole[1], array.colours.overworld.mario.normal, true),
                        2: preRenderAsset(array.mario.big.flagpole[2], array.colours.overworld.mario.normal, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.big.swim[1], array.colours.overworld.mario.normal, true),
                        2: preRenderAsset(array.mario.big.swim[2], array.colours.overworld.mario.normal, true),
                        3: preRenderAsset(array.mario.big.swim[3], array.colours.overworld.mario.normal, true),
                        4: preRenderAsset(array.mario.big.swim[4], array.colours.overworld.mario.normal, true),
                        5: preRenderAsset(array.mario.big.swim[5], array.colours.overworld.mario.normal, true),
                        6: preRenderAsset(array.mario.big.swim[6], array.colours.overworld.mario.normal, true),
                    }
                },
                growShrink: {
                    standing: {
                        1: preRenderAsset(array.mario.growShrink.standing[1], array.colours.overworld.mario.normal, true),
                        2: preRenderAsset(array.mario.growShrink.standing[2], array.colours.overworld.mario.normal, true),
                        3: preRenderAsset(array.mario.growShrink.standing[3], array.colours.overworld.mario.normal, true),
                    },
                    jumping: {
                        1: preRenderAsset(array.mario.growShrink.jumping[1], array.colours.overworld.mario.normal, true),
                        2: preRenderAsset(array.mario.growShrink.jumping[2], array.colours.overworld.mario.normal, true),
                        3: preRenderAsset(array.mario.growShrink.jumping[3], array.colours.overworld.mario.normal, true),
                        4: preRenderAsset(array.mario.growShrink.jumping[4], array.colours.overworld.mario.normal, true),
                    }
                }
            },
            flower: {
                small: {
                    stand: preRenderAsset(array.mario.small.stand, array.colours.overworld.mario.fire, true),
                    walk: {
                        1: preRenderAsset(array.mario.small.walk[1], array.colours.overworld.mario.fire, true),
                        2: preRenderAsset(array.mario.small.walk[2], array.colours.overworld.mario.fire, true),
                        3: preRenderAsset(array.mario.small.walk[3], array.colours.overworld.mario.fire, true),
                    },
                    skid: preRenderAsset(array.mario.small.skid, array.colours.overworld.mario.fire, true),
                    jump: preRenderAsset(array.mario.small.jump, array.colours.overworld.mario.fire, true),
                    death: preRenderAsset(array.mario.small.death, array.colours.overworld.mario.fire, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.small.flagpole[1], array.colours.overworld.mario.fire, true),
                        2: preRenderAsset(array.mario.small.flagpole[2], array.colours.overworld.mario.fire, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.small.swim[1], array.colours.overworld.mario.fire, true),
                        2: preRenderAsset(array.mario.small.swim[2], array.colours.overworld.mario.fire, true),
                        3: preRenderAsset(array.mario.small.swim[3], array.colours.overworld.mario.fire, true),
                        4: preRenderAsset(array.mario.small.swim[4], array.colours.overworld.mario.fire, true),
                        5: preRenderAsset(array.mario.small.swim[5], array.colours.overworld.mario.fire, true),
                    }
                },
                big: {
                    stand: preRenderAsset(array.mario.big.stand, array.colours.overworld.mario.fire, true),
                    walk: {
                        1: preRenderAsset(array.mario.big.walk[1], array.colours.overworld.mario.fire, true),
                        2: preRenderAsset(array.mario.big.walk[2], array.colours.overworld.mario.fire, true),
                        3: preRenderAsset(array.mario.big.walk[3], array.colours.overworld.mario.fire, true),
                    },
                    skid: preRenderAsset(array.mario.big.skid, array.colours.overworld.mario.fire, true),
                    jump: preRenderAsset(array.mario.big.jump, array.colours.overworld.mario.fire, true),
                    crouch: preRenderAsset(array.mario.big.crouch, array.colours.overworld.mario.fire, true),
                    throw: preRenderAsset(array.mario.big.throw, array.colours.overworld.mario.fire, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.big.flagpole[1], array.colours.overworld.mario.fire, true),
                        2: preRenderAsset(array.mario.big.flagpole[2], array.colours.overworld.mario.fire, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.big.swim[1], array.colours.overworld.mario.fire, true),
                        2: preRenderAsset(array.mario.big.swim[2], array.colours.overworld.mario.fire, true),
                        3: preRenderAsset(array.mario.big.swim[3], array.colours.overworld.mario.fire, true),
                        4: preRenderAsset(array.mario.big.swim[4], array.colours.overworld.mario.fire, true),
                        5: preRenderAsset(array.mario.big.swim[5], array.colours.overworld.mario.fire, true),
                        6: preRenderAsset(array.mario.big.swim[6], array.colours.overworld.mario.fire, true),
                    }
                },
                growShrink: {
                    standing: {
                        1: preRenderAsset(array.mario.growShrink.standing[1], array.colours.overworld.mario.fire, true),
                        2: preRenderAsset(array.mario.growShrink.standing[2], array.colours.overworld.mario.fire, true),
                        3: preRenderAsset(array.mario.growShrink.standing[3], array.colours.overworld.mario.fire, true),
                    },
                    jumping: {
                        1: preRenderAsset(array.mario.growShrink.jumping[1], array.colours.overworld.mario.fire, true),
                        2: preRenderAsset(array.mario.growShrink.jumping[2], array.colours.overworld.mario.fire, true),
                        3: preRenderAsset(array.mario.growShrink.jumping[3], array.colours.overworld.mario.fire, true),
                        4: preRenderAsset(array.mario.growShrink.jumping[4], array.colours.overworld.mario.fire, true),
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
            bubble: preRenderAsset(array.mario.small.swim.bubble, array.colours.overworld.mario.normal),
        },
        enemies: {
            goomba: { //ground
                walk: {
                    1: preRenderAsset(array.enemies.goomba.walk[1], array.colours.overworld.ground),
                    2: preRenderAsset(array.enemies.goomba.walk[2], array.colours.overworld.ground),
                },
                squish: preRenderAsset(array.enemies.goomba.squish, array.colours.overworld.ground),
            },
            beetle: {
                walk: {
                    1: preRenderAsset(array.enemies.beetle.walk[1], array.colours.overworld.ground),
                    2: preRenderAsset(array.enemies.beetle.walk[2], array.colours.overworld.ground),
                },
                inshell: preRenderAsset(array.enemies.beetle.inshell, array.colours.overworld.ground),
            },
            squid: {
                normal: preRenderAsset(array.enemies.squid.normal, array.colours.overworld.ground),
                squish: preRenderAsset(array.enemies.squid.squish, array.colours.overworld.ground),
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
                        wakeup: preRenderAsset(array.enemies.koopa.shell, array.colours.overworld.green),
                    },
                    red: {
                        1: preRenderAsset(array.enemies.koopa.ground[1], array.colours.overworld.red),
                        2: preRenderAsset(array.enemies.koopa.ground[2], array.colours.overworld.red),
                        shell: preRenderAsset(array.enemies.koopa.shell, array.colours.overworld.red),
                        wakeup: preRenderAsset(array.enemies.koopa.shell, array.colours.overworld.red),
                    }
                },
                air: {
                    1: preRenderAsset(array.enemies.koopa.air[1], array.colours.overworld.green),
                    2: preRenderAsset(array.enemies.koopa.air[2], array.colours.overworld.green),
                }
            },
            plant: {
                green: {
                    1: preRenderAsset(array.enemies.plant[1], array.colours.overworld.green),
                    2: preRenderAsset(array.enemies.plant[2], array.colours.overworld.green),
                },
                red: {
                    1: preRenderAsset(array.enemies.plant[1], array.colours.overworld.red),
                    2: preRenderAsset(array.enemies.plant[2], array.colours.overworld.red),
                }
            },
            lakitu: {
                green: {
                    1: preRenderAsset(array.enemies.lakitu[1], array.colours.overworld.green),
                    2: preRenderAsset(array.enemies.lakitu[2], array.colours.overworld.green),
                },
                red: {
                    1: preRenderAsset(array.enemies.lakitu[1], array.colours.overworld.red),
                    2: preRenderAsset(array.enemies.lakitu[2], array.colours.overworld.red),
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
                        4: preRenderAsset(array.enemies.bro.normal[4], array.colours.overworld.green),
                    },
                    holding: {
                        1: preRenderAsset(array.enemies.bro.holding[1], array.colours.overworld.green),
                        2: preRenderAsset(array.enemies.bro.holding[2], array.colours.overworld.green),
                    }
                },
                red: {
                    normal: {
                        1: preRenderAsset(array.enemies.bro.normal[1], array.colours.overworld.red),
                        2: preRenderAsset(array.enemies.bro.normal[2], array.colours.overworld.red),
                        3: preRenderAsset(array.enemies.bro.normal[3], array.colours.overworld.red),
                        4: preRenderAsset(array.enemies.bro.normal[4], array.colours.overworld.red),
                    },
                    holding: {
                        1: preRenderAsset(array.enemies.bro.holding[1], array.colours.overworld.red),
                        2: preRenderAsset(array.enemies.bro.holding[2], array.colours.overworld.red),
                    }
                }
            },
            bowser: {
                green: {
                    1: preRenderAsset(array.enemies.bowser[1], array.colours.overworld.green),
                    2: preRenderAsset(array.enemies.bowser[2], array.colours.overworld.green),
                    3: preRenderAsset(array.enemies.bowser[3], array.colours.overworld.green),
                    4: preRenderAsset(array.enemies.bowser[4], array.colours.overworld.green),
                    hammer: {
                        1: preRenderAsset(array.enemies.bowser.hammer[1], array.colours.overworld.green),
                        2: preRenderAsset(array.enemies.bowser.hammer[2], array.colours.overworld.green),
                    }
                },
                red: {
                    1: preRenderAsset(array.enemies.bowser[1], array.colours.overworld.red),
                    2: preRenderAsset(array.enemies.bowser[2], array.colours.overworld.red),
                    3: preRenderAsset(array.enemies.bowser[3], array.colours.overworld.red),
                    4: preRenderAsset(array.enemies.bowser[4], array.colours.overworld.red),
                    hammer: {
                        1: preRenderAsset(array.enemies.bowser.hammer[1], array.colours.overworld.red),
                        2: preRenderAsset(array.enemies.bowser.hammer[2], array.colours.overworld.red),
                    }
                }
            },
            flame: {
                1: preRenderAsset(array.enemies.flame[1], array.colours.overworld.red),
                2: preRenderAsset(array.enemies.flame[2], array.colours.overworld.red),
            },
            spiny: {
                walk: {
                    1: preRenderAsset(array.enemies.spiny.walk[1], array.colours.overworld.red),
                    2: preRenderAsset(array.enemies.spiny.walk[2], array.colours.overworld.red),
                },
                ball: {
                    1: preRenderAsset(array.enemies.spiny.ball[1], array.colours.overworld.red),
                    2: preRenderAsset(array.enemies.spiny.ball[2], array.colours.overworld.red),
                }
            },
            fireball: preRenderAsset(array.enemies.fireball, array.colours.overworld.red),
        },
        tiles: {
            groundAndStone: {
                crackedBrick: preRenderAsset(array.tiles.groundAndStone.crackedBrick, array.colours.overworld.groundAndStone),
                brick1: preRenderAsset(array.tiles.groundAndStone.brick1, array.colours.overworld.groundAndStone),
                brick2: preRenderAsset(array.tiles.groundAndStone.brick2, array.colours.overworld.groundAndStone),
                emptyBrick: preRenderAsset(array.tiles.groundAndStone.emptyBrick, array.colours.overworld.groundAndStone),
                stairBrick: preRenderAsset(array.tiles.groundAndStone.stairBrick, array.colours.overworld.groundAndStone),
                floatingPlatformFoundation: preRenderAsset(array.tiles.groundAndStone.floatingPlatformFoundation, array.colours.overworld.groundAndStone),
                bridgeBottom: preRenderAsset(array.tiles.groundAndStone.bridgeBottom, array.colours.overworld.groundAndStone),
                rubble: preRenderAsset(array.tiles.groundAndStone.rubble, array.colours.overworld.groundAndStone),
                particleBlock: preRenderAsset(array.tiles.groundAndStone.particleBlock, array.colours.overworld.groundAndStone),
                treeTrunk: preRenderAsset(array.tiles.groundAndStone.treeTrunk, array.colours.overworld.groundAndStone),
                fencePost: preRenderAsset(array.tiles.groundAndStone.fencePost, array.colours.overworld.groundAndStone),
                ropeTiles: {
                    1: preRenderAsset(array.tiles.groundAndStone.ropeTiles[1], array.colours.overworld.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.ropeTiles[2], array.colours.overworld.groundAndStone),
                    3: preRenderAsset(array.tiles.groundAndStone.ropeTiles[3], array.colours.overworld.groundAndStone),
                    4: preRenderAsset(array.tiles.groundAndStone.ropeTiles[4], array.colours.overworld.groundAndStone),
                    
                },
                mushroomStem: {
                    1: preRenderAsset(array.tiles.groundAndStone.mushroomStem[1], array.colours.overworld.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.mushroomStem[2], array.colours.overworld.groundAndStone),
                },
                castleTiles: {
                    1: preRenderAsset(array.tiles.groundAndStone.castleTiles[1], array.colours.overworld.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.castleTiles[2], array.colours.overworld.groundAndStone),
                    3: preRenderAsset(array.tiles.groundAndStone.castleTiles[3], array.colours.overworld.groundAndStone),
                    4: preRenderAsset(array.tiles.groundAndStone.castleTiles[4], array.colours.overworld.groundAndStone),
                    5: preRenderAsset(array.tiles.groundAndStone.castleTiles[5], array.colours.overworld.groundAndStone),
                    6: preRenderAsset(array.tiles.groundAndStone.castleTiles[6], array.colours.overworld.groundAndStone),
                    7: preRenderAsset(array.tiles.groundAndStone.castleTiles[7], array.colours.overworld.groundAndStone),
                },
                cannonTiles: {
                    1: preRenderAsset(array.tiles.groundAndStone.castleTiles[1], array.colours.overworld.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.castleTiles[2], array.colours.overworld.groundAndStone),
                    3: preRenderAsset(array.tiles.groundAndStone.castleTiles[3], array.colours.overworld.groundAndStone),
                }
            },
            pipesAndScenery: {
                grassPlatform: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.grassPlatform[1], array.colours.overworld.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.grassPlatform[2], array.colours.overworld.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.grassPlatform[3], array.colours.overworld.pipesAndScenery),
                },
                bush: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.bush[1], array.colours.overworld.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.bush[2], array.colours.overworld.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.bush[3], array.colours.overworld.pipesAndScenery),
                },
                kelp: preRenderAsset(array.tiles.pipesAndScenery.kelp, array.colours.overworld.pipesAndScenery),
                treeSmall: preRenderAsset(array.tiles.pipesAndScenery.treeSmall, array.colours.overworld.pipesAndScenery),
                treeLarge: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.treeLarge[1], array.colours.overworld.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.treeLarge[2], array.colours.overworld.pipesAndScenery),
                },
                pipe: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.pipe[1], array.colours.overworld.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.pipe[2], array.colours.overworld.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.pipe[3], array.colours.overworld.pipesAndScenery),
                    4: preRenderAsset(array.tiles.pipesAndScenery.pipe[4], array.colours.overworld.pipesAndScenery),
                    5: preRenderAsset(array.tiles.pipesAndScenery.pipe[5], array.colours.overworld.pipesAndScenery),
                    6: preRenderAsset(array.tiles.pipesAndScenery.pipe[6], array.colours.overworld.pipesAndScenery),
                    7: preRenderAsset(array.tiles.pipesAndScenery.pipe[7], array.colours.overworld.pipesAndScenery),
                    8: preRenderAsset(array.tiles.pipesAndScenery.pipe[8], array.colours.overworld.pipesAndScenery),
                    9: preRenderAsset(array.tiles.pipesAndScenery.pipe[9], array.colours.overworld.pipesAndScenery),
                    10: preRenderAsset(array.tiles.pipesAndScenery.pipe[10], array.colours.overworld.pipesAndScenery),
                },
                flagpole: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.flagpole[1], array.colours.overworld.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.flagpole[2], array.colours.overworld.pipesAndScenery),
                },
                bridgeSupport: preRenderAsset(array.tiles.pipesAndScenery.bridgeSupport, array.colours.overworld.pipesAndScenery),
                someWeirdChain: preRenderAsset(array.tiles.pipesAndScenery.someWeirdChain, array.colours.overworld.pipesAndScenery),
                hill: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.hill[1], array.colours.overworld.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.hill[2], array.colours.overworld.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.hill[3], array.colours.overworld.pipesAndScenery),
                    4: preRenderAsset(array.tiles.pipesAndScenery.hill[4], array.colours.overworld.pipesAndScenery),
                    5: preRenderAsset(array.tiles.pipesAndScenery.hill[5], array.colours.overworld.pipesAndScenery),
                    6: preRenderAsset(array.tiles.pipesAndScenery.hill[6], array.colours.overworld.pipesAndScenery),
                }
            },
            coins: {
                question: {
                    1: preRenderAsset(array.tiles.coins.question[1], array.colours.overworld.coins),
                    2: preRenderAsset(array.tiles.coins.question[2], array.colours.overworld.coins),
                    3: preRenderAsset(array.tiles.coins.question[3], array.colours.overworld.coins),
                },
                coin: {
                    1: preRenderAsset(array.tiles.coins.coin[1], array.colours.overworld.coins),
                    2: preRenderAsset(array.tiles.coins.coin[2], array.colours.overworld.coins),
                    3: preRenderAsset(array.tiles.coins.coin[3], array.colours.overworld.coins),
                },
                coinbackground: {
                    1: preRenderAsset(array.tiles.coins.coinBackground[1], array.colours.overworld.coins),
                    2: preRenderAsset(array.tiles.coins.coinBackground[2], array.colours.overworld.coins),
                    3: preRenderAsset(array.tiles.coins.coinBackground[3], array.colours.overworld.coins),
                },
                axe: {
                    1: preRenderAsset(array.tiles.coins.axe[1], array.colours.overworld.coins),
                    2: preRenderAsset(array.tiles.coins.axe[2], array.colours.overworld.coins),
                    3: preRenderAsset(array.tiles.coins.axe[3], array.colours.overworld.coins),
                }
            },
            waterAndSky: {
                cloud: {
                    1: preRenderAsset(array.tiles.waterAndSky.cloud[1], array.colours.overworld.waterAndSky),
                    2: preRenderAsset(array.tiles.waterAndSky.cloud[2], array.colours.overworld.waterAndSky),
                    3: preRenderAsset(array.tiles.waterAndSky.cloud[3], array.colours.overworld.waterAndSky),
                    4: preRenderAsset(array.tiles.waterAndSky.cloud[4], array.colours.overworld.waterAndSky),
                    5: preRenderAsset(array.tiles.waterAndSky.cloud[5], array.colours.overworld.waterAndSky),
                    6: preRenderAsset(array.tiles.waterAndSky.cloud[6], array.colours.overworld.waterAndSky),
                },
                water: {
                    1: preRenderAsset(array.tiles.waterAndSky.water[1], array.colours.overworld.waterAndSky),
                    2: preRenderAsset(array.tiles.waterAndSky.water[2], array.colours.overworld.waterAndSky),
                },
                lakituCloud: preRenderAsset(array.tiles.waterAndSky.lakituCloud, array.colours.overworld.waterAndSky),
                bowserFightPlatform: preRenderAsset(array.tiles.waterAndSky.bowserFightPlatform, array.colours.overworld.waterAndSky),
            }
        },
        items: {
            mushroom: preRenderAsset(array.items.mushroom, array.colours.overworld.items),
            extraLife: preRenderAsset(array.items.extraLife, array.colours.overworld.items),
            flower: {
                mario: preRenderAsset([array.items.flower.head[1].mario, array.items.flower.stem], array.colours.overworld.items),
                luigi: preRenderAsset([array.items.flower.head[1].luigi, array.items.flower.stem], array.colours.overworld.luigi),
                flowerPower: preRenderAsset([array.items.flower.head[1].flowerPower, array.items.flower.stem], array.colours.overworld.mario.fire),
                stem: preRenderAsset(array.items.flower.stem, array.colours.overworld.items),
                head: {
                    1: {
                        mario: preRenderAsset(array.items.flower.head[1].mario, array.colours.overworld.mario.normal),
                        luigi: preRenderAsset(array.items.flower.head[1].luigi, array.colours.overworld.luigi),
                        flowerPower: preRenderAsset(array.items.flower.head[1].flowerPower, array.colours.overworld.mario.fire),
                    },
                    2: preRenderAsset(array.items.flower.head[2], array.colours.overworld.items),
                    3: preRenderAsset(array.items.flower.head[3], array.colours.overworld.items),
                    4: preRenderAsset(array.items.flower.head[4], array.colours.overworld.items),
                }
            },
            star: {
                1: {
                    mario: preRenderAsset(array.items.star[1].mario, array.colours.overworld.mario.normal),
                    luigi: preRenderAsset(array.items.star[1].luigi, array.colours.overworld.luigi),
                    flowerPower: preRenderAsset(array.items.star[1].flowerPower, array.colours.overworld.mario.fire),
                },
                2: preRenderAsset(array.items.star[2], array.colours.overworld.items),
                3: preRenderAsset(array.items.star[3], array.colours.overworld.items),
                4: preRenderAsset(array.items.star[4], array.colours.overworld.items),
            }
        },
        dynamicObjects: {
            platform: {
                1: preRenderAsset(array.dynamicObjects.platform[1], array.colours.overworld.items),
                2: preRenderAsset(array.dynamicObjects.platform[2], array.colours.overworld.items),
                3: preRenderAsset(array.dynamicObjects.platform[3], array.colours.overworld.items),
                4: preRenderAsset(array.dynamicObjects.platform[4], array.colours.overworld.items),
            },
            cloudPlatform: {
                1: preRenderAsset(array.dynamicObjects.cloudPlatform[1], array.colours.overworld.items),
                2: preRenderAsset(array.dynamicObjects.cloudPlatform[2], array.colours.overworld.items),
            },
            spring: {
                1: preRenderAsset(array.dynamicObjects.spring[1], array.colours.overworld.items),
                2: preRenderAsset(array.dynamicObjects.spring[2], array.colours.overworld.items),
                3: preRenderAsset(array.dynamicObjects.spring[3], array.colours.overworld.items),
                brick: preRenderAsset(array.dynamicObjects.spring.brick, array.colours.overworld.ground),
            },
            flags: {
                pole: preRenderAsset(array.dynamicObjects.flags.pole, array.colours.overworld.items),
                castle: preRenderAsset(array.dynamicObjects.flags.castle, array.colours.overworld.items),
            },
            vine: {
                1: preRenderAsset(array.dynamicObjects.vine[1], array.colours.overworld.items),
                2: preRenderAsset(array.dynamicObjects.vine[2], array.colours.overworld.items),
            },
            brickBreak: {
                top: {
                    1: preRenderAsset(array.dynamicObjects.brickBreak.top[1], array.colours.overworld.items),
                    2: preRenderAsset(array.dynamicObjects.brickBreak.top[2], array.colours.overworld.items),
                },
                bottom: {
                    1: preRenderAsset(array.dynamicObjects.brickBreak.bottom[1], array.colours.overworld.items),
                    2: preRenderAsset(array.dynamicObjects.brickBreak.bottom[2], array.colours.overworld.items),
                }
            },
            coinCollect: {
                1: preRenderAsset(array.dynamicObjects.coinCollect[1], array.colours.overworld.items),
                2: preRenderAsset(array.dynamicObjects.coinCollect[2], array.colours.overworld.items),
                3: preRenderAsset(array.dynamicObjects.coinCollect[3], array.colours.overworld.items),
                4: preRenderAsset(array.dynamicObjects.coinCollect[4], array.colours.overworld.items),
            },
            fireball: {
                1: preRenderAsset(array.dynamicObjects.fireball[1], array.colours.overworld.items),
                2: preRenderAsset(array.dynamicObjects.fireball[2], array.colours.overworld.items),
                3: preRenderAsset(array.dynamicObjects.fireball[3], array.colours.overworld.items),
                4: preRenderAsset(array.dynamicObjects.fireball[4], array.colours.overworld.items),
            },
            fireballCollision: {
                1: preRenderAsset(array.dynamicObjects.fireballCollision[1], array.colours.overworld.items),
                2: preRenderAsset(array.dynamicObjects.fireballCollision[2], array.colours.overworld.items),
                3: preRenderAsset(array.dynamicObjects.fireballCollision[3], array.colours.overworld.items),
            },
            points: {
                1: preRenderAsset(array.dynamicObjects.points[1], array.colours.overworld.items),
                100: preRenderAsset(array.dynamicObjects.points[100], array.colours.overworld.items),
                200: preRenderAsset(array.dynamicObjects.points[200], array.colours.overworld.items),
                400: preRenderAsset(array.dynamicObjects.points[400], array.colours.overworld.items),
                500: preRenderAsset(array.dynamicObjects.points[500], array.colours.overworld.items),
                800: preRenderAsset(array.dynamicObjects.points[800], array.colours.overworld.items),
                1000: preRenderAsset(array.dynamicObjects.points[1000], array.colours.overworld.items),
                2000: preRenderAsset(array.dynamicObjects.points[2000], array.colours.overworld.items),
                4000: preRenderAsset(array.dynamicObjects.points[4000], array.colours.overworld.items),
                5000: preRenderAsset(array.dynamicObjects.points[5000], array.colours.overworld.items),
                8000: preRenderAsset(array.dynamicObjects.points[8000], array.colours.overworld.items),
            }
        }
    },
    underground: {
        mario: {
            // underground colours
            normal: {
                small: {
                    stand: preRenderAsset(array.mario.small.stand, array.colours.underground.mario.normal, true),
                    walk: {
                        1: preRenderAsset(array.mario.small.walk[1], array.colours.underground.mario.normal, true),
                        2: preRenderAsset(array.mario.small.walk[2], array.colours.underground.mario.normal, true),
                        3: preRenderAsset(array.mario.small.walk[3], array.colours.underground.mario.normal, true),
                    },
                    skid: preRenderAsset(array.mario.small.skid, array.colours.underground.mario.normal, true),
                    jump: preRenderAsset(array.mario.small.jump, array.colours.underground.mario.normal, true),
                    death: preRenderAsset(array.mario.small.death, array.colours.underground.mario.normal, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.small.flagpole[1], array.colours.underground.mario.normal, true),
                        2: preRenderAsset(array.mario.small.flagpole[2], array.colours.underground.mario.normal, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.small.swim[1], array.colours.underground.mario.normal, true),
                        2: preRenderAsset(array.mario.small.swim[2], array.colours.underground.mario.normal, true),
                        3: preRenderAsset(array.mario.small.swim[3], array.colours.underground.mario.normal, true),
                        4: preRenderAsset(array.mario.small.swim[4], array.colours.underground.mario.normal, true),
                        5: preRenderAsset(array.mario.small.swim[5], array.colours.underground.mario.normal, true),
                    }
                },
                big: {
                    stand: preRenderAsset(array.mario.big.stand, array.colours.underground.mario.normal, true),
                    walk: {
                        1: preRenderAsset(array.mario.big.walk[1], array.colours.underground.mario.normal, true),
                        2: preRenderAsset(array.mario.big.walk[2], array.colours.underground.mario.normal, true),
                        3: preRenderAsset(array.mario.big.walk[3], array.colours.underground.mario.normal, true),
                    },
                    skid: preRenderAsset(array.mario.big.skid, array.colours.underground.mario.normal, true),
                    jump: preRenderAsset(array.mario.big.jump, array.colours.underground.mario.normal, true),
                    crouch: preRenderAsset(array.mario.big.crouch, array.colours.underground.mario.normal, true),
                    throw: preRenderAsset(array.mario.big.throw, array.colours.underground.mario.normal, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.big.flagpole[1], array.colours.underground.mario.normal, true),
                        2: preRenderAsset(array.mario.big.flagpole[2], array.colours.underground.mario.normal, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.big.swim[1], array.colours.underground.mario.normal, true),
                        2: preRenderAsset(array.mario.big.swim[2], array.colours.underground.mario.normal, true),
                        3: preRenderAsset(array.mario.big.swim[3], array.colours.underground.mario.normal, true),
                        4: preRenderAsset(array.mario.big.swim[4], array.colours.underground.mario.normal, true),
                        5: preRenderAsset(array.mario.big.swim[5], array.colours.underground.mario.normal, true),
                        6: preRenderAsset(array.mario.big.swim[6], array.colours.underground.mario.normal, true),
                    }
                },
                growShrink: {
                    standing: {
                        1: preRenderAsset(array.mario.growShrink.standing[1], array.colours.underground.mario.normal, true),
                        2: preRenderAsset(array.mario.growShrink.standing[2], array.colours.underground.mario.normal, true),
                        3: preRenderAsset(array.mario.growShrink.standing[3], array.colours.underground.mario.normal, true),
                    },
                    jumping: {
                        1: preRenderAsset(array.mario.growShrink.jumping[1], array.colours.underground.mario.normal, true),
                        2: preRenderAsset(array.mario.growShrink.jumping[2], array.colours.underground.mario.normal, true),
                        3: preRenderAsset(array.mario.growShrink.jumping[3], array.colours.underground.mario.normal, true),
                        4: preRenderAsset(array.mario.growShrink.jumping[4], array.colours.underground.mario.normal, true),
                    }
                }
            },
            flower: {
                small: {
                    stand: preRenderAsset(array.mario.small.stand, array.colours.underground.mario.fire, true),
                    walk: {
                        1: preRenderAsset(array.mario.small.walk[1], array.colours.underground.mario.fire, true),
                        2: preRenderAsset(array.mario.small.walk[2], array.colours.underground.mario.fire, true),
                        3: preRenderAsset(array.mario.small.walk[3], array.colours.underground.mario.fire, true),
                    },
                    skid: preRenderAsset(array.mario.small.skid, array.colours.underground.mario.fire, true),
                    jump: preRenderAsset(array.mario.small.jump, array.colours.underground.mario.fire, true),
                    death: preRenderAsset(array.mario.small.death, array.colours.underground.mario.fire, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.small.flagpole[1], array.colours.underground.mario.fire, true),
                        2: preRenderAsset(array.mario.small.flagpole[2], array.colours.underground.mario.fire, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.small.swim[1], array.colours.underground.mario.fire, true),
                        2: preRenderAsset(array.mario.small.swim[2], array.colours.underground.mario.fire, true),
                        3: preRenderAsset(array.mario.small.swim[3], array.colours.underground.mario.fire, true),
                        4: preRenderAsset(array.mario.small.swim[4], array.colours.underground.mario.fire, true),
                        5: preRenderAsset(array.mario.small.swim[5], array.colours.underground.mario.fire, true),
                    }
                },
                big: {
                    stand: preRenderAsset(array.mario.big.stand, array.colours.underground.mario.fire, true),
                    walk: {
                        1: preRenderAsset(array.mario.big.walk[1], array.colours.underground.mario.fire, true),
                        2: preRenderAsset(array.mario.big.walk[2], array.colours.underground.mario.fire, true),
                        3: preRenderAsset(array.mario.big.walk[3], array.colours.underground.mario.fire, true),
                    },
                    skid: preRenderAsset(array.mario.big.skid, array.colours.underground.mario.fire, true),
                    jump: preRenderAsset(array.mario.big.jump, array.colours.underground.mario.fire, true),
                    crouch: preRenderAsset(array.mario.big.crouch, array.colours.underground.mario.fire, true),
                    throw: preRenderAsset(array.mario.big.throw, array.colours.underground.mario.fire, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.big.flagpole[1], array.colours.underground.mario.fire, true),
                        2: preRenderAsset(array.mario.big.flagpole[2], array.colours.underground.mario.fire, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.big.swim[1], array.colours.underground.mario.fire, true),
                        2: preRenderAsset(array.mario.big.swim[2], array.colours.underground.mario.fire, true),
                        3: preRenderAsset(array.mario.big.swim[3], array.colours.underground.mario.fire, true),
                        4: preRenderAsset(array.mario.big.swim[4], array.colours.underground.mario.fire, true),
                        5: preRenderAsset(array.mario.big.swim[5], array.colours.underground.mario.fire, true),
                        6: preRenderAsset(array.mario.big.swim[6], array.colours.underground.mario.fire, true),
                    }
                },
                growShrink: {
                    standing: {
                        1: preRenderAsset(array.mario.growShrink.standing[1], array.colours.underground.mario.fire, true),
                        2: preRenderAsset(array.mario.growShrink.standing[2], array.colours.underground.mario.fire, true),
                        3: preRenderAsset(array.mario.growShrink.standing[3], array.colours.underground.mario.fire, true),
                    },
                    jumping: {
                        1: preRenderAsset(array.mario.growShrink.jumping[1], array.colours.underground.mario.fire, true),
                        2: preRenderAsset(array.mario.growShrink.jumping[2], array.colours.underground.mario.fire, true),
                        3: preRenderAsset(array.mario.growShrink.jumping[3], array.colours.underground.mario.fire, true),
                        4: preRenderAsset(array.mario.growShrink.jumping[4], array.colours.underground.mario.fire, true),
                    }
                }
            },
            /*star: {
                small: {
                    stand: preRenderAsset(array.mario.small.stand, array.colours.underground.mario.star),
                    walk: {
                        1: preRenderAsset(array.mario.small.walk[1], array.colours.underground.mario.star),
                        2: preRenderAsset(array.mario.small.walk[2], array.colours.underground.mario.star),
                        3: preRenderAsset(array.mario.small.walk[3], array.colours.underground.mario.star)
                    },
                    skid: preRenderAsset(array.mario.small.skid, array.colours.underground.mario.star),
                    jump: preRenderAsset(array.mario.small.jump, array.colours.underground.mario.star),
                    death: preRenderAsset(array.mario.small.death, array.colours.underground.mario.star),
                    flagpole: {
                        1: preRenderAsset(array.mario.small.flagpole[1], array.colours.underground.mario.star),
                        2: preRenderAsset(array.mario.small.flagpole[2], array.colours.underground.mario.star)
                    },
                    swim: {
                        1: preRenderAsset(array.mario.small.swim[1], array.colours.underground.mario.star),
                        2: preRenderAsset(array.mario.small.swim[2], array.colours.underground.mario.star),
                        3: preRenderAsset(array.mario.small.swim[3], array.colours.underground.mario.star),
                        4: preRenderAsset(array.mario.small.swim[4], array.colours.underground.mario.star),
                        5: preRenderAsset(array.mario.small.swim[5], array.colours.underground.mario.star)
                    }
                },
                big: {
                    stand: preRenderAsset(array.mario.big.stand, array.colours.underground.mario.star),
                    walk: {
                        1: preRenderAsset(array.mario.big.walk[1], array.colours.underground.mario.star),
                        2: preRenderAsset(array.mario.big.walk[2], array.colours.underground.mario.star),
                        3: preRenderAsset(array.mario.big.walk[3], array.colours.underground.mario.star)
                    },
                    skid: preRenderAsset(array.mario.big.skid, array.colours.underground.mario.star),
                    jump: preRenderAsset(array.mario.big.jump, array.colours.underground.mario.star),
                    crouch: preRenderAsset(array.mario.big.crouch, array.colours.underground.mario.star),
                    throw: preRenderAsset(array.mario.big.throw, array.colours.underground.mario.star),
                    flagpole: {
                        1: preRenderAsset(array.mario.big.flagpole[1], array.colours.underground.mario.star),
                        2: preRenderAsset(array.mario.big.flagpole[2], array.colours.underground.mario.star)
                    },
                    swim: {
                        1: preRenderAsset(array.mario.big.swim[1], array.colours.underground.mario.star),
                        2: preRenderAsset(array.mario.big.swim[2], array.colours.underground.mario.star),
                        3: preRenderAsset(array.mario.big.swim[3], array.colours.underground.mario.star),
                        4: preRenderAsset(array.mario.big.swim[4], array.colours.underground.mario.star),
                        5: preRenderAsset(array.mario.big.swim[5], array.colours.underground.mario.star),
                        6: preRenderAsset(array.mario.big.swim[6], array.colours.underground.mario.star)
                    }
                },
                growShrink: {
                    standing: {
                        1: preRenderAsset(array.mario.growShrink.standing[1], array.colours.underground.mario.star),
                        2: preRenderAsset(array.mario.growShrink.standing[2], array.colours.underground.mario.star),
                        3: preRenderAsset(array.mario.growShrink.standing[3], array.colours.underground.mario.star)
                    },
                    jumping: {
                        1: preRenderAsset(array.mario.growShrink.jumping[1], array.colours.underground.mario.star),
                        2: preRenderAsset(array.mario.growShrink.jumping[2], array.colours.underground.mario.star),
                        3: preRenderAsset(array.mario.growShrink.jumping[3], array.colours.underground.mario.star),
                        4: preRenderAsset(array.mario.growShrink.jumping[4], array.colours.underground.mario.star)
                    }
                }
            },*/
            bubble: preRenderAsset(array.mario.small.swim.bubble, array.colours.underground.mario.normal),
        },
        enemies: {
            goomba: { //ground
                walk: {
                    1: preRenderAsset(array.enemies.goomba.walk[1], array.colours.underground.ground),
                    2: preRenderAsset(array.enemies.goomba.walk[2], array.colours.underground.ground),
                },
                squish: preRenderAsset(array.enemies.goomba.squish, array.colours.underground.ground),
            },
            beetle: {
                walk: {
                    1: preRenderAsset(array.enemies.beetle.walk[1], array.colours.underground.ground),
                    2: preRenderAsset(array.enemies.beetle.walk[2], array.colours.underground.ground),
                },
                inshell: preRenderAsset(array.enemies.beetle.inshell, array.colours.underground.ground),
            },
            squid: {
                normal: preRenderAsset(array.enemies.squid.normal, array.colours.underground.ground),
                squish: preRenderAsset(array.enemies.squid.squish, array.colours.underground.ground),
            },
            bullet: preRenderAsset(array.enemies.bullet, array.colours.underground.ground),
            hammer: {
                1: preRenderAsset(array.enemies.hammer[1], array.colours.underground.ground),
                2: preRenderAsset(array.enemies.hammer[2], array.colours.underground.ground),
                3: preRenderAsset(array.enemies.hammer[3], array.colours.underground.ground),
                4: preRenderAsset(array.enemies.hammer[4], array.colours.underground.ground),
            },
            koopa: {
                ground: {
                    green: {
                        1: preRenderAsset(array.enemies.koopa.ground[1], array.colours.underground.green),
                        2: preRenderAsset(array.enemies.koopa.ground[2], array.colours.underground.green),
                        shell: preRenderAsset(array.enemies.koopa.shell, array.colours.underground.green),
                        wakeup: preRenderAsset(array.enemies.koopa.shell, array.colours.underground.green),
                    },
                    red: {
                        1: preRenderAsset(array.enemies.koopa.ground[1], array.colours.underground.red),
                        2: preRenderAsset(array.enemies.koopa.ground[2], array.colours.underground.red),
                        shell: preRenderAsset(array.enemies.koopa.shell, array.colours.underground.red),
                        wakeup: preRenderAsset(array.enemies.koopa.shell, array.colours.underground.red),
                    }
                },
                air: {
                    1: preRenderAsset(array.enemies.koopa.air[1], array.colours.underground.green),
                    2: preRenderAsset(array.enemies.koopa.air[2], array.colours.underground.green),
                }
            },
            plant: {
                green: {
                    1: preRenderAsset(array.enemies.plant[1], array.colours.underground.green),
                    2: preRenderAsset(array.enemies.plant[2], array.colours.underground.green),
                },
                red: {
                    1: preRenderAsset(array.enemies.plant[1], array.colours.underground.red),
                    2: preRenderAsset(array.enemies.plant[2], array.colours.underground.red),
                }
            },
            lakitu: {
                green: {
                    1: preRenderAsset(array.enemies.lakitu[1], array.colours.underground.green),
                    2: preRenderAsset(array.enemies.lakitu[2], array.colours.underground.green),
                },
                red: {
                    1: preRenderAsset(array.enemies.lakitu[1], array.colours.underground.red),
                    2: preRenderAsset(array.enemies.lakitu[2], array.colours.underground.red),
                }
            },
            fish: {
                green: {
                    1: preRenderAsset(array.enemies.fish[1], array.colours.underground.green),
                    2: preRenderAsset(array.enemies.fish[2], array.colours.underground.green),
                },
                red: {
                    1: preRenderAsset(array.enemies.fish[1], array.colours.underground.red),
                    2: preRenderAsset(array.enemies.fish[2], array.colours.underground.red),
                }
            },
            bro: {
                green: {
                    normal: {
                        1: preRenderAsset(array.enemies.bro.normal[1], array.colours.underground.green),
                        2: preRenderAsset(array.enemies.bro.normal[2], array.colours.underground.green),
                        3: preRenderAsset(array.enemies.bro.normal[3], array.colours.underground.green),
                        4: preRenderAsset(array.enemies.bro.normal[4], array.colours.underground.green),
                    },
                    holding: {
                        1: preRenderAsset(array.enemies.bro.holding[1], array.colours.underground.green),
                        2: preRenderAsset(array.enemies.bro.holding[2], array.colours.underground.green),
                    }
                },
                red: {
                    normal: {
                        1: preRenderAsset(array.enemies.bro.normal[1], array.colours.underground.red),
                        2: preRenderAsset(array.enemies.bro.normal[2], array.colours.underground.red),
                        3: preRenderAsset(array.enemies.bro.normal[3], array.colours.underground.red),
                        4: preRenderAsset(array.enemies.bro.normal[4], array.colours.underground.red),
                    },
                    holding: {
                        1: preRenderAsset(array.enemies.bro.holding[1], array.colours.underground.red),
                        2: preRenderAsset(array.enemies.bro.holding[2], array.colours.underground.red),
                    }
                }
            },
            bowser: {
                green: {
                    1: preRenderAsset(array.enemies.bowser[1], array.colours.underground.green),
                    2: preRenderAsset(array.enemies.bowser[2], array.colours.underground.green),
                    3: preRenderAsset(array.enemies.bowser[3], array.colours.underground.green),
                    4: preRenderAsset(array.enemies.bowser[4], array.colours.underground.green),
                    hammer: {
                        1: preRenderAsset(array.enemies.bowser.hammer[1], array.colours.underground.green),
                        2: preRenderAsset(array.enemies.bowser.hammer[2], array.colours.underground.green),
                    }
                },
                red: {
                    1: preRenderAsset(array.enemies.bowser[1], array.colours.underground.red),
                    2: preRenderAsset(array.enemies.bowser[2], array.colours.underground.red),
                    3: preRenderAsset(array.enemies.bowser[3], array.colours.underground.red),
                    4: preRenderAsset(array.enemies.bowser[4], array.colours.underground.red),
                    hammer: {
                        1: preRenderAsset(array.enemies.bowser.hammer[1], array.colours.underground.red),
                        2: preRenderAsset(array.enemies.bowser.hammer[2], array.colours.underground.red),
                    }
                }
            },
            flame: {
                1: preRenderAsset(array.enemies.flame[1], array.colours.underground.red),
                2: preRenderAsset(array.enemies.flame[2], array.colours.underground.red),
            },
            spiny: {
                walk: {
                    1: preRenderAsset(array.enemies.spiny.walk[1], array.colours.underground.red),
                    2: preRenderAsset(array.enemies.spiny.walk[2], array.colours.underground.red),
                },
                ball: {
                    1: preRenderAsset(array.enemies.spiny.ball[1], array.colours.underground.red),
                    2: preRenderAsset(array.enemies.spiny.ball[2], array.colours.underground.red),
                }
            },
            fireball: preRenderAsset(array.enemies.fireball, array.colours.underground.red),
        },
        tiles: {
            groundAndStone: {
                crackedBrick: preRenderAsset(array.tiles.groundAndStone.crackedBrick, array.colours.underground.groundAndStone),
                brick1: preRenderAsset(array.tiles.groundAndStone.brick1, array.colours.underground.groundAndStone),
                brick2: preRenderAsset(array.tiles.groundAndStone.brick2, array.colours.underground.groundAndStone),
                emptyBrick: preRenderAsset(array.tiles.groundAndStone.emptyBrick, array.colours.underground.groundAndStone),
                stairBrick: preRenderAsset(array.tiles.groundAndStone.stairBrick, array.colours.underground.groundAndStone),
                floatingPlatformFoundation: preRenderAsset(array.tiles.groundAndStone.floatingPlatformFoundation, array.colours.underground.groundAndStone),
                bridgeBottom: preRenderAsset(array.tiles.groundAndStone.bridgeBottom, array.colours.underground.groundAndStone),
                rubble: preRenderAsset(array.tiles.groundAndStone.rubble, array.colours.underground.groundAndStone),
                particleBlock: preRenderAsset(array.tiles.groundAndStone.particleBlock, array.colours.underground.groundAndStone),
                treeTrunk: preRenderAsset(array.tiles.groundAndStone.treeTrunk, array.colours.underground.groundAndStone),
                fencePost: preRenderAsset(array.tiles.groundAndStone.fencePost, array.colours.underground.groundAndStone),
                ropeTiles: {
                    1: preRenderAsset(array.tiles.groundAndStone.ropeTiles[1], array.colours.underground.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.ropeTiles[2], array.colours.underground.groundAndStone),
                    3: preRenderAsset(array.tiles.groundAndStone.ropeTiles[3], array.colours.underground.groundAndStone),
                    4: preRenderAsset(array.tiles.groundAndStone.ropeTiles[4], array.colours.underground.groundAndStone),
                    
                },
                mushroomStem: {
                    1: preRenderAsset(array.tiles.groundAndStone.mushroomStem[1], array.colours.underground.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.mushroomStem[2], array.colours.underground.groundAndStone),
                },
                castleTiles: {
                    1: preRenderAsset(array.tiles.groundAndStone.castleTiles[1], array.colours.underground.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.castleTiles[2], array.colours.underground.groundAndStone),
                    3: preRenderAsset(array.tiles.groundAndStone.castleTiles[3], array.colours.underground.groundAndStone),
                    4: preRenderAsset(array.tiles.groundAndStone.castleTiles[4], array.colours.underground.groundAndStone),
                    5: preRenderAsset(array.tiles.groundAndStone.castleTiles[5], array.colours.underground.groundAndStone),
                    6: preRenderAsset(array.tiles.groundAndStone.castleTiles[6], array.colours.underground.groundAndStone),
                    7: preRenderAsset(array.tiles.groundAndStone.castleTiles[7], array.colours.underground.groundAndStone),
                },
                cannonTiles: {
                    1: preRenderAsset(array.tiles.groundAndStone.castleTiles[1], array.colours.underground.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.castleTiles[2], array.colours.underground.groundAndStone),
                    3: preRenderAsset(array.tiles.groundAndStone.castleTiles[3], array.colours.underground.groundAndStone),
                }
            },
            pipesAndScenery: {
                grassPlatform: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.grassPlatform[1], array.colours.underground.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.grassPlatform[2], array.colours.underground.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.grassPlatform[3], array.colours.underground.pipesAndScenery),
                },
                bush: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.bush[1], array.colours.underground.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.bush[2], array.colours.underground.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.bush[3], array.colours.underground.pipesAndScenery),
                },
                kelp: preRenderAsset(array.tiles.pipesAndScenery.kelp, array.colours.underground.pipesAndScenery),
                treeSmall: preRenderAsset(array.tiles.pipesAndScenery.treeSmall, array.colours.underground.pipesAndScenery),
                treeLarge: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.treeLarge[1], array.colours.underground.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.treeLarge[2], array.colours.underground.pipesAndScenery),
                },
                pipe: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.pipe[1], array.colours.underground.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.pipe[2], array.colours.underground.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.pipe[3], array.colours.underground.pipesAndScenery),
                    4: preRenderAsset(array.tiles.pipesAndScenery.pipe[4], array.colours.underground.pipesAndScenery),
                    5: preRenderAsset(array.tiles.pipesAndScenery.pipe[5], array.colours.underground.pipesAndScenery),
                    6: preRenderAsset(array.tiles.pipesAndScenery.pipe[6], array.colours.underground.pipesAndScenery),
                    7: preRenderAsset(array.tiles.pipesAndScenery.pipe[7], array.colours.underground.pipesAndScenery),
                    8: preRenderAsset(array.tiles.pipesAndScenery.pipe[8], array.colours.underground.pipesAndScenery),
                    9: preRenderAsset(array.tiles.pipesAndScenery.pipe[9], array.colours.underground.pipesAndScenery),
                    10: preRenderAsset(array.tiles.pipesAndScenery.pipe[10], array.colours.underground.pipesAndScenery),
                },
                flagpole: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.flagpole[1], array.colours.underground.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.flagpole[2], array.colours.underground.pipesAndScenery),
                },
                bridgeSupport: preRenderAsset(array.tiles.pipesAndScenery.bridgeSupport, array.colours.underground.pipesAndScenery),
                someWeirdChain: preRenderAsset(array.tiles.pipesAndScenery.someWeirdChain, array.colours.underground.pipesAndScenery),
                hill: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.hill[1], array.colours.underground.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.hill[2], array.colours.underground.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.hill[3], array.colours.underground.pipesAndScenery),
                    4: preRenderAsset(array.tiles.pipesAndScenery.hill[4], array.colours.underground.pipesAndScenery),
                    5: preRenderAsset(array.tiles.pipesAndScenery.hill[5], array.colours.underground.pipesAndScenery),
                    6: preRenderAsset(array.tiles.pipesAndScenery.hill[6], array.colours.underground.pipesAndScenery),
                }
            },
            coins: {
                question: {
                    1: preRenderAsset(array.tiles.coins.question[1], array.colours.underground.coins),
                    2: preRenderAsset(array.tiles.coins.question[2], array.colours.underground.coins),
                    3: preRenderAsset(array.tiles.coins.question[3], array.colours.underground.coins),
                },
                coin: {
                    1: preRenderAsset(array.tiles.coins.coin[1], array.colours.underground.coins),
                    2: preRenderAsset(array.tiles.coins.coin[2], array.colours.underground.coins),
                    3: preRenderAsset(array.tiles.coins.coin[3], array.colours.underground.coins),
                },
                coinbackground: {
                    1: preRenderAsset(array.tiles.coins.coinBackground[1], array.colours.underground.coins),
                    2: preRenderAsset(array.tiles.coins.coinBackground[2], array.colours.underground.coins),
                    3: preRenderAsset(array.tiles.coins.coinBackground[3], array.colours.underground.coins),
                },
                axe: {
                    1: preRenderAsset(array.tiles.coins.axe[1], array.colours.underground.coins),
                    2: preRenderAsset(array.tiles.coins.axe[2], array.colours.underground.coins),
                    3: preRenderAsset(array.tiles.coins.axe[3], array.colours.underground.coins),
                }
            },
            waterAndSky: {
                cloud: {
                    1: preRenderAsset(array.tiles.waterAndSky.cloud[1], array.colours.underground.waterAndSky),
                    2: preRenderAsset(array.tiles.waterAndSky.cloud[2], array.colours.underground.waterAndSky),
                    3: preRenderAsset(array.tiles.waterAndSky.cloud[3], array.colours.underground.waterAndSky),
                    4: preRenderAsset(array.tiles.waterAndSky.cloud[4], array.colours.underground.waterAndSky),
                    5: preRenderAsset(array.tiles.waterAndSky.cloud[5], array.colours.underground.waterAndSky),
                    6: preRenderAsset(array.tiles.waterAndSky.cloud[6], array.colours.underground.waterAndSky),
                },
                water: {
                    1: preRenderAsset(array.tiles.waterAndSky.water[1], array.colours.underground.waterAndSky),
                    2: preRenderAsset(array.tiles.waterAndSky.water[2], array.colours.underground.waterAndSky),
                },
                lakituCloud: preRenderAsset(array.tiles.waterAndSky.lakituCloud, array.colours.underground.waterAndSky),
                bowserFightPlatform: preRenderAsset(array.tiles.waterAndSky.bowserFightPlatform, array.colours.underground.waterAndSky),
            }
        },
        items: {
            mushroom: preRenderAsset(array.items.mushroom, array.colours.underground.items),
            extraLife: preRenderAsset(array.items.extraLife, array.colours.underground.items),
            flower: {
                mario: preRenderAsset([array.items.flower.head[1].mario, array.items.flower.stem], array.colours.underground.items),
                luigi: preRenderAsset([array.items.flower.head[1].luigi, array.items.flower.stem], array.colours.underground.luigi),
                flowerPower: preRenderAsset([array.items.flower.head[1].flowerPower, array.items.flower.stem], array.colours.underground.mario.fire),
                stem: preRenderAsset(array.items.flower.stem, array.colours.underground.items),
                head: {
                    1: {
                        mario: preRenderAsset(array.items.flower.head[1].mario, array.colours.underground.mario.normal),
                        luigi: preRenderAsset(array.items.flower.head[1].luigi, array.colours.underground.luigi),
                        flowerPower: preRenderAsset(array.items.flower.head[1].flowerPower, array.colours.underground.mario.fire),
                    },
                    2: preRenderAsset(array.items.flower.head[2], array.colours.underground.items),
                    3: preRenderAsset(array.items.flower.head[3], array.colours.underground.items),
                    4: preRenderAsset(array.items.flower.head[4], array.colours.underground.items),
                }
            },
            star: {
                1: {
                    mario: preRenderAsset(array.items.star[1].mario, array.colours.underground.mario.normal),
                    luigi: preRenderAsset(array.items.star[1].luigi, array.colours.underground.luigi),
                    flowerPower: preRenderAsset(array.items.star[1].flowerPower, array.colours.underground.mario.fire),
                },
                2: preRenderAsset(array.items.star[2], array.colours.underground.items),
                3: preRenderAsset(array.items.star[3], array.colours.underground.items),
                4: preRenderAsset(array.items.star[4], array.colours.underground.items),
            }
        },
        dynamicObjects: {
            platform: {
                1: preRenderAsset(array.dynamicObjects.platform[1], array.colours.underground.items),
                2: preRenderAsset(array.dynamicObjects.platform[2], array.colours.underground.items),
                3: preRenderAsset(array.dynamicObjects.platform[3], array.colours.underground.items),
                4: preRenderAsset(array.dynamicObjects.platform[4], array.colours.underground.items),
            },
            cloudPlatform: {
                1: preRenderAsset(array.dynamicObjects.cloudPlatform[1], array.colours.underground.items),
                2: preRenderAsset(array.dynamicObjects.cloudPlatform[2], array.colours.underground.items),
            },
            spring: {
                1: preRenderAsset(array.dynamicObjects.spring[1], array.colours.underground.items),
                2: preRenderAsset(array.dynamicObjects.spring[2], array.colours.underground.items),
                3: preRenderAsset(array.dynamicObjects.spring[3], array.colours.underground.items),
                brick: preRenderAsset(array.dynamicObjects.spring.brick, array.colours.underground.ground),
            },
            flags: {
                pole: preRenderAsset(array.dynamicObjects.flags.pole, array.colours.underground.items),
                castle: preRenderAsset(array.dynamicObjects.flags.castle, array.colours.underground.items),
            },
            vine: {
                1: preRenderAsset(array.dynamicObjects.vine[1], array.colours.underground.items),
                2: preRenderAsset(array.dynamicObjects.vine[2], array.colours.underground.items),
            },
            brickBreak: {
                top: {
                    1: preRenderAsset(array.dynamicObjects.brickBreak.top[1], array.colours.underground.items),
                    2: preRenderAsset(array.dynamicObjects.brickBreak.top[2], array.colours.underground.items),
                },
                bottom: {
                    1: preRenderAsset(array.dynamicObjects.brickBreak.bottom[1], array.colours.underground.items),
                    2: preRenderAsset(array.dynamicObjects.brickBreak.bottom[2], array.colours.underground.items),
                }
            },
            coinCollect: {
                1: preRenderAsset(array.dynamicObjects.coinCollect[1], array.colours.underground.items),
                2: preRenderAsset(array.dynamicObjects.coinCollect[2], array.colours.underground.items),
                3: preRenderAsset(array.dynamicObjects.coinCollect[3], array.colours.underground.items),
                4: preRenderAsset(array.dynamicObjects.coinCollect[4], array.colours.underground.items),
            },
            fireball: {
                1: preRenderAsset(array.dynamicObjects.fireball[1], array.colours.underground.items),
                2: preRenderAsset(array.dynamicObjects.fireball[2], array.colours.underground.items),
                3: preRenderAsset(array.dynamicObjects.fireball[3], array.colours.underground.items),
                4: preRenderAsset(array.dynamicObjects.fireball[4], array.colours.underground.items),
            },
            fireballCollision: {
                1: preRenderAsset(array.dynamicObjects.fireballCollision[1], array.colours.underground.items),
                2: preRenderAsset(array.dynamicObjects.fireballCollision[2], array.colours.underground.items),
                3: preRenderAsset(array.dynamicObjects.fireballCollision[3], array.colours.underground.items),
            },
            points: {
                1: preRenderAsset(array.dynamicObjects.points[1], array.colours.underground.items),
                100: preRenderAsset(array.dynamicObjects.points[100], array.colours.underground.items),
                200: preRenderAsset(array.dynamicObjects.points[200], array.colours.underground.items),
                400: preRenderAsset(array.dynamicObjects.points[400], array.colours.underground.items),
                500: preRenderAsset(array.dynamicObjects.points[500], array.colours.underground.items),
                800: preRenderAsset(array.dynamicObjects.points[800], array.colours.underground.items),
                1000: preRenderAsset(array.dynamicObjects.points[1000], array.colours.underground.items),
                2000: preRenderAsset(array.dynamicObjects.points[2000], array.colours.underground.items),
                4000: preRenderAsset(array.dynamicObjects.points[4000], array.colours.underground.items),
                5000: preRenderAsset(array.dynamicObjects.points[5000], array.colours.underground.items),
                8000: preRenderAsset(array.dynamicObjects.points[8000], array.colours.underground.items),
            }
        }
    },
    castle: {
        mario: {
            // castle colours
            normal: {
                small: {
                    stand: preRenderAsset(array.mario.small.stand, array.colours.castle.mario.normal, true),
                    walk: {
                        1: preRenderAsset(array.mario.small.walk[1], array.colours.castle.mario.normal, true),
                        2: preRenderAsset(array.mario.small.walk[2], array.colours.castle.mario.normal, true),
                        3: preRenderAsset(array.mario.small.walk[3], array.colours.castle.mario.normal, true),
                    },
                    skid: preRenderAsset(array.mario.small.skid, array.colours.castle.mario.normal, true),
                    jump: preRenderAsset(array.mario.small.jump, array.colours.castle.mario.normal, true),
                    death: preRenderAsset(array.mario.small.death, array.colours.castle.mario.normal, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.small.flagpole[1], array.colours.castle.mario.normal, true),
                        2: preRenderAsset(array.mario.small.flagpole[2], array.colours.castle.mario.normal, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.small.swim[1], array.colours.castle.mario.normal, true),
                        2: preRenderAsset(array.mario.small.swim[2], array.colours.castle.mario.normal, true),
                        3: preRenderAsset(array.mario.small.swim[3], array.colours.castle.mario.normal, true),
                        4: preRenderAsset(array.mario.small.swim[4], array.colours.castle.mario.normal, true),
                        5: preRenderAsset(array.mario.small.swim[5], array.colours.castle.mario.normal, true),
                    }
                },
                big: {
                    stand: preRenderAsset(array.mario.big.stand, array.colours.castle.mario.normal, true),
                    walk: {
                        1: preRenderAsset(array.mario.big.walk[1], array.colours.castle.mario.normal, true),
                        2: preRenderAsset(array.mario.big.walk[2], array.colours.castle.mario.normal, true),
                        3: preRenderAsset(array.mario.big.walk[3], array.colours.castle.mario.normal, true),
                    },
                    skid: preRenderAsset(array.mario.big.skid, array.colours.castle.mario.normal, true),
                    jump: preRenderAsset(array.mario.big.jump, array.colours.castle.mario.normal, true),
                    crouch: preRenderAsset(array.mario.big.crouch, array.colours.castle.mario.normal, true),
                    throw: preRenderAsset(array.mario.big.throw, array.colours.castle.mario.normal, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.big.flagpole[1], array.colours.castle.mario.normal, true),
                        2: preRenderAsset(array.mario.big.flagpole[2], array.colours.castle.mario.normal, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.big.swim[1], array.colours.castle.mario.normal, true),
                        2: preRenderAsset(array.mario.big.swim[2], array.colours.castle.mario.normal, true),
                        3: preRenderAsset(array.mario.big.swim[3], array.colours.castle.mario.normal, true),
                        4: preRenderAsset(array.mario.big.swim[4], array.colours.castle.mario.normal, true),
                        5: preRenderAsset(array.mario.big.swim[5], array.colours.castle.mario.normal, true),
                        6: preRenderAsset(array.mario.big.swim[6], array.colours.castle.mario.normal, true),
                    }
                },
                growShrink: {
                    standing: {
                        1: preRenderAsset(array.mario.growShrink.standing[1], array.colours.castle.mario.normal, true),
                        2: preRenderAsset(array.mario.growShrink.standing[2], array.colours.castle.mario.normal, true),
                        3: preRenderAsset(array.mario.growShrink.standing[3], array.colours.castle.mario.normal, true),
                    },
                    jumping: {
                        1: preRenderAsset(array.mario.growShrink.jumping[1], array.colours.castle.mario.normal, true),
                        2: preRenderAsset(array.mario.growShrink.jumping[2], array.colours.castle.mario.normal, true),
                        3: preRenderAsset(array.mario.growShrink.jumping[3], array.colours.castle.mario.normal, true),
                        4: preRenderAsset(array.mario.growShrink.jumping[4], array.colours.castle.mario.normal, true),
                    }
                }
            },
            flower: {
                small: {
                    stand: preRenderAsset(array.mario.small.stand, array.colours.castle.mario.fire, true),
                    walk: {
                        1: preRenderAsset(array.mario.small.walk[1], array.colours.castle.mario.fire, true),
                        2: preRenderAsset(array.mario.small.walk[2], array.colours.castle.mario.fire, true),
                        3: preRenderAsset(array.mario.small.walk[3], array.colours.castle.mario.fire, true),
                    },
                    skid: preRenderAsset(array.mario.small.skid, array.colours.castle.mario.fire, true),
                    jump: preRenderAsset(array.mario.small.jump, array.colours.castle.mario.fire, true),
                    death: preRenderAsset(array.mario.small.death, array.colours.castle.mario.fire, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.small.flagpole[1], array.colours.castle.mario.fire, true),
                        2: preRenderAsset(array.mario.small.flagpole[2], array.colours.castle.mario.fire, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.small.swim[1], array.colours.castle.mario.fire, true),
                        2: preRenderAsset(array.mario.small.swim[2], array.colours.castle.mario.fire, true),
                        3: preRenderAsset(array.mario.small.swim[3], array.colours.castle.mario.fire, true),
                        4: preRenderAsset(array.mario.small.swim[4], array.colours.castle.mario.fire, true),
                        5: preRenderAsset(array.mario.small.swim[5], array.colours.castle.mario.fire, true),
                    }
                },
                big: {
                    stand: preRenderAsset(array.mario.big.stand, array.colours.castle.mario.fire, true),
                    walk: {
                        1: preRenderAsset(array.mario.big.walk[1], array.colours.castle.mario.fire, true),
                        2: preRenderAsset(array.mario.big.walk[2], array.colours.castle.mario.fire, true),
                        3: preRenderAsset(array.mario.big.walk[3], array.colours.castle.mario.fire, true),
                    },
                    skid: preRenderAsset(array.mario.big.skid, array.colours.castle.mario.fire, true),
                    jump: preRenderAsset(array.mario.big.jump, array.colours.castle.mario.fire, true),
                    crouch: preRenderAsset(array.mario.big.crouch, array.colours.castle.mario.fire, true),
                    throw: preRenderAsset(array.mario.big.throw, array.colours.castle.mario.fire, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.big.flagpole[1], array.colours.castle.mario.fire, true),
                        2: preRenderAsset(array.mario.big.flagpole[2], array.colours.castle.mario.fire, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.big.swim[1], array.colours.castle.mario.fire, true),
                        2: preRenderAsset(array.mario.big.swim[2], array.colours.castle.mario.fire, true),
                        3: preRenderAsset(array.mario.big.swim[3], array.colours.castle.mario.fire, true),
                        4: preRenderAsset(array.mario.big.swim[4], array.colours.castle.mario.fire, true),
                        5: preRenderAsset(array.mario.big.swim[5], array.colours.castle.mario.fire, true),
                        6: preRenderAsset(array.mario.big.swim[6], array.colours.castle.mario.fire, true),
                    }
                },
                growShrink: {
                    standing: {
                        1: preRenderAsset(array.mario.growShrink.standing[1], array.colours.castle.mario.fire, true),
                        2: preRenderAsset(array.mario.growShrink.standing[2], array.colours.castle.mario.fire, true),
                        3: preRenderAsset(array.mario.growShrink.standing[3], array.colours.castle.mario.fire, true),
                    },
                    jumping: {
                        1: preRenderAsset(array.mario.growShrink.jumping[1], array.colours.castle.mario.fire, true),
                        2: preRenderAsset(array.mario.growShrink.jumping[2], array.colours.castle.mario.fire, true),
                        3: preRenderAsset(array.mario.growShrink.jumping[3], array.colours.castle.mario.fire, true),
                        4: preRenderAsset(array.mario.growShrink.jumping[4], array.colours.castle.mario.fire, true),
                    }
                }
            },
            /*star: {
                small: {
                    stand: preRenderAsset(array.mario.small.stand, array.colours.castle.mario.star),
                    walk: {
                        1: preRenderAsset(array.mario.small.walk[1], array.colours.castle.mario.star),
                        2: preRenderAsset(array.mario.small.walk[2], array.colours.castle.mario.star),
                        3: preRenderAsset(array.mario.small.walk[3], array.colours.castle.mario.star)
                    },
                    skid: preRenderAsset(array.mario.small.skid, array.colours.castle.mario.star),
                    jump: preRenderAsset(array.mario.small.jump, array.colours.castle.mario.star),
                    death: preRenderAsset(array.mario.small.death, array.colours.castle.mario.star),
                    flagpole: {
                        1: preRenderAsset(array.mario.small.flagpole[1], array.colours.castle.mario.star),
                        2: preRenderAsset(array.mario.small.flagpole[2], array.colours.castle.mario.star)
                    },
                    swim: {
                        1: preRenderAsset(array.mario.small.swim[1], array.colours.castle.mario.star),
                        2: preRenderAsset(array.mario.small.swim[2], array.colours.castle.mario.star),
                        3: preRenderAsset(array.mario.small.swim[3], array.colours.castle.mario.star),
                        4: preRenderAsset(array.mario.small.swim[4], array.colours.castle.mario.star),
                        5: preRenderAsset(array.mario.small.swim[5], array.colours.castle.mario.star)
                    }
                },
                big: {
                    stand: preRenderAsset(array.mario.big.stand, array.colours.castle.mario.star),
                    walk: {
                        1: preRenderAsset(array.mario.big.walk[1], array.colours.castle.mario.star),
                        2: preRenderAsset(array.mario.big.walk[2], array.colours.castle.mario.star),
                        3: preRenderAsset(array.mario.big.walk[3], array.colours.castle.mario.star)
                    },
                    skid: preRenderAsset(array.mario.big.skid, array.colours.castle.mario.star),
                    jump: preRenderAsset(array.mario.big.jump, array.colours.castle.mario.star),
                    crouch: preRenderAsset(array.mario.big.crouch, array.colours.castle.mario.star),
                    throw: preRenderAsset(array.mario.big.throw, array.colours.castle.mario.star),
                    flagpole: {
                        1: preRenderAsset(array.mario.big.flagpole[1], array.colours.castle.mario.star),
                        2: preRenderAsset(array.mario.big.flagpole[2], array.colours.castle.mario.star)
                    },
                    swim: {
                        1: preRenderAsset(array.mario.big.swim[1], array.colours.castle.mario.star),
                        2: preRenderAsset(array.mario.big.swim[2], array.colours.castle.mario.star),
                        3: preRenderAsset(array.mario.big.swim[3], array.colours.castle.mario.star),
                        4: preRenderAsset(array.mario.big.swim[4], array.colours.castle.mario.star),
                        5: preRenderAsset(array.mario.big.swim[5], array.colours.castle.mario.star),
                        6: preRenderAsset(array.mario.big.swim[6], array.colours.castle.mario.star)
                    }
                },
                growShrink: {
                    standing: {
                        1: preRenderAsset(array.mario.growShrink.standing[1], array.colours.castle.mario.star),
                        2: preRenderAsset(array.mario.growShrink.standing[2], array.colours.castle.mario.star),
                        3: preRenderAsset(array.mario.growShrink.standing[3], array.colours.castle.mario.star)
                    },
                    jumping: {
                        1: preRenderAsset(array.mario.growShrink.jumping[1], array.colours.castle.mario.star),
                        2: preRenderAsset(array.mario.growShrink.jumping[2], array.colours.castle.mario.star),
                        3: preRenderAsset(array.mario.growShrink.jumping[3], array.colours.castle.mario.star),
                        4: preRenderAsset(array.mario.growShrink.jumping[4], array.colours.castle.mario.star)
                    }
                }
            },*/
            bubble: preRenderAsset(array.mario.small.swim.bubble, array.colours.castle.mario.normal),
        },
        enemies: {
            goomba: { //ground
                walk: {
                    1: preRenderAsset(array.enemies.goomba.walk[1], array.colours.castle.ground),
                    2: preRenderAsset(array.enemies.goomba.walk[2], array.colours.castle.ground),
                },
                squish: preRenderAsset(array.enemies.goomba.squish, array.colours.castle.ground),
            },
            beetle: {
                walk: {
                    1: preRenderAsset(array.enemies.beetle.walk[1], array.colours.castle.ground),
                    2: preRenderAsset(array.enemies.beetle.walk[2], array.colours.castle.ground),
                },
                inshell: preRenderAsset(array.enemies.beetle.inshell, array.colours.castle.ground),
            },
            squid: {
                normal: preRenderAsset(array.enemies.squid.normal, array.colours.castle.ground),
                squish: preRenderAsset(array.enemies.squid.squish, array.colours.castle.ground),
            },
            bullet: preRenderAsset(array.enemies.bullet, array.colours.castle.ground),
            hammer: {
                1: preRenderAsset(array.enemies.hammer[1], array.colours.castle.ground),
                2: preRenderAsset(array.enemies.hammer[2], array.colours.castle.ground),
                3: preRenderAsset(array.enemies.hammer[3], array.colours.castle.ground),
                4: preRenderAsset(array.enemies.hammer[4], array.colours.castle.ground),
            },
            koopa: {
                ground: {
                    green: {
                        1: preRenderAsset(array.enemies.koopa.ground[1], array.colours.castle.green),
                        2: preRenderAsset(array.enemies.koopa.ground[2], array.colours.castle.green),
                        shell: preRenderAsset(array.enemies.koopa.shell, array.colours.castle.green),
                        wakeup: preRenderAsset(array.enemies.koopa.shell, array.colours.castle.green),
                    },
                    red: {
                        1: preRenderAsset(array.enemies.koopa.ground[1], array.colours.castle.red),
                        2: preRenderAsset(array.enemies.koopa.ground[2], array.colours.castle.red),
                        shell: preRenderAsset(array.enemies.koopa.shell, array.colours.castle.red),
                        wakeup: preRenderAsset(array.enemies.koopa.shell, array.colours.castle.red),
                    }
                },
                air: {
                    1: preRenderAsset(array.enemies.koopa.air[1], array.colours.castle.green),
                    2: preRenderAsset(array.enemies.koopa.air[2], array.colours.castle.green),
                }
            },
            plant: {
                green: {
                    1: preRenderAsset(array.enemies.plant[1], array.colours.castle.green),
                    2: preRenderAsset(array.enemies.plant[2], array.colours.castle.green),
                },
                red: {
                    1: preRenderAsset(array.enemies.plant[1], array.colours.castle.red),
                    2: preRenderAsset(array.enemies.plant[2], array.colours.castle.red),
                }
            },
            lakitu: {
                green: {
                    1: preRenderAsset(array.enemies.lakitu[1], array.colours.castle.green),
                    2: preRenderAsset(array.enemies.lakitu[2], array.colours.castle.green),
                },
                red: {
                    1: preRenderAsset(array.enemies.lakitu[1], array.colours.castle.red),
                    2: preRenderAsset(array.enemies.lakitu[2], array.colours.castle.red),
                }
            },
            fish: {
                green: {
                    1: preRenderAsset(array.enemies.fish[1], array.colours.castle.green),
                    2: preRenderAsset(array.enemies.fish[2], array.colours.castle.green),
                },
                red: {
                    1: preRenderAsset(array.enemies.fish[1], array.colours.castle.red),
                    2: preRenderAsset(array.enemies.fish[2], array.colours.castle.red),
                }
            },
            bro: {
                green: {
                    normal: {
                        1: preRenderAsset(array.enemies.bro.normal[1], array.colours.castle.green),
                        2: preRenderAsset(array.enemies.bro.normal[2], array.colours.castle.green),
                        3: preRenderAsset(array.enemies.bro.normal[3], array.colours.castle.green),
                        4: preRenderAsset(array.enemies.bro.normal[4], array.colours.castle.green),
                    },
                    holding: {
                        1: preRenderAsset(array.enemies.bro.holding[1], array.colours.castle.green),
                        2: preRenderAsset(array.enemies.bro.holding[2], array.colours.castle.green),
                    }
                },
                red: {
                    normal: {
                        1: preRenderAsset(array.enemies.bro.normal[1], array.colours.castle.red),
                        2: preRenderAsset(array.enemies.bro.normal[2], array.colours.castle.red),
                        3: preRenderAsset(array.enemies.bro.normal[3], array.colours.castle.red),
                        4: preRenderAsset(array.enemies.bro.normal[4], array.colours.castle.red),
                    },
                    holding: {
                        1: preRenderAsset(array.enemies.bro.holding[1], array.colours.castle.red),
                        2: preRenderAsset(array.enemies.bro.holding[2], array.colours.castle.red),
                    }
                }
            },
            bowser: {
                green: {
                    1: preRenderAsset(array.enemies.bowser[1], array.colours.castle.green),
                    2: preRenderAsset(array.enemies.bowser[2], array.colours.castle.green),
                    3: preRenderAsset(array.enemies.bowser[3], array.colours.castle.green),
                    4: preRenderAsset(array.enemies.bowser[4], array.colours.castle.green),
                    hammer: {
                        1: preRenderAsset(array.enemies.bowser.hammer[1], array.colours.castle.green),
                        2: preRenderAsset(array.enemies.bowser.hammer[2], array.colours.castle.green),
                    }
                },
                red: {
                    1: preRenderAsset(array.enemies.bowser[1], array.colours.castle.red),
                    2: preRenderAsset(array.enemies.bowser[2], array.colours.castle.red),
                    3: preRenderAsset(array.enemies.bowser[3], array.colours.castle.red),
                    4: preRenderAsset(array.enemies.bowser[4], array.colours.castle.red),
                    hammer: {
                        1: preRenderAsset(array.enemies.bowser.hammer[1], array.colours.castle.red),
                        2: preRenderAsset(array.enemies.bowser.hammer[2], array.colours.castle.red),
                    }
                }
            },
            flame: {
                1: preRenderAsset(array.enemies.flame[1], array.colours.castle.red),
                2: preRenderAsset(array.enemies.flame[2], array.colours.castle.red),
            },
            spiny: {
                walk: {
                    1: preRenderAsset(array.enemies.spiny.walk[1], array.colours.castle.red),
                    2: preRenderAsset(array.enemies.spiny.walk[2], array.colours.castle.red),
                },
                ball: {
                    1: preRenderAsset(array.enemies.spiny.ball[1], array.colours.castle.red),
                    2: preRenderAsset(array.enemies.spiny.ball[2], array.colours.castle.red),
                }
            },
            fireball: preRenderAsset(array.enemies.fireball, array.colours.castle.red),
        },
        tiles: {
            groundAndStone: {
                crackedBrick: preRenderAsset(array.tiles.groundAndStone.crackedBrick, array.colours.castle.groundAndStone),
                brick1: preRenderAsset(array.tiles.groundAndStone.brick1, array.colours.castle.groundAndStone),
                brick2: preRenderAsset(array.tiles.groundAndStone.brick2, array.colours.castle.groundAndStone),
                emptyBrick: preRenderAsset(array.tiles.groundAndStone.emptyBrick, array.colours.castle.groundAndStone),
                stairBrick: preRenderAsset(array.tiles.groundAndStone.stairBrick, array.colours.castle.groundAndStone),
                floatingPlatformFoundation: preRenderAsset(array.tiles.groundAndStone.floatingPlatformFoundation, array.colours.castle.groundAndStone),
                bridgeBottom: preRenderAsset(array.tiles.groundAndStone.bridgeBottom, array.colours.castle.groundAndStone),
                rubble: preRenderAsset(array.tiles.groundAndStone.rubble, array.colours.castle.groundAndStone),
                particleBlock: preRenderAsset(array.tiles.groundAndStone.particleBlock, array.colours.castle.groundAndStone),
                treeTrunk: preRenderAsset(array.tiles.groundAndStone.treeTrunk, array.colours.castle.groundAndStone),
                fencePost: preRenderAsset(array.tiles.groundAndStone.fencePost, array.colours.castle.groundAndStone),
                ropeTiles: {
                    1: preRenderAsset(array.tiles.groundAndStone.ropeTiles[1], array.colours.castle.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.ropeTiles[2], array.colours.castle.groundAndStone),
                    3: preRenderAsset(array.tiles.groundAndStone.ropeTiles[3], array.colours.castle.groundAndStone),
                    4: preRenderAsset(array.tiles.groundAndStone.ropeTiles[4], array.colours.castle.groundAndStone),
                    
                },
                mushroomStem: {
                    1: preRenderAsset(array.tiles.groundAndStone.mushroomStem[1], array.colours.castle.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.mushroomStem[2], array.colours.castle.groundAndStone),
                },
                castleTiles: {
                    1: preRenderAsset(array.tiles.groundAndStone.castleTiles[1], array.colours.castle.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.castleTiles[2], array.colours.castle.groundAndStone),
                    3: preRenderAsset(array.tiles.groundAndStone.castleTiles[3], array.colours.castle.groundAndStone),
                    4: preRenderAsset(array.tiles.groundAndStone.castleTiles[4], array.colours.castle.groundAndStone),
                    5: preRenderAsset(array.tiles.groundAndStone.castleTiles[5], array.colours.castle.groundAndStone),
                    6: preRenderAsset(array.tiles.groundAndStone.castleTiles[6], array.colours.castle.groundAndStone),
                    7: preRenderAsset(array.tiles.groundAndStone.castleTiles[7], array.colours.castle.groundAndStone),
                },
                cannonTiles: {
                    1: preRenderAsset(array.tiles.groundAndStone.castleTiles[1], array.colours.castle.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.castleTiles[2], array.colours.castle.groundAndStone),
                    3: preRenderAsset(array.tiles.groundAndStone.castleTiles[3], array.colours.castle.groundAndStone),
                }
            },
            pipesAndScenery: {
                grassPlatform: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.grassPlatform[1], array.colours.castle.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.grassPlatform[2], array.colours.castle.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.grassPlatform[3], array.colours.castle.pipesAndScenery),
                },
                bush: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.bush[1], array.colours.castle.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.bush[2], array.colours.castle.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.bush[3], array.colours.castle.pipesAndScenery),
                },
                kelp: preRenderAsset(array.tiles.pipesAndScenery.kelp, array.colours.castle.pipesAndScenery),
                treeSmall: preRenderAsset(array.tiles.pipesAndScenery.treeSmall, array.colours.castle.pipesAndScenery),
                treeLarge: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.treeLarge[1], array.colours.castle.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.treeLarge[2], array.colours.castle.pipesAndScenery),
                },
                pipe: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.pipe[1], array.colours.castle.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.pipe[2], array.colours.castle.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.pipe[3], array.colours.castle.pipesAndScenery),
                    4: preRenderAsset(array.tiles.pipesAndScenery.pipe[4], array.colours.castle.pipesAndScenery),
                    5: preRenderAsset(array.tiles.pipesAndScenery.pipe[5], array.colours.castle.pipesAndScenery),
                    6: preRenderAsset(array.tiles.pipesAndScenery.pipe[6], array.colours.castle.pipesAndScenery),
                    7: preRenderAsset(array.tiles.pipesAndScenery.pipe[7], array.colours.castle.pipesAndScenery),
                    8: preRenderAsset(array.tiles.pipesAndScenery.pipe[8], array.colours.castle.pipesAndScenery),
                    9: preRenderAsset(array.tiles.pipesAndScenery.pipe[9], array.colours.castle.pipesAndScenery),
                    10: preRenderAsset(array.tiles.pipesAndScenery.pipe[10], array.colours.castle.pipesAndScenery),
                },
                flagpole: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.flagpole[1], array.colours.castle.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.flagpole[2], array.colours.castle.pipesAndScenery),
                },
                bridgeSupport: preRenderAsset(array.tiles.pipesAndScenery.bridgeSupport, array.colours.castle.pipesAndScenery),
                someWeirdChain: preRenderAsset(array.tiles.pipesAndScenery.someWeirdChain, array.colours.castle.pipesAndScenery),
                hill: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.hill[1], array.colours.castle.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.hill[2], array.colours.castle.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.hill[3], array.colours.castle.pipesAndScenery),
                    4: preRenderAsset(array.tiles.pipesAndScenery.hill[4], array.colours.castle.pipesAndScenery),
                    5: preRenderAsset(array.tiles.pipesAndScenery.hill[5], array.colours.castle.pipesAndScenery),
                    6: preRenderAsset(array.tiles.pipesAndScenery.hill[6], array.colours.castle.pipesAndScenery),
                }
            },
            coins: {
                question: {
                    1: preRenderAsset(array.tiles.coins.question[1], array.colours.castle.coins),
                    2: preRenderAsset(array.tiles.coins.question[2], array.colours.castle.coins),
                    3: preRenderAsset(array.tiles.coins.question[3], array.colours.castle.coins),
                },
                coin: {
                    1: preRenderAsset(array.tiles.coins.coin[1], array.colours.castle.coins),
                    2: preRenderAsset(array.tiles.coins.coin[2], array.colours.castle.coins),
                    3: preRenderAsset(array.tiles.coins.coin[3], array.colours.castle.coins),
                },
                coinbackground: {
                    1: preRenderAsset(array.tiles.coins.coinBackground[1], array.colours.castle.coins),
                    2: preRenderAsset(array.tiles.coins.coinBackground[2], array.colours.castle.coins),
                    3: preRenderAsset(array.tiles.coins.coinBackground[3], array.colours.castle.coins),
                },
                axe: {
                    1: preRenderAsset(array.tiles.coins.axe[1], array.colours.castle.coins),
                    2: preRenderAsset(array.tiles.coins.axe[2], array.colours.castle.coins),
                    3: preRenderAsset(array.tiles.coins.axe[3], array.colours.castle.coins),
                }
            },
            waterAndSky: {
                cloud: {
                    1: preRenderAsset(array.tiles.waterAndSky.cloud[1], array.colours.castle.waterAndSky),
                    2: preRenderAsset(array.tiles.waterAndSky.cloud[2], array.colours.castle.waterAndSky),
                    3: preRenderAsset(array.tiles.waterAndSky.cloud[3], array.colours.castle.waterAndSky),
                    4: preRenderAsset(array.tiles.waterAndSky.cloud[4], array.colours.castle.waterAndSky),
                    5: preRenderAsset(array.tiles.waterAndSky.cloud[5], array.colours.castle.waterAndSky),
                    6: preRenderAsset(array.tiles.waterAndSky.cloud[6], array.colours.castle.waterAndSky),
                },
                water: {
                    1: preRenderAsset(array.tiles.waterAndSky.water[1], array.colours.castle.waterAndSky),
                    2: preRenderAsset(array.tiles.waterAndSky.water[2], array.colours.castle.waterAndSky),
                },
                lakituCloud: preRenderAsset(array.tiles.waterAndSky.lakituCloud, array.colours.castle.waterAndSky),
                bowserFightPlatform: preRenderAsset(array.tiles.waterAndSky.bowserFightPlatform, array.colours.castle.waterAndSky),
            }
        },
        items: {
            mushroom: preRenderAsset(array.items.mushroom, array.colours.castle.items),
            extraLife: preRenderAsset(array.items.extraLife, array.colours.castle.items),
            flower: {
                mario: preRenderAsset([array.items.flower.head[1].mario, array.items.flower.stem], array.colours.castle.items),
                luigi: preRenderAsset([array.items.flower.head[1].luigi, array.items.flower.stem], array.colours.castle.luigi),
                flowerPower: preRenderAsset([array.items.flower.head[1].flowerPower, array.items.flower.stem], array.colours.castle.mario.fire),
                stem: preRenderAsset(array.items.flower.stem, array.colours.castle.items),
                head: {
                    1: {
                        mario: preRenderAsset(array.items.flower.head[1].mario, array.colours.castle.mario.normal),
                        luigi: preRenderAsset(array.items.flower.head[1].luigi, array.colours.castle.luigi),
                        flowerPower: preRenderAsset(array.items.flower.head[1].flowerPower, array.colours.castle.mario.fire),
                    },
                    2: preRenderAsset(array.items.flower.head[2], array.colours.castle.items),
                    3: preRenderAsset(array.items.flower.head[3], array.colours.castle.items),
                    4: preRenderAsset(array.items.flower.head[4], array.colours.castle.items),
                }
            },
            star: {
                1: {
                    mario: preRenderAsset(array.items.star[1].mario, array.colours.castle.mario.normal),
                    luigi: preRenderAsset(array.items.star[1].luigi, array.colours.castle.luigi),
                    flowerPower: preRenderAsset(array.items.star[1].flowerPower, array.colours.castle.mario.fire),
                },
                2: preRenderAsset(array.items.star[2], array.colours.castle.items),
                3: preRenderAsset(array.items.star[3], array.colours.castle.items),
                4: preRenderAsset(array.items.star[4], array.colours.castle.items),
            }
        },
        dynamicObjects: {
            platform: {
                1: preRenderAsset(array.dynamicObjects.platform[1], array.colours.castle.items),
                2: preRenderAsset(array.dynamicObjects.platform[2], array.colours.castle.items),
                3: preRenderAsset(array.dynamicObjects.platform[3], array.colours.castle.items),
                4: preRenderAsset(array.dynamicObjects.platform[4], array.colours.castle.items),
            },
            cloudPlatform: {
                1: preRenderAsset(array.dynamicObjects.cloudPlatform[1], array.colours.castle.items),
                2: preRenderAsset(array.dynamicObjects.cloudPlatform[2], array.colours.castle.items),
            },
            spring: {
                1: preRenderAsset(array.dynamicObjects.spring[1], array.colours.castle.items),
                2: preRenderAsset(array.dynamicObjects.spring[2], array.colours.castle.items),
                3: preRenderAsset(array.dynamicObjects.spring[3], array.colours.castle.items),
                brick: preRenderAsset(array.dynamicObjects.spring.brick, array.colours.castle.ground),
            },
            flags: {
                pole: preRenderAsset(array.dynamicObjects.flags.pole, array.colours.castle.items),
                castle: preRenderAsset(array.dynamicObjects.flags.castle, array.colours.castle.items),
            },
            vine: {
                1: preRenderAsset(array.dynamicObjects.vine[1], array.colours.castle.items),
                2: preRenderAsset(array.dynamicObjects.vine[2], array.colours.castle.items),
            },
            brickBreak: {
                top: {
                    1: preRenderAsset(array.dynamicObjects.brickBreak.top[1], array.colours.castle.items),
                    2: preRenderAsset(array.dynamicObjects.brickBreak.top[2], array.colours.castle.items),
                },
                bottom: {
                    1: preRenderAsset(array.dynamicObjects.brickBreak.bottom[1], array.colours.castle.items),
                    2: preRenderAsset(array.dynamicObjects.brickBreak.bottom[2], array.colours.castle.items),
                }
            },
            coinCollect: {
                1: preRenderAsset(array.dynamicObjects.coinCollect[1], array.colours.castle.items),
                2: preRenderAsset(array.dynamicObjects.coinCollect[2], array.colours.castle.items),
                3: preRenderAsset(array.dynamicObjects.coinCollect[3], array.colours.castle.items),
                4: preRenderAsset(array.dynamicObjects.coinCollect[4], array.colours.castle.items),
            },
            fireball: {
                1: preRenderAsset(array.dynamicObjects.fireball[1], array.colours.castle.items),
                2: preRenderAsset(array.dynamicObjects.fireball[2], array.colours.castle.items),
                3: preRenderAsset(array.dynamicObjects.fireball[3], array.colours.castle.items),
                4: preRenderAsset(array.dynamicObjects.fireball[4], array.colours.castle.items),
            },
            fireballCollision: {
                1: preRenderAsset(array.dynamicObjects.fireballCollision[1], array.colours.castle.items),
                2: preRenderAsset(array.dynamicObjects.fireballCollision[2], array.colours.castle.items),
                3: preRenderAsset(array.dynamicObjects.fireballCollision[3], array.colours.castle.items),
            },
            points: {
                1: preRenderAsset(array.dynamicObjects.points[1], array.colours.castle.items),
                100: preRenderAsset(array.dynamicObjects.points[100], array.colours.castle.items),
                200: preRenderAsset(array.dynamicObjects.points[200], array.colours.castle.items),
                400: preRenderAsset(array.dynamicObjects.points[400], array.colours.castle.items),
                500: preRenderAsset(array.dynamicObjects.points[500], array.colours.castle.items),
                800: preRenderAsset(array.dynamicObjects.points[800], array.colours.castle.items),
                1000: preRenderAsset(array.dynamicObjects.points[1000], array.colours.castle.items),
                2000: preRenderAsset(array.dynamicObjects.points[2000], array.colours.castle.items),
                4000: preRenderAsset(array.dynamicObjects.points[4000], array.colours.castle.items),
                5000: preRenderAsset(array.dynamicObjects.points[5000], array.colours.castle.items),
                8000: preRenderAsset(array.dynamicObjects.points[8000], array.colours.castle.items),
            }
        }
    },
    underwater: {
        mario: {
            // underwater colours
            normal: {
                small: {
                    stand: preRenderAsset(array.mario.small.stand, array.colours.underwater.mario.normal, true),
                    walk: {
                        1: preRenderAsset(array.mario.small.walk[1], array.colours.underwater.mario.normal, true),
                        2: preRenderAsset(array.mario.small.walk[2], array.colours.underwater.mario.normal, true),
                        3: preRenderAsset(array.mario.small.walk[3], array.colours.underwater.mario.normal, true),
                    },
                    skid: preRenderAsset(array.mario.small.skid, array.colours.underwater.mario.normal, true),
                    jump: preRenderAsset(array.mario.small.jump, array.colours.underwater.mario.normal, true),
                    death: preRenderAsset(array.mario.small.death, array.colours.underwater.mario.normal, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.small.flagpole[1], array.colours.underwater.mario.normal, true),
                        2: preRenderAsset(array.mario.small.flagpole[2], array.colours.underwater.mario.normal, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.small.swim[1], array.colours.underwater.mario.normal, true),
                        2: preRenderAsset(array.mario.small.swim[2], array.colours.underwater.mario.normal, true),
                        3: preRenderAsset(array.mario.small.swim[3], array.colours.underwater.mario.normal, true),
                        4: preRenderAsset(array.mario.small.swim[4], array.colours.underwater.mario.normal, true),
                        5: preRenderAsset(array.mario.small.swim[5], array.colours.underwater.mario.normal, true),
                    }
                },
                big: {
                    stand: preRenderAsset(array.mario.big.stand, array.colours.underwater.mario.normal, true),
                    walk: {
                        1: preRenderAsset(array.mario.big.walk[1], array.colours.underwater.mario.normal, true),
                        2: preRenderAsset(array.mario.big.walk[2], array.colours.underwater.mario.normal, true),
                        3: preRenderAsset(array.mario.big.walk[3], array.colours.underwater.mario.normal, true),
                    },
                    skid: preRenderAsset(array.mario.big.skid, array.colours.underwater.mario.normal, true),
                    jump: preRenderAsset(array.mario.big.jump, array.colours.underwater.mario.normal, true),
                    crouch: preRenderAsset(array.mario.big.crouch, array.colours.underwater.mario.normal, true),
                    throw: preRenderAsset(array.mario.big.throw, array.colours.underwater.mario.normal, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.big.flagpole[1], array.colours.underwater.mario.normal, true),
                        2: preRenderAsset(array.mario.big.flagpole[2], array.colours.underwater.mario.normal, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.big.swim[1], array.colours.underwater.mario.normal, true),
                        2: preRenderAsset(array.mario.big.swim[2], array.colours.underwater.mario.normal, true),
                        3: preRenderAsset(array.mario.big.swim[3], array.colours.underwater.mario.normal, true),
                        4: preRenderAsset(array.mario.big.swim[4], array.colours.underwater.mario.normal, true),
                        5: preRenderAsset(array.mario.big.swim[5], array.colours.underwater.mario.normal, true),
                        6: preRenderAsset(array.mario.big.swim[6], array.colours.underwater.mario.normal, true),
                    }
                },
                growShrink: {
                    standing: {
                        1: preRenderAsset(array.mario.growShrink.standing[1], array.colours.underwater.mario.normal, true),
                        2: preRenderAsset(array.mario.growShrink.standing[2], array.colours.underwater.mario.normal, true),
                        3: preRenderAsset(array.mario.growShrink.standing[3], array.colours.underwater.mario.normal, true),
                    },
                    jumping: {
                        1: preRenderAsset(array.mario.growShrink.jumping[1], array.colours.underwater.mario.normal, true),
                        2: preRenderAsset(array.mario.growShrink.jumping[2], array.colours.underwater.mario.normal, true),
                        3: preRenderAsset(array.mario.growShrink.jumping[3], array.colours.underwater.mario.normal, true),
                        4: preRenderAsset(array.mario.growShrink.jumping[4], array.colours.underwater.mario.normal, true),
                    }
                }
            },
            flower: {
                small: {
                    stand: preRenderAsset(array.mario.small.stand, array.colours.underwater.mario.fire, true),
                    walk: {
                        1: preRenderAsset(array.mario.small.walk[1], array.colours.underwater.mario.fire, true),
                        2: preRenderAsset(array.mario.small.walk[2], array.colours.underwater.mario.fire, true),
                        3: preRenderAsset(array.mario.small.walk[3], array.colours.underwater.mario.fire, true),
                    },
                    skid: preRenderAsset(array.mario.small.skid, array.colours.underwater.mario.fire, true),
                    jump: preRenderAsset(array.mario.small.jump, array.colours.underwater.mario.fire, true),
                    death: preRenderAsset(array.mario.small.death, array.colours.underwater.mario.fire, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.small.flagpole[1], array.colours.underwater.mario.fire, true),
                        2: preRenderAsset(array.mario.small.flagpole[2], array.colours.underwater.mario.fire, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.small.swim[1], array.colours.underwater.mario.fire, true),
                        2: preRenderAsset(array.mario.small.swim[2], array.colours.underwater.mario.fire, true),
                        3: preRenderAsset(array.mario.small.swim[3], array.colours.underwater.mario.fire, true),
                        4: preRenderAsset(array.mario.small.swim[4], array.colours.underwater.mario.fire, true),
                        5: preRenderAsset(array.mario.small.swim[5], array.colours.underwater.mario.fire, true),
                    }
                },
                big: {
                    stand: preRenderAsset(array.mario.big.stand, array.colours.underwater.mario.fire, true),
                    walk: {
                        1: preRenderAsset(array.mario.big.walk[1], array.colours.underwater.mario.fire, true),
                        2: preRenderAsset(array.mario.big.walk[2], array.colours.underwater.mario.fire, true),
                        3: preRenderAsset(array.mario.big.walk[3], array.colours.underwater.mario.fire, true),
                    },
                    skid: preRenderAsset(array.mario.big.skid, array.colours.underwater.mario.fire, true),
                    jump: preRenderAsset(array.mario.big.jump, array.colours.underwater.mario.fire, true),
                    crouch: preRenderAsset(array.mario.big.crouch, array.colours.underwater.mario.fire, true),
                    throw: preRenderAsset(array.mario.big.throw, array.colours.underwater.mario.fire, true),
                    flagpole: {
                        1: preRenderAsset(array.mario.big.flagpole[1], array.colours.underwater.mario.fire, true),
                        2: preRenderAsset(array.mario.big.flagpole[2], array.colours.underwater.mario.fire, true),
                    },
                    swim: {
                        1: preRenderAsset(array.mario.big.swim[1], array.colours.underwater.mario.fire, true),
                        2: preRenderAsset(array.mario.big.swim[2], array.colours.underwater.mario.fire, true),
                        3: preRenderAsset(array.mario.big.swim[3], array.colours.underwater.mario.fire, true),
                        4: preRenderAsset(array.mario.big.swim[4], array.colours.underwater.mario.fire, true),
                        5: preRenderAsset(array.mario.big.swim[5], array.colours.underwater.mario.fire, true),
                        6: preRenderAsset(array.mario.big.swim[6], array.colours.underwater.mario.fire, true),
                    }
                },
                growShrink: {
                    standing: {
                        1: preRenderAsset(array.mario.growShrink.standing[1], array.colours.underwater.mario.fire, true),
                        2: preRenderAsset(array.mario.growShrink.standing[2], array.colours.underwater.mario.fire, true),
                        3: preRenderAsset(array.mario.growShrink.standing[3], array.colours.underwater.mario.fire, true),
                    },
                    jumping: {
                        1: preRenderAsset(array.mario.growShrink.jumping[1], array.colours.underwater.mario.fire, true),
                        2: preRenderAsset(array.mario.growShrink.jumping[2], array.colours.underwater.mario.fire, true),
                        3: preRenderAsset(array.mario.growShrink.jumping[3], array.colours.underwater.mario.fire, true),
                        4: preRenderAsset(array.mario.growShrink.jumping[4], array.colours.underwater.mario.fire, true),
                    }
                }
            },
            /*star: {
                small: {
                    stand: preRenderAsset(array.mario.small.stand, array.colours.underwater.mario.star),
                    walk: {
                        1: preRenderAsset(array.mario.small.walk[1], array.colours.underwater.mario.star),
                        2: preRenderAsset(array.mario.small.walk[2], array.colours.underwater.mario.star),
                        3: preRenderAsset(array.mario.small.walk[3], array.colours.underwater.mario.star)
                    },
                    skid: preRenderAsset(array.mario.small.skid, array.colours.underwater.mario.star),
                    jump: preRenderAsset(array.mario.small.jump, array.colours.underwater.mario.star),
                    death: preRenderAsset(array.mario.small.death, array.colours.underwater.mario.star),
                    flagpole: {
                        1: preRenderAsset(array.mario.small.flagpole[1], array.colours.underwater.mario.star),
                        2: preRenderAsset(array.mario.small.flagpole[2], array.colours.underwater.mario.star)
                    },
                    swim: {
                        1: preRenderAsset(array.mario.small.swim[1], array.colours.underwater.mario.star),
                        2: preRenderAsset(array.mario.small.swim[2], array.colours.underwater.mario.star),
                        3: preRenderAsset(array.mario.small.swim[3], array.colours.underwater.mario.star),
                        4: preRenderAsset(array.mario.small.swim[4], array.colours.underwater.mario.star),
                        5: preRenderAsset(array.mario.small.swim[5], array.colours.underwater.mario.star)
                    }
                },
                big: {
                    stand: preRenderAsset(array.mario.big.stand, array.colours.underwater.mario.star),
                    walk: {
                        1: preRenderAsset(array.mario.big.walk[1], array.colours.underwater.mario.star),
                        2: preRenderAsset(array.mario.big.walk[2], array.colours.underwater.mario.star),
                        3: preRenderAsset(array.mario.big.walk[3], array.colours.underwater.mario.star)
                    },
                    skid: preRenderAsset(array.mario.big.skid, array.colours.underwater.mario.star),
                    jump: preRenderAsset(array.mario.big.jump, array.colours.underwater.mario.star),
                    crouch: preRenderAsset(array.mario.big.crouch, array.colours.underwater.mario.star),
                    throw: preRenderAsset(array.mario.big.throw, array.colours.underwater.mario.star),
                    flagpole: {
                        1: preRenderAsset(array.mario.big.flagpole[1], array.colours.underwater.mario.star),
                        2: preRenderAsset(array.mario.big.flagpole[2], array.colours.underwater.mario.star)
                    },
                    swim: {
                        1: preRenderAsset(array.mario.big.swim[1], array.colours.underwater.mario.star),
                        2: preRenderAsset(array.mario.big.swim[2], array.colours.underwater.mario.star),
                        3: preRenderAsset(array.mario.big.swim[3], array.colours.underwater.mario.star),
                        4: preRenderAsset(array.mario.big.swim[4], array.colours.underwater.mario.star),
                        5: preRenderAsset(array.mario.big.swim[5], array.colours.underwater.mario.star),
                        6: preRenderAsset(array.mario.big.swim[6], array.colours.underwater.mario.star)
                    }
                },
                growShrink: {
                    standing: {
                        1: preRenderAsset(array.mario.growShrink.standing[1], array.colours.underwater.mario.star),
                        2: preRenderAsset(array.mario.growShrink.standing[2], array.colours.underwater.mario.star),
                        3: preRenderAsset(array.mario.growShrink.standing[3], array.colours.underwater.mario.star)
                    },
                    jumping: {
                        1: preRenderAsset(array.mario.growShrink.jumping[1], array.colours.underwater.mario.star),
                        2: preRenderAsset(array.mario.growShrink.jumping[2], array.colours.underwater.mario.star),
                        3: preRenderAsset(array.mario.growShrink.jumping[3], array.colours.underwater.mario.star),
                        4: preRenderAsset(array.mario.growShrink.jumping[4], array.colours.underwater.mario.star)
                    }
                }
            },*/
            bubble: preRenderAsset(array.mario.small.swim.bubble, array.colours.underwater.mario.normal),
        },
        enemies: {
            goomba: { //ground
                walk: {
                    1: preRenderAsset(array.enemies.goomba.walk[1], array.colours.underwater.ground),
                    2: preRenderAsset(array.enemies.goomba.walk[2], array.colours.underwater.ground),
                },
                squish: preRenderAsset(array.enemies.goomba.squish, array.colours.underwater.ground),
            },
            beetle: {
                walk: {
                    1: preRenderAsset(array.enemies.beetle.walk[1], array.colours.underwater.ground),
                    2: preRenderAsset(array.enemies.beetle.walk[2], array.colours.underwater.ground),
                },
                inshell: preRenderAsset(array.enemies.beetle.inshell, array.colours.underwater.ground),
            },
            squid: {
                normal: preRenderAsset(array.enemies.squid.normal, array.colours.underwater.ground),
                squish: preRenderAsset(array.enemies.squid.squish, array.colours.underwater.ground),
            },
            bullet: preRenderAsset(array.enemies.bullet, array.colours.underwater.ground),
            hammer: {
                1: preRenderAsset(array.enemies.hammer[1], array.colours.underwater.ground),
                2: preRenderAsset(array.enemies.hammer[2], array.colours.underwater.ground),
                3: preRenderAsset(array.enemies.hammer[3], array.colours.underwater.ground),
                4: preRenderAsset(array.enemies.hammer[4], array.colours.underwater.ground),
            },
            koopa: {
                ground: {
                    green: {
                        1: preRenderAsset(array.enemies.koopa.ground[1], array.colours.underwater.green),
                        2: preRenderAsset(array.enemies.koopa.ground[2], array.colours.underwater.green),
                        shell: preRenderAsset(array.enemies.koopa.shell, array.colours.underwater.green),
                        wakeup: preRenderAsset(array.enemies.koopa.shell, array.colours.underwater.green),
                    },
                    red: {
                        1: preRenderAsset(array.enemies.koopa.ground[1], array.colours.underwater.red),
                        2: preRenderAsset(array.enemies.koopa.ground[2], array.colours.underwater.red),
                        shell: preRenderAsset(array.enemies.koopa.shell, array.colours.underwater.red),
                        wakeup: preRenderAsset(array.enemies.koopa.shell, array.colours.underwater.red),
                    }
                },
                air: {
                    1: preRenderAsset(array.enemies.koopa.air[1], array.colours.underwater.green),
                    2: preRenderAsset(array.enemies.koopa.air[2], array.colours.underwater.green),
                }
            },
            plant: {
                green: {
                    1: preRenderAsset(array.enemies.plant[1], array.colours.underwater.green),
                    2: preRenderAsset(array.enemies.plant[2], array.colours.underwater.green),
                },
                red: {
                    1: preRenderAsset(array.enemies.plant[1], array.colours.underwater.red),
                    2: preRenderAsset(array.enemies.plant[2], array.colours.underwater.red),
                }
            },
            lakitu: {
                green: {
                    1: preRenderAsset(array.enemies.lakitu[1], array.colours.underwater.green),
                    2: preRenderAsset(array.enemies.lakitu[2], array.colours.underwater.green),
                },
                red: {
                    1: preRenderAsset(array.enemies.lakitu[1], array.colours.underwater.red),
                    2: preRenderAsset(array.enemies.lakitu[2], array.colours.underwater.red),
                }
            },
            fish: {
                green: {
                    1: preRenderAsset(array.enemies.fish[1], array.colours.underwater.green),
                    2: preRenderAsset(array.enemies.fish[2], array.colours.underwater.green),
                },
                red: {
                    1: preRenderAsset(array.enemies.fish[1], array.colours.underwater.red),
                    2: preRenderAsset(array.enemies.fish[2], array.colours.underwater.red),
                }
            },
            bro: {
                green: {
                    normal: {
                        1: preRenderAsset(array.enemies.bro.normal[1], array.colours.underwater.green),
                        2: preRenderAsset(array.enemies.bro.normal[2], array.colours.underwater.green),
                        3: preRenderAsset(array.enemies.bro.normal[3], array.colours.underwater.green),
                        4: preRenderAsset(array.enemies.bro.normal[4], array.colours.underwater.green),
                    },
                    holding: {
                        1: preRenderAsset(array.enemies.bro.holding[1], array.colours.underwater.green),
                        2: preRenderAsset(array.enemies.bro.holding[2], array.colours.underwater.green),
                    }
                },
                red: {
                    normal: {
                        1: preRenderAsset(array.enemies.bro.normal[1], array.colours.underwater.red),
                        2: preRenderAsset(array.enemies.bro.normal[2], array.colours.underwater.red),
                        3: preRenderAsset(array.enemies.bro.normal[3], array.colours.underwater.red),
                        4: preRenderAsset(array.enemies.bro.normal[4], array.colours.underwater.red),
                    },
                    holding: {
                        1: preRenderAsset(array.enemies.bro.holding[1], array.colours.underwater.red),
                        2: preRenderAsset(array.enemies.bro.holding[2], array.colours.underwater.red),
                    }
                }
            },
            bowser: {
                green: {
                    1: preRenderAsset(array.enemies.bowser[1], array.colours.underwater.green),
                    2: preRenderAsset(array.enemies.bowser[2], array.colours.underwater.green),
                    3: preRenderAsset(array.enemies.bowser[3], array.colours.underwater.green),
                    4: preRenderAsset(array.enemies.bowser[4], array.colours.underwater.green),
                    hammer: {
                        1: preRenderAsset(array.enemies.bowser.hammer[1], array.colours.underwater.green),
                        2: preRenderAsset(array.enemies.bowser.hammer[2], array.colours.underwater.green),
                    }
                },
                red: {
                    1: preRenderAsset(array.enemies.bowser[1], array.colours.underwater.red),
                    2: preRenderAsset(array.enemies.bowser[2], array.colours.underwater.red),
                    3: preRenderAsset(array.enemies.bowser[3], array.colours.underwater.red),
                    4: preRenderAsset(array.enemies.bowser[4], array.colours.underwater.red),
                    hammer: {
                        1: preRenderAsset(array.enemies.bowser.hammer[1], array.colours.underwater.red),
                        2: preRenderAsset(array.enemies.bowser.hammer[2], array.colours.underwater.red),
                    }
                }
            },
            flame: {
                1: preRenderAsset(array.enemies.flame[1], array.colours.underwater.red),
                2: preRenderAsset(array.enemies.flame[2], array.colours.underwater.red),
            },
            spiny: {
                walk: {
                    1: preRenderAsset(array.enemies.spiny.walk[1], array.colours.underwater.red),
                    2: preRenderAsset(array.enemies.spiny.walk[2], array.colours.underwater.red),
                },
                ball: {
                    1: preRenderAsset(array.enemies.spiny.ball[1], array.colours.underwater.red),
                    2: preRenderAsset(array.enemies.spiny.ball[2], array.colours.underwater.red),
                }
            },
            fireball: preRenderAsset(array.enemies.fireball, array.colours.underwater.red),
        },
        tiles: {
            groundAndStone: {
                crackedBrick: preRenderAsset(array.tiles.groundAndStone.crackedBrick, array.colours.underwater.groundAndStone),
                brick1: preRenderAsset(array.tiles.groundAndStone.brick1, array.colours.underwater.groundAndStone),
                brick2: preRenderAsset(array.tiles.groundAndStone.brick2, array.colours.underwater.groundAndStone),
                emptyBrick: preRenderAsset(array.tiles.groundAndStone.emptyBrick, array.colours.underwater.groundAndStone),
                stairBrick: preRenderAsset(array.tiles.groundAndStone.stairBrick, array.colours.underwater.groundAndStone),
                floatingPlatformFoundation: preRenderAsset(array.tiles.groundAndStone.floatingPlatformFoundation, array.colours.underwater.groundAndStone),
                bridgeBottom: preRenderAsset(array.tiles.groundAndStone.bridgeBottom, array.colours.underwater.groundAndStone),
                rubble: preRenderAsset(array.tiles.groundAndStone.rubble, array.colours.underwater.groundAndStone),
                particleBlock: preRenderAsset(array.tiles.groundAndStone.particleBlock, array.colours.underwater.groundAndStone),
                treeTrunk: preRenderAsset(array.tiles.groundAndStone.treeTrunk, array.colours.underwater.groundAndStone),
                fencePost: preRenderAsset(array.tiles.groundAndStone.fencePost, array.colours.underwater.groundAndStone),
                ropeTiles: {
                    1: preRenderAsset(array.tiles.groundAndStone.ropeTiles[1], array.colours.underwater.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.ropeTiles[2], array.colours.underwater.groundAndStone),
                    3: preRenderAsset(array.tiles.groundAndStone.ropeTiles[3], array.colours.underwater.groundAndStone),
                    4: preRenderAsset(array.tiles.groundAndStone.ropeTiles[4], array.colours.underwater.groundAndStone),
                    
                },
                mushroomStem: {
                    1: preRenderAsset(array.tiles.groundAndStone.mushroomStem[1], array.colours.underwater.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.mushroomStem[2], array.colours.underwater.groundAndStone),
                },
                castleTiles: {
                    1: preRenderAsset(array.tiles.groundAndStone.castleTiles[1], array.colours.underwater.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.castleTiles[2], array.colours.underwater.groundAndStone),
                    3: preRenderAsset(array.tiles.groundAndStone.castleTiles[3], array.colours.underwater.groundAndStone),
                    4: preRenderAsset(array.tiles.groundAndStone.castleTiles[4], array.colours.underwater.groundAndStone),
                    5: preRenderAsset(array.tiles.groundAndStone.castleTiles[5], array.colours.underwater.groundAndStone),
                    6: preRenderAsset(array.tiles.groundAndStone.castleTiles[6], array.colours.underwater.groundAndStone),
                    7: preRenderAsset(array.tiles.groundAndStone.castleTiles[7], array.colours.underwater.groundAndStone),
                },
                cannonTiles: {
                    1: preRenderAsset(array.tiles.groundAndStone.cannonTiles[1], array.colours.underwater.groundAndStone),
                    2: preRenderAsset(array.tiles.groundAndStone.cannonTiles[2], array.colours.underwater.groundAndStone),
                    3: preRenderAsset(array.tiles.groundAndStone.cannonTiles[3], array.colours.underwater.groundAndStone),
                }
            },
            pipesAndScenery: {
                grassPlatform: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.grassPlatform[1], array.colours.underwater.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.grassPlatform[2], array.colours.underwater.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.grassPlatform[3], array.colours.underwater.pipesAndScenery),
                },
                bush: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.bush[1], array.colours.underwater.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.bush[2], array.colours.underwater.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.bush[3], array.colours.underwater.pipesAndScenery),
                },
                kelp: preRenderAsset(array.tiles.pipesAndScenery.kelp, array.colours.underwater.pipesAndScenery),
                treeSmall: preRenderAsset(array.tiles.pipesAndScenery.treeSmall, array.colours.underwater.pipesAndScenery),
                treeLarge: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.treeLarge[1], array.colours.underwater.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.treeLarge[2], array.colours.underwater.pipesAndScenery),
                },
                pipe: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.pipe[1], array.colours.underwater.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.pipe[2], array.colours.underwater.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.pipe[3], array.colours.underwater.pipesAndScenery),
                    4: preRenderAsset(array.tiles.pipesAndScenery.pipe[4], array.colours.underwater.pipesAndScenery),
                    5: preRenderAsset(array.tiles.pipesAndScenery.pipe[5], array.colours.underwater.pipesAndScenery),
                    6: preRenderAsset(array.tiles.pipesAndScenery.pipe[6], array.colours.underwater.pipesAndScenery),
                    7: preRenderAsset(array.tiles.pipesAndScenery.pipe[7], array.colours.underwater.pipesAndScenery),
                    8: preRenderAsset(array.tiles.pipesAndScenery.pipe[8], array.colours.underwater.pipesAndScenery),
                    9: preRenderAsset(array.tiles.pipesAndScenery.pipe[9], array.colours.underwater.pipesAndScenery),
                    10: preRenderAsset(array.tiles.pipesAndScenery.pipe[10], array.colours.underwater.pipesAndScenery),
                },
                flagpole: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.flagpole[1], array.colours.underwater.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.flagpole[2], array.colours.underwater.pipesAndScenery),
                },
                bridgeSupport: preRenderAsset(array.tiles.pipesAndScenery.bridgeSupport, array.colours.underwater.pipesAndScenery),
                someWeirdChain: preRenderAsset(array.tiles.pipesAndScenery.someWeirdChain, array.colours.underwater.pipesAndScenery),
                hill: {
                    1: preRenderAsset(array.tiles.pipesAndScenery.hill[1], array.colours.underwater.pipesAndScenery),
                    2: preRenderAsset(array.tiles.pipesAndScenery.hill[2], array.colours.underwater.pipesAndScenery),
                    3: preRenderAsset(array.tiles.pipesAndScenery.hill[3], array.colours.underwater.pipesAndScenery),
                    4: preRenderAsset(array.tiles.pipesAndScenery.hill[4], array.colours.underwater.pipesAndScenery),
                    5: preRenderAsset(array.tiles.pipesAndScenery.hill[5], array.colours.underwater.pipesAndScenery),
                    6: preRenderAsset(array.tiles.pipesAndScenery.hill[6], array.colours.underwater.pipesAndScenery),
                }
            },
            coins: {
                question: {
                    1: preRenderAsset(array.tiles.coins.question[1], array.colours.underwater.coins),
                    2: preRenderAsset(array.tiles.coins.question[2], array.colours.underwater.coins),
                    3: preRenderAsset(array.tiles.coins.question[3], array.colours.underwater.coins),
                },
                coin: {
                    1: preRenderAsset(array.tiles.coins.coin[1], array.colours.underwater.coins),
                    2: preRenderAsset(array.tiles.coins.coin[2], array.colours.underwater.coins),
                    3: preRenderAsset(array.tiles.coins.coin[3], array.colours.underwater.coins),
                },
                coinbackground: {
                    1: preRenderAsset(array.tiles.coins.coinBackground[1], array.colours.underwater.coins),
                    2: preRenderAsset(array.tiles.coins.coinBackground[2], array.colours.underwater.coins),
                    3: preRenderAsset(array.tiles.coins.coinBackground[3], array.colours.underwater.coins),
                },
                axe: {
                    1: preRenderAsset(array.tiles.coins.axe[1], array.colours.underwater.coins),
                    2: preRenderAsset(array.tiles.coins.axe[2], array.colours.underwater.coins),
                    3: preRenderAsset(array.tiles.coins.axe[3], array.colours.underwater.coins),
                }
            },
            waterAndSky: {
                cloud: {
                    1: preRenderAsset(array.tiles.waterAndSky.cloud[1], array.colours.underwater.waterAndSky),
                    2: preRenderAsset(array.tiles.waterAndSky.cloud[2], array.colours.underwater.waterAndSky),
                    3: preRenderAsset(array.tiles.waterAndSky.cloud[3], array.colours.underwater.waterAndSky),
                    4: preRenderAsset(array.tiles.waterAndSky.cloud[4], array.colours.underwater.waterAndSky),
                    5: preRenderAsset(array.tiles.waterAndSky.cloud[5], array.colours.underwater.waterAndSky),
                    6: preRenderAsset(array.tiles.waterAndSky.cloud[6], array.colours.underwater.waterAndSky),
                },
                water: {
                    1: preRenderAsset(array.tiles.waterAndSky.water[1], array.colours.underwater.waterAndSky),
                    2: preRenderAsset(array.tiles.waterAndSky.water[2], array.colours.underwater.waterAndSky),
                },
                lakituCloud: preRenderAsset(array.tiles.waterAndSky.lakituCloud, array.colours.underwater.waterAndSky),
                bowserFightPlatform: preRenderAsset(array.tiles.waterAndSky.bowserFightPlatform, array.colours.underwater.waterAndSky),
            }
        },
        items: {
            mushroom: preRenderAsset(array.items.mushroom, array.colours.underwater.items),
            extraLife: preRenderAsset(array.items.extraLife, array.colours.underwater.items),
            flower: {
                mario: preRenderAsset([array.items.flower.head[1].mario, array.items.flower.stem], array.colours.underwater.items),
                luigi: preRenderAsset([array.items.flower.head[1].luigi, array.items.flower.stem], array.colours.underwater.luigi),
                flowerPower: preRenderAsset([array.items.flower.head[1].flowerPower, array.items.flower.stem], array.colours.underwater.mario.fire),
                stem: preRenderAsset(array.items.flower.stem, array.colours.underwater.items),
                head: {
                    1: {
                        mario: preRenderAsset(array.items.flower.head[1].mario, array.colours.underwater.mario.normal),
                        luigi: preRenderAsset(array.items.flower.head[1].luigi, array.colours.underwater.luigi),
                        flowerPower: preRenderAsset(array.items.flower.head[1].flowerPower, array.colours.underwater.mario.fire),
                    },
                    2: preRenderAsset(array.items.flower.head[2], array.colours.underwater.items),
                    3: preRenderAsset(array.items.flower.head[3], array.colours.underwater.items),
                    4: preRenderAsset(array.items.flower.head[4], array.colours.underwater.items),
                }
            },
            star: {
                1: {
                    mario: preRenderAsset(array.items.star[1].mario, array.colours.underwater.mario.normal),
                    luigi: preRenderAsset(array.items.star[1].luigi, array.colours.underwater.luigi),
                    flowerPower: preRenderAsset(array.items.star[1].flowerPower, array.colours.underwater.mario.fire),
                },
                2: preRenderAsset(array.items.star[2], array.colours.underwater.items),
                3: preRenderAsset(array.items.star[3], array.colours.underwater.items),
                4: preRenderAsset(array.items.star[4], array.colours.underwater.items),
            }
        },
        dynamicObjects: {
            platform: {
                1: preRenderAsset(array.dynamicObjects.platform[1], array.colours.underwater.items),
                2: preRenderAsset(array.dynamicObjects.platform[2], array.colours.underwater.items),
                3: preRenderAsset(array.dynamicObjects.platform[3], array.colours.underwater.items),
                4: preRenderAsset(array.dynamicObjects.platform[4], array.colours.underwater.items),
            },
            cloudPlatform: {
                1: preRenderAsset(array.dynamicObjects.cloudPlatform[1], array.colours.underwater.items),
                2: preRenderAsset(array.dynamicObjects.cloudPlatform[2], array.colours.underwater.items),
            },
            spring: {
                1: preRenderAsset(array.dynamicObjects.spring[1], array.colours.underwater.items),
                2: preRenderAsset(array.dynamicObjects.spring[2], array.colours.underwater.items),
                3: preRenderAsset(array.dynamicObjects.spring[3], array.colours.underwater.items),
                brick: preRenderAsset(array.dynamicObjects.spring.brick, array.colours.underwater.ground),
            },
            flags: {
                pole: preRenderAsset(array.dynamicObjects.flags.pole, array.colours.underwater.items),
                csatle: preRenderAsset(array.dynamicObjects.flags.castle, array.colours.underwater.items),
            },
            vine: {
                1: preRenderAsset(array.dynamicObjects.vine[1], array.colours.underwater.items),
                2: preRenderAsset(array.dynamicObjects.vine[2], array.colours.underwater.items),
            },
            brickBreak: {
                top: {
                    1: preRenderAsset(array.dynamicObjects.brickBreak.top[1], array.colours.underwater.items),
                    2: preRenderAsset(array.dynamicObjects.brickBreak.top[2], array.colours.underwater.items),
                },
                bottom: {
                    1: preRenderAsset(array.dynamicObjects.brickBreak.bottom[1], array.colours.underwater.items),
                    2: preRenderAsset(array.dynamicObjects.brickBreak.bottom[2], array.colours.underwater.items),
                }
            },
            coinCollect: {
                1: preRenderAsset(array.dynamicObjects.coinCollect[1], array.colours.underwater.items),
                2: preRenderAsset(array.dynamicObjects.coinCollect[2], array.colours.underwater.items),
                3: preRenderAsset(array.dynamicObjects.coinCollect[3], array.colours.underwater.items),
                4: preRenderAsset(array.dynamicObjects.coinCollect[4], array.colours.underwater.items),
            },
            fireball: {
                1: preRenderAsset(array.dynamicObjects.fireball[1], array.colours.underwater.items),
                2: preRenderAsset(array.dynamicObjects.fireball[2], array.colours.underwater.items),
                3: preRenderAsset(array.dynamicObjects.fireball[3], array.colours.underwater.items),
                4: preRenderAsset(array.dynamicObjects.fireball[4], array.colours.underwater.items),
            },
            fireballCollision: {
                1: preRenderAsset(array.dynamicObjects.fireballCollision[1], array.colours.underwater.items),
                2: preRenderAsset(array.dynamicObjects.fireballCollision[2], array.colours.underwater.items),
                3: preRenderAsset(array.dynamicObjects.fireballCollision[3], array.colours.underwater.items),
            },
            points: {
                1: preRenderAsset(array.dynamicObjects.points[1], array.colours.underwater.items),
                100: preRenderAsset(array.dynamicObjects.points[100], array.colours.underwater.items),
                200: preRenderAsset(array.dynamicObjects.points[200], array.colours.underwater.items),
                400: preRenderAsset(array.dynamicObjects.points[400], array.colours.underwater.items),
                500: preRenderAsset(array.dynamicObjects.points[500], array.colours.underwater.items),
                800: preRenderAsset(array.dynamicObjects.points[800], array.colours.underwater.items),
                1000: preRenderAsset(array.dynamicObjects.points[1000], array.colours.underwater.items),
                2000: preRenderAsset(array.dynamicObjects.points[2000], array.colours.underwater.items),
                4000: preRenderAsset(array.dynamicObjects.points[4000], array.colours.underwater.items),
                5000: preRenderAsset(array.dynamicObjects.points[5000], array.colours.underwater.items),
                8000: preRenderAsset(array.dynamicObjects.points[8000], array.colours.underwater.items),
            }
        }
    }
}
export default assets;