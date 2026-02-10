// Function that can pre-render tiles and should be used to be saved in variables
var count = 0;
//edit function so that any sprites facing right are swapped, ensuring they are facing the correct way when being drawn

export default function preRenderAsset(tile, palette, swapDirection = false) {
    let rowLengths = [];
    /*if (swapDirection) {
        const originalSprite = tile;
        for (let y = 0; y < originalSprite.length; y ++) {
            for (let x = originalSprite[y].length; x >= 0; x --) {
                tile[y][x] = originalSprite[y][originalSprite[y].length - x];
            }
        }
    }*/
    tile.forEach(row => rowLengths.push(parseInt(row.length)));
    const   offscreenCanvasL = document.createElement('canvas'),
            offscreenCanvasR = document.createElement('canvas'),
            renderCanvasL = offscreenCanvasL.getContext('2d'),
            renderCanvasR = offscreenCanvasR.getContext('2d');
    offscreenCanvasL.width = Math.max(...rowLengths);
    offscreenCanvasL.height = tile.length;
    offscreenCanvasL.style.border = "none";
    offscreenCanvasR.width = Math.max(...rowLengths);
    offscreenCanvasR.height = tile.length;
    offscreenCanvasR.style.border = "none";
    for (let y = 0; y < tile.length; y ++) {
        for (let x = 0; x < rowLengths[y]; x ++) {
            if (tile[y][x] > -1) {
                let index = tile[y][x];
                renderCanvasL.beginPath();
                renderCanvasL.fillStyle = palette[index];
                renderCanvasL.fillRect(x, y, 1, 1);
            }
        }
    }
    
    for (let y = 0; y < tile.length; y ++) {
        let drawX = 0;
        for (let x = rowLengths[y]; x > -1; x --) {
            if (tile[y][x] > -1) {
                let index = tile[y][x];
                renderCanvasR.beginPath();
                renderCanvasR.fillStyle = palette[index];
                renderCanvasR.fillRect(drawX, y, 1, 1);
            }
            drawX ++
        }
    }
    return swapDirection? {l: offscreenCanvasR, r: offscreenCanvasL} : {l: offscreenCanvasL, r: offscreenCanvasR};
}