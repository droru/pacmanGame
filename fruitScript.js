/**** creature +50 score ****/
var FRUIT_POSITION_X = 0;
var FRUIT_POSITION_Y = 9;

function drawFruit() {
    var ctx = getContext();
    var x = FRUIT_POSITION_X * POSITION_STEP;
    var y = FRUIT_POSITION_Y * POSITION_STEP;

    drawRaspberry(ctx, x, y, POSITION_STEP);
}
var fruitInterval;
function moveFruit() {
    fruitInterval = setInterval(function() {
        /*var direction = Math.floor( Math.random() * ( 4 - 1 + 1 ) + 1 );
        while(!canMove(FRUIT_POSITION_X, FRUIT_POSITION_Y, direction))
            direction = Math.floor( Math.random() * ( 4 - 1 + 1 ) + 1 );*/

        eraseFruit();

        /*if (direction == 1) {
            FRUIT_POSITION_X ++;
        } else if (direction== 2) {
            FRUIT_POSITION_Y ++;
        } else if (direction == 3) {
            FRUIT_POSITION_X --;
        } else if (direction == 4) {
            FRUIT_POSITION_Y --;
        }*/
        var random = findRandomEmptyCell(board);
        FRUIT_POSITION_X = random[0];
        FRUIT_POSITION_Y = random[1];
        drawFruit();
    }, 3000);
}
function eraseFruit(){
    if(FRUIT_POSITION_X != null && FRUIT_POSITION_Y != null)
        getContext().clearRect(FRUIT_POSITION_X*60, FRUIT_POSITION_Y*60, POSITION_STEP, POSITION_STEP);
}
function resetFruit(){
    FRUIT_POSITION_X = 0;
    FRUIT_POSITION_Y = 9;
}
var img;
function drawRaspberry(ctx, x, y, size) {
    if(img == null)
        img = new Image();
    img.onload = function()
    {
        ctx.drawImage(img, x+10, y+10, size-20, size-20);
    }
    img.src = "r.png";
}

