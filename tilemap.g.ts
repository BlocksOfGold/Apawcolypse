// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001020202030303020202020202020202020202020303020202020202020302020202010303030202020202020202020202020202020202030303030302020202020302040202030303030603020202020102020202020302020202020202020205020202030202020202020202030202020203020302020303020202020202020202020302020202020202020202020202020202020202020202020302020202020202020202020203020202020202020202020302020202020202020202020202020202020202020202020203020202070909090909090909090909090909080b0a0a0a0a0a0a0a0a0a0a0a0a0a0a0c0b0a0a0a0a0a0a0a0a0a0a0a0a0a0a0c`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.swamp.swampTile2,sprites.swamp.swampTile3,sprites.builtin.forestTiles0,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles6,sprites.builtin.forestTiles10,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
