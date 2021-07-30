let canvas0 = document.getElementById("can0");
let c = canvas0.getContext("2d");
let canvas1 = document.getElementById("can1");
let tm = canvas1.getContext("2d");

canvas0.width = 1152;
canvas0.height = 768;
canvas1.width = 1152;
canvas1.height = 768;

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
    tile_size: 96,
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
    tile_image_size: 16,
    collums: 12,
    rows: 8
}



tileMap.image.onload = function() {
    for (let i = 0; i < tileMap.map.length; i++) {
        var source_x = (tileMap.map[i] % tileMap.collums) * 16;
        var source_y = Math.floor(tileMap.map[i] / tileMap.collums) * 16;
        var destination_x = (i % tileMap.collums) * 96;
        var destination_y = Math.floor(i / tileMap.collums) * 96;
        tm.drawImage(tileMap.image, source_x, source_y, 16, 16, destination_x, destination_y, 96, 96);
        console.log(tileMap.map[i])
    }
}

tileMap.image.src = 'Tile Map.png';
tm.imageSmoothingEnabled = false;

loop = function() {


window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);