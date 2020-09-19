let player = {
    sprite: new Image(width = 100, height = 100),
    x: 0,
    y: 0
}

var ctx = field.getContext("2d");
field.width = window.innerWidth;
field.height = window.innerHeight;


function draw() {
    let bg = new Image(width = field.width, height = field.height);
    bg.src = "img/background.jpg";

    bg.onload = () => {
        ctx.drawImage(bg, 0, 0);
    }
}


$(field).on("mousemove", function(e) {
    player.x = e.offsetX;
    player.y = e.offsetY;
    draw();
});