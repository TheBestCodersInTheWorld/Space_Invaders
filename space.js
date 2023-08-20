// global variables
const tileSize = 32;
const rows = 20;
const columns = 20;
const shipSpeed = tileSize

//board
const height = rows * tileSize;
const width = columns * tileSize;

//ship
const shipWidth = tileSize * 2;
const shipHeight = tileSize;

const shipX = width/2;
const shipY = height - 25;

let ship = {
    x: shipX,
    y: shipY,
    width: shipWidth,
    height: shipHeight
}

// window.onload = function() {

// }

window.onload = () => {
    board = document.getElementById("board")
    board.width = width
    board.height = height
    context = board.getContext("2d")

    context.fillStyle = "blue"
    context.fillRect(ship.x, ship.y, ship.width, ship.height)

    requestAnimationFrame(update)

    document.addEventListener("keydown", moveShip)




}
function update() {
    requestAnimationFrame(update)

    //clear the board
    context.clearRect(0,0,board.width, board.height)

    //repaint the ship
    context.fillRect(ship.x, ship.y, ship.width, ship.height)
}

function moveShip(e) {
    console.log(e)

    if (e.code == "ArrowLeft" && ship.x - shipSpeed >= 0) {
        ship.x -= shipSpeed;
    }
    else if (e.code == "ArrowRight" && ship.x + shipSpeed + shipWidth <= board.width) {
        ship.x += shipSpeed;
    }


}

    




