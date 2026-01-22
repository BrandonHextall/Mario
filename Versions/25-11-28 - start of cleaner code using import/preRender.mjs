// Function that can pre-render tiles and should be used to be saved in variables
        export function preRenderAsset(tile, palette) {
            let rowLengths = [];
            tile.forEach(row => rowLengths.push(parseInt(row.length)));
            const offscreenCanvas = document.createElement('canvas');
            const renderCanvas = offscreenCanvas.getContext('2d');
            offscreenCanvas.width = Math.max(...rowLengths);
            offscreenCanvas.height = tile.length;
            offscreenCanvas.style.border = "none";
            for (let y = 0; y < 16; y ++) {
                for (let x = 0; x < 16; x ++) {
                    if (tile[y][x] > -1) {
                        let index = tile[y][x];
                        renderCanvas.beginPath();
                        renderCanvas.fillStyle = palette[index];
                        renderCanvas.fillRect(x, y, 1, 1);
                    }
                }
            }
            return offscreenCanvas;
        }