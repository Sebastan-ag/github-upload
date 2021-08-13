
let canvas0 = document.getElementById("can0");
let tm = canvas0.getContext("2d");
let canvas1 = document.getElementById("can1");
let c = canvas1.getContext("2d");

canvas0.width = document.body.clientWidth;
canvas0.height = document.body.clientHeight;
canvas1.width = document.body.clientWidth;
canvas1.height = document.body.clientHeight;



tm.imageSmoothingEnabled = false;
c.imageSmoothingEnabled = false;

tm.font = '24px cursive'
tm.fillText(window.innerWidth, 0, 20);
tm.fillText(window.innerHeight, 0, 40);

player = {
    x: 512,
    y: 5,
    width: 75,
    height: 75,
    colour: 'red',
    velocity_x: 0,
    velocity_y: 0,
    jump: true
}

tileMap = {
    image: new Image(),
    tile_size: document.body.clientHeight / 12,
    map: [
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0

    ],
    tile_image_size: 16,
    collums: 30,
    rows: 12
}

mouvement = {
    left: false,
    up: false,
    right: false
}

tileMap.image.onload = function () {


    for (let i = 0; i < tileMap.map.length; i++) {

        var source_x = (tileMap.map[i] % 3) * tileMap.tile_image_size;

        var source_y = Math.floor(tileMap.map[i] / 3) * tileMap.tile_image_size;

        var destination_x = (i % tileMap.collums) * tileMap.tile_size;

        var destination_y = Math.floor(i / tileMap.collums) * tileMap.tile_size;

        tm.drawImage(tileMap.image, source_x, source_y, tileMap.tile_image_size, tileMap.tile_image_size, destination_x, destination_y, tileMap.tile_size, tileMap.tile_size);
        //console.log(source_x)
        //console.log(source_y)

    }
}

tileMap.image.src = 'Tile Map.png';



loop = function () {

    let left = Math.floor(player.x / tileMap.tile_size);
    let right = Math.floor((player.x + player.width) / tileMap.tile_size);
    let top = Math.floor(player.y / tileMap.tile_size);
    let bottom = Math.floor((player.y + player.height) / tileMap.tile_size);


    let topLeft = top * tileMap.collums + left;
    let topRight = top * tileMap.collums + right;
    let bottomLeft = bottom * tileMap.collums + left;
    let bottomRight = bottom * tileMap.collums + right;

    if (tileMap.map[topLeft] !== 5 || tileMap.map[topRight] !== 5 || tileMap.map[bottomLeft] !== 5 || tileMap.map[bottomRight] !== 5) {
        c.fillText('collision has been detected', 0, 60);
        console.log(0)
    }
    if (mouvement.left) {
        player.velocity_x -= 1.5;
    }
    if (mouvement.up && !player.jump) {
        player.velocity_y -= 40;
        player.jump = true;
    }
    if (mouvement.right) {
        player.velocity_x += 1.5;

    }


    player.x += player.velocity_x;
    player.y += player.velocity_y;
    player.velocity_x *= 0.9;
    player.velocity_y *= 0.9;
    player.y += 12;

    if (player.y > window.innerHeight - player.height) {
        player.jump = false;
        player.y = window.innerHeight - player.height;
    }
    if (player.x < 0) {
        player.x = 0;
    }



    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle = 'red';
    c.fillRect(player.x, player.y, player.width, player.height);

    window.requestAnimationFrame(loop);
}

function key(e) {
    toggle = (e.type == "keydown") ? true : false;

    switch (e.keyCode) {
        case 37: mouvement.left = toggle;
            break;
        case 38: mouvement.up = toggle;
            break;
        case 39: mouvement.right = toggle;
            break;

    }
}

window.addEventListener("keyup", key);
window.addEventListener("keydown", key);
window.requestAnimationFrame(loop);