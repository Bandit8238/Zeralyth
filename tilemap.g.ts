// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Flower fields":
            case "level1":return tiles.createTilemap(hex`1000100002020201010101010101010102020201020202010101010101010101020202010202020101010101010202020202020101010101010101010102020201010101010101010101010101020202010101010202020101060404050101010101010102020201010a0303070101010101010102020201010a0303070101010101010101010101010b0909080101010101010101010101010101010101010101010101010101010101010101010101020202010102020201010101010101010202020101020202010101010101010102020201020202020101010102020201010102020202010101010101020202010101020202020101010101010202020101010202`, img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath7], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100002040404040404040404040404040402040101010101010101010101010101040402030203020302030203020302030404030203020302030203020302030204040203020302030203020302030203040403020302030203020302030203020404020302030203020302030203020304040302030203020302030203020302040402030203020302030203020302030404030203020302030203020302030204040203020302030203020302030203040403020302030203020302030203020404020302030203020302030203020304040302030203020302030203020302040402030203020302030203020302030402040404040404040404040404040402`, img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight2,sprites.dungeon.floorDark0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTile":
            case "tile1":return tile1;
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
