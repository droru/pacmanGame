var GHOST_BLINKY_POSITION_X = 0;
var GHOST_BLINKY_POSITION_Y = 0;
var GHOST_BLINKY_DIRECTION = 1;
var GHOST_BLINKY_COLOR = "#ed1b24";

var GHOST_INKY_POSITION_X = 9;
var GHOST_INKY_POSITION_Y = 9;
var GHOST_INKY_DIRECTION = 3;
var GHOST_INKY_COLOR = "#4adecb";

var GHOST_CLYDE_POSITION_X = 9;
var GHOST_CLYDE_POSITION_Y = 0;
var GHOST_CLYDE_DIRECTION = 3;
var GHOST_CLYDE_COLOR = "#f99c00";

var ghostsContext;

function resetGhosts(){
    GHOST_BLINKY_POSITION_X = 0;
    GHOST_BLINKY_POSITION_Y = 0;
    GHOST_BLINKY_DIRECTION = 1;
    GHOST_BLINKY_COLOR = "#ed1b24";

    GHOST_INKY_POSITION_X = 9;
    GHOST_INKY_POSITION_Y = 9;
    GHOST_INKY_DIRECTION = 3;
    GHOST_INKY_COLOR = "#4adecb";

    GHOST_CLYDE_POSITION_X = 9;
    GHOST_CLYDE_POSITION_Y = 0;
    GHOST_CLYDE_DIRECTION = 3;
    GHOST_CLYDE_COLOR = "#f99c00";
}

function drawGhost(ghost) {
    var ctx = getContext();
    ctx.fillStyle = eval('GHOST_' + ghost.toUpperCase() + '_COLOR');
    var ghostX = eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X');
    var ghostY = eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y');
    var direction = eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION');
    var x = ghostX * POSITION_STEP + POSITION_STEP/2;
    var y = ghostY * POSITION_STEP + POSITION_STEP/2;
    drawHelperGhost(ctx, x, y, direction);
    console.log("ghost drawn");
    console.log("condition: " + (ghostX == PACMAN_POSITION_X && ghostY == PACMAN_POSITION_Y));
    console.log("ghost in: "+ghostX+","+ghostY);
    console.log("pacman in: "+PACMAN_POSITION_X+","+PACMAN_POSITION_Y);
    if(ghostX == PACMAN_POSITION_X && ghostY == PACMAN_POSITION_Y) {
        stopIntervals();
        console.log("stopped intervals");
        score -= 10;
        lives--;
        console.log("done");

        if(lives == 0) {
            message("You Lost!");
            sound.stop();
            soundOver.play();

        }
        else{
            setTimeout(resetGame, 500);
        }
    }
}

var ghostsInterval;
function moveGhosts(numOfGhost) {
    if(numOfGhost==1)
        ghostsInterval = setInterval(function() {
            moveGhost("blinky");
        }, 250);
    else if(numOfGhost==2)
        ghostsInterval = setInterval(function() {
            moveGhost("blinky");
            moveGhost('inky');
        }, 250);
    else if(numOfGhost==3)
        ghostsInterval = setInterval(function() {
            moveGhost("blinky");
            moveGhost('inky');
            moveGhost("clyde");
        }, 250);
}
function moveGhost(ghost) {
    changeDirection(ghost);
    eraseGhost(ghost);
    var direction = eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION');

    if (direction == 1) {
        eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X ++;');
    } else if (direction== 2) {
        eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y ++;');
    } else if (direction == 3) {
        eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X --;');
    } else if (direction == 4) {
        eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y --;');
    }
    console.log("ghost will be drawn now");
    drawGhost(ghost);
    console.log("ghost drawn on " + eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X') + " " + eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y'));
}

