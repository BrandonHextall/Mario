import { mario } from "./main.mjs";

const   getId = (what)  => {return document.getElementById(what)},
        canvasElem = getId('canvas'),
        canvas = canvasElem.getContext('2d'),
        bufferElem = document.createElement('canvas');
        canvasElem.focus();

export default class Camera {
    constructor(x, y, width, height, canvasWidth, canvasHeight) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    update() {

        // Center the camera on the player
        this.x = Math.floor(mario.x + mario.w / 2 - this.canvasWidth / 2);
        this.y = Math.floor(mario.y + mario.h / 2 - this.canvasHeight / 2);

        // Ensure the camera doesn't move out of the world bounds
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
        if (this.x + this.canvasWidth > this.width) this.x = this.width - this.canvasWidth;
        if (this.y + this.canvasHeight > this.height) this.y = this.height - this.canvasHeight;
    }

    apply() {canvas.setTransform(1, 0, 0, 1, -this.x, -this.y)}
}