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
    tile_size: 64,
    map: [
        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
        6, 6, 6, 0, 0, 0, 0, 0, 6, 6, 6, 6
    ], 
}


tileMap.image.onload = function() {
for (let i = 0; i < tileMap.map.length; i++) {
console.log("ye");
}
}

loop = function() {


window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);