function changeDirection(ghost) {
    var direction = eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION');
    var ghostX = eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X');
    var ghostY = eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y');
    var dir;
    var axe = currentAxe(direction);

    dir = getRightDirection(axe, ghostX, ghostY, PACMAN_POSITION_X, PACMAN_POSITION_Y);
    if ( !(canMoveGhost(ghost, dir) && (direction != dir -2 && direction != dir + 2)) ) {
        axe = flipAxe(axe);
        dir = getRightDirection(axe, ghostX, ghostY, PACMAN_POSITION_X, PACMAN_POSITION_Y);
    }

    if (canMoveGhost(ghost, dir) && (direction != dir -2 && direction != dir + 2))
        eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION = dir');
    else {
        console.log("doing reverce");
        dir = reverseDirection(direction);
        eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION = dir');
    }
}

var RIGHT = 1;
var BOTTOM = 2;
var LEFT = 3;
var UP = 4;
var AXE_X = 1;
var AXE_Y = 0;
function getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY) {
    if(ghostX == pacmanX && ghostY == pacmanY)
        stopIntervals();
    if (axe === AXE_X) {
        if(ghostX == pacmanX){
            if (ghostY > pacmanY) {
                return UP;
            } else {
                return BOTTOM;
            }
        }
        if (ghostX > pacmanX) {
            return LEFT;
        } else {
            return RIGHT;
        }
    } else {
        if(ghostY == pacmanY){
            if (ghostX > pacmanX) {
                return LEFT;
            } else {
                return RIGHT;
            }
        }
        if (ghostY > pacmanY) {
            return UP;
        } else {
            return BOTTOM;
        }
    }
}
function currentAxe(direction){
    if(direction == RIGHT || direction == LEFT)
        return AXE_X;
    else
        return AXE_Y;
}
function flipAxe(axe) {
    if(axe == AXE_X)
        return AXE_Y;
    else
        return AXE_X;
}

function canMoveGhost(ghost, direction) {
    if (!direction) {
        var direction = eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION');
    }
    var positionX = eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X');
    var positionY = eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y');

    return canMove(positionX, positionY, direction);
}
function canMove(positionX, positionY, direction){
    if ( direction === RIGHT )
        positionX ++;
    else if ( direction === BOTTOM )
        positionY ++;
    else if ( direction === LEFT )
        positionX --;
    else if ( direction === UP )
        positionY --;

    if(positionX >= 0 && positionX < board.length && positionY >= 0 && positionY < board.length && board[positionX][positionY]!=4) {
        console.log("can move");
        return true;
    }
    else {
        console.log("cannot move");
        return false;
    }
}
function reverseDirection(direction) {
    if (direction > 2) return direction - 2;
    else return direction + 2;
}
function eraseGhosts(){
    eraseGhost("blinky");
    eraseGhost('inky');
    eraseGhost("clyde");
}
function eraseGhost(ghost) {
    var ctx = getContext();
    var ghostX = eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X');
    var ghostY = eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y');
    var x = ghostX * POSITION_STEP;
    var y = ghostY * POSITION_STEP;
    ctx.clearRect(x, y, POSITION_STEP, POSITION_STEP);
}

