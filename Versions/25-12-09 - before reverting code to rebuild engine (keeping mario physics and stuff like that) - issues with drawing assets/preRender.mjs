// Function that can pre-render tiles and should be used to be saved in variables
var count = 0;
export function preRenderAsset(tile, palette) {
    let rowLengths = [];
    tile.forEach(row => rowLengths.push(parseInt(row.length)));
    const   offscreenCanvasL = document.createElement('canvas'),
            offscreenCanvasR = document.createElement('canvas'),
            renderCanvasL = offscreenCanvasL.getContext('2d'),
            renderCanvasR = offscreenCanvasL.getContext('2d');
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
        for (let x = rowLengths[y]; x > -1; x --) {
            if (tile[y][x] > -1) {
                let index = tile[y][x];
                renderCanvasR.beginPath();
                renderCanvasR.fillStyle = palette[index];
                renderCanvasR.fillRect(x, y, 1, 1);
            }
        }
    }
    return {l: offscreenCanvasL, r: offscreenCanvasR};
}