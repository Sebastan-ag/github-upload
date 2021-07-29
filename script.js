let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

canvas.width = 768;
canvas.height = 512;

var player, loop, tileMap;

player = {
    x: 512,
    y: 0,
    width: 50,
    height: 50,
    colour: 'red'
}

tileMap = {
    image: new Image(),
}

loop = function() {


window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);