function drawHelperGhost(ctx, x, y, d) {
    ctx.beginPath();
    ctx.moveTo((x - 15), (y + 16));
    ctx.lineTo((x - 15), (y + 16) - 18);
    ctx.bezierCurveTo((x - 15), (y + 16) - 26, (x - 15) + 6, (y + 16) - 32, (x - 15) + 14, (y + 16) - 32);
    ctx.bezierCurveTo((x - 15) + 22, (y + 16) - 32, (x - 15) + 28, (y + 16) - 26, (x - 15) + 28, (y + 16) - 18);
    ctx.lineTo((x - 15) + 28, (y + 16));

    ctx.lineTo((x - 15) + 24.333, (y + 16) - 5.333);
    ctx.lineTo((x - 15) + 20.666, (y + 16));
    ctx.lineTo((x - 15) + 17.333, (y + 16) - 5.333);
    ctx.lineTo((x - 15) + 12.666, (y + 16));
    ctx.lineTo((x - 15) + 9, (y + 16) - 5.333);
    ctx.lineTo((x - 15) + 5.333, (y + 16));
    ctx.lineTo((x - 15) + 2.666, (y + 16) - 5.333);
    ctx.lineTo((x - 15), (y + 16) );
    ctx.fill();

    var eyesX = 0;
    var eyesY = 0;

    if (d === 4) {
        eyesY = -5;
    } else if (d === 1) {
        eyesX = +2;
    } else if (d === 2) {
        eyesY = 0;
        eyesY = +5;
    } else if (d === 3) {
        eyesX = -3;
    }

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo((x - 15) + 8 + eyesX, (y + 16) - 24 + eyesY);
    ctx.bezierCurveTo((x - 15) + 5 + eyesX, (y + 16) - 24 + eyesY, (x - 15) + 4 + eyesX, (y + 16) - 21 + eyesY, (x - 15) + 4 + eyesX, (y + 16) - 19 + eyesY);
    ctx.bezierCurveTo((x - 15) + 4 + eyesX, (y + 16) - 17 + eyesY, (x - 15) + 5 + eyesX, (y + 16) - 14 + eyesY, (x - 15) + 8 + eyesX, (y + 16) - 14 + eyesY);
    ctx.bezierCurveTo((x - 15) + 11 + eyesX, (y + 16) - 14 + eyesY, (x - 15) + 12 + eyesX, (y + 16) - 17 + eyesY, (x - 15) + 12 + eyesX, (y + 16) - 19 + eyesY);
    ctx.bezierCurveTo((x - 15) + 12 + eyesX, (y + 16) - 21 + eyesY, (x - 15) + 11 + eyesX, (y + 16) - 24 + eyesY, (x - 15) + 8 + eyesX, (y + 16) - 24 + eyesY);

    ctx.moveTo((x - 15) + 20 + eyesX, (y + 16) - 24 + eyesY);
    ctx.bezierCurveTo((x - 15) + 17 + eyesX, (y + 16) - 24 + eyesY, (x - 15) + 16 + eyesX, (y + 16) - 21 + eyesY, (x - 15) + 16 + eyesX, (y + 16) - 19 + eyesY);
    ctx.bezierCurveTo((x - 15) + 16 + eyesX, (y + 16) - 17 + eyesY, (x - 15) + 17 + eyesX, (y + 16) - 14 + eyesY, (x - 15) + 20 + eyesX, (y + 16) - 14 + eyesY);
    ctx.bezierCurveTo((x - 15) + 23 + eyesX, (y + 16) - 14 + eyesY, (x - 15) + 24 + eyesX, (y + 16) - 17 + eyesY, (x - 15) + 24 + eyesX, (y + 16) - 19 + eyesY);
    ctx.bezierCurveTo((x - 15) + 24 + eyesX, (y + 16) - 21 + eyesY, (x - 15) + 23 + eyesX, (y + 16) - 24 + eyesY, (x - 15) + 20 + eyesX, (y + 16) - 24 + eyesY);
    ctx.fill();

    if (d === 4) {
        eyesY = -9;
        eyesX = 2;
    } else if (d === 1) {
        eyesX = +6;
    } else if (d === 2) {
        eyesY = +8;
        eyesX = 2;
    } else if (d === 3) {

    }

    ctx.fillStyle = "#0000fa";
    ctx.beginPath();
    ctx.arc((x - 15) + 18 + eyesX, (y + 16) - 18 + eyesY, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc((x - 15) + 6 + eyesX, (y + 16) - 18 + eyesY, 2, 0, Math.PI * 2, true);
    ctx.fill();
}

function getContext() {
    if(ghostsContext)
        return ghostsContext;
    else {
        var canvas = document.getElementById("ghostsCanvas");
        ghostsContext = canvas.getContext("2d");
        return ghostsContext;
    }
}
