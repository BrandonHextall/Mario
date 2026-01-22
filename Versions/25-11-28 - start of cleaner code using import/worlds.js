const gameWorlds = {
    1: {// World 1
        //this may need to be in a separate JS file (probably just put worlds into a separate file)
        1: new Level(
            [ //tiles will be drawn row by row
                /*
                    index and meaning:
                    1: sprite index
                    2: valid collision side index
                    3: breakable value
                    4: contents
                    5: canCheckBelow
                */
                [ , , , , [1, 11], , [4, 0], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], , , , , , , [2, 0, 1], [2, 0, 0, 2], [2, 0, 1]],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], ],
                [ , , , , [2, 11], , , , , , [2, 0], , , , , , [2,1], ],
                [ , , , , [2, 0], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], [4, 13, 1], ],
            ],
            //list for tiles used in the level
            /*List of all tiles used in level*/
            [
                /*
                    For tiles that use multiple sprites,
                    set interval in the tile class as an attribute to make them change their tile and colour (if necessary)
                    and stop the interval when the tile shouldn't change as well as setting it to a specific tile that it needs to be stationary on after interval is cleared
                */
                /*
                    Create Loop wherein at the start of each level, all possible variants of each tile are created.
                    holds each tile in a separate list with each variant as an index within the list
                    tilemap will need an extra value telling which tile variant to use

                    alternatively, use the regular tiles, but have a separate array of collision combinations, using the second value in the tilemap to determine which combination is to be used
                    for example,    using [0, 0] tells to use stairbrick with no collision
                                    using [0, 16] tells to use stairbrick with all collision
                    ther should be 16 possible combinations as there are 2 possible values per index and 4 indexes
                */
                // Blocks used
                preRenderTile(sprites.tiles.groundAndStone.stairBrick, sprites.colours.groundAndStone.overworld),
                preRenderTile(sprites.tiles.groundAndStone.crackedBrick, sprites.colours.groundAndStone.overworld),
                preRenderTile(sprites.tiles.coins.question[1], sprites.colours.coins.overworld),
                preRenderTile(sprites.tiles.groundAndStone.brick1, sprites.colours.groundAndStone.overworld),
                preRenderTile(sprites.tiles.groundAndStone.emptyBrick, sprites.colours.groundAndStone.overworld),
                preRenderTile(sprites.tiles.pipesAndScenery.pipe[1], sprites.colours.pipesAndScenery.overworld),
                preRenderTile(sprites.tiles.pipesAndScenery.pipe[2], sprites.colours.pipesAndScenery.overworld),
                preRenderTile(sprites.tiles.pipesAndScenery.pipe[3], sprites.colours.pipesAndScenery.overworld),
                preRenderTile(sprites.tiles.pipesAndScenery.pipe[4], sprites.colours.pipesAndScenery.overworld),
                preRenderTile(sprites.tiles.pipesAndScenery.pipe[5], sprites.colours.pipesAndScenery.overworld),
                preRenderTile(sprites.tiles.pipesAndScenery.pipe[6], sprites.colours.pipesAndScenery.overworld),
                preRenderTile(sprites.tiles.pipesAndScenery.pipe[7], sprites.colours.pipesAndScenery.overworld),
                preRenderTile(sprites.tiles.pipesAndScenery.pipe[8], sprites.colours.pipesAndScenery.overworld),
                preRenderTile(sprites.tiles.pipesAndScenery.pipe[9], sprites.colours.pipesAndScenery.overworld),
                preRenderTile(sprites.tiles.pipesAndScenery.pipe[10], sprites.colours.pipesAndScenery.overworld),
                preRenderTile(sprites.tiles.pipesAndScenery.flagpole[1], sprites.colours.pipesAndScenery.overworld),
                preRenderTile(sprites.tiles.pipesAndScenery.flagpole[2], sprites.colours.pipesAndScenery.overworld),
                preRenderTile(sprites.dynamicObjects.flags.pole, sprites.colours.items.overworld),
                preRenderTile(sprites.tiles.groundAndStone.castleTiles[1], sprites.colours.groundAndStone.overworld),
                preRenderTile(sprites.tiles.groundAndStone.castleTiles[2], sprites.colours.groundAndStone.overworld),
                preRenderTile(sprites.tiles.groundAndStone.castleTiles[3], sprites.colours.groundAndStone.overworld),
                preRenderTile(sprites.tiles.groundAndStone.castleTiles[4], sprites.colours.groundAndStone.overworld),
                preRenderTile(sprites.tiles.groundAndStone.castleTiles[5], sprites.colours.groundAndStone.overworld),
                preRenderTile(sprites.tiles.groundAndStone.castleTiles[6], sprites.colours.groundAndStone.overworld),
                preRenderTile(sprites.tiles.groundAndStone.castleTiles[7], sprites.colours.groundAndStone.overworld),
                // Items used
                // Background tiles used
            ],
            "overworld",
        ),
    }
};