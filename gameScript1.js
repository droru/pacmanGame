/*function STARTNOW(){
    initBoard();
    drawBoard();
    initPaths();
    //drawPaths();
    initBubbles();
    drawBubbles();
}

var BOARD_CANVAS_CONTEXT = null;
function initBoard() {
    var canvas = document.getElementById('canvas-board');
    canvas.setAttribute('width', '550');
    canvas.setAttribute('height', '550');
    if (canvas.getContext) {
        BOARD_CANVAS_CONTEXT = canvas.getContext('2d');
    }
}
function drawBoard(alternate) {
    var ctx = BOARD_CANVAS_CONTEXT;

    if (alternate && alternate === true) {
        ctx.strokeStyle = "#fff";
    } else {
        ctx.strokeStyle = "#193fff";
    }

    ctx.lineWidth = "2";
    ctx.beginPath();

    // UP
    ctx.moveTo(0, 231);
    ctx.lineTo(97, 231);
    ctx.arcTo(99, 231, 99, 228, 5);
    ctx.lineTo(99, 179);
    ctx.arcTo(99, 176, 97, 176, 5);
    ctx.lineTo(12, 176);
    ctx.arcTo(1, 176, 1, 165, 12);
    ctx.lineTo(1, 10);
    ctx.arcTo(1, 1, 10, 1, 12);
    ctx.lineTo(536, 1);
    ctx.arcTo(547, 1, 547, 12, 12);
    ctx.lineTo(547, 165);
    ctx.arcTo(547, 176, 536, 176, 12);
    ctx.lineTo(452, 176);
    ctx.arcTo(449, 176, 449, 179, 5);
    ctx.lineTo(449, 228);
    ctx.arcTo(449, 231, 451, 231, 5);
    ctx.lineTo(550, 231);
    ctx.stroke();

    ctx.moveTo(0, 238);
    ctx.lineTo(98, 238);
    ctx.arcTo(106, 238, 106, 232, 12);
    ctx.lineTo(106, 179);
    ctx.arcTo(106, 169, 101, 169, 12);
    ctx.lineTo(15, 169);
    ctx.arcTo(9, 169, 9, 158, 5);
    ctx.lineTo(9, 15);
    ctx.arcTo(9, 7, 18, 7, 5);
    ctx.lineTo(259, 7);
    ctx.arcTo(266, 7, 266, 11, 5);
    ctx.lineTo(266, 73);
    ctx.arcTo(266, 78, 269, 78, 5);
    ctx.lineTo(280, 78);
    ctx.arcTo(283, 78, 283, 75, 5);
    ctx.lineTo(283, 15);
    ctx.arcTo(283, 7, 286, 7, 5);
    ctx.lineTo(533, 7);
    ctx.arcTo(540, 7, 540, 11, 5);
    ctx.lineTo(540, 165);
    ctx.arcTo(540, 169, 533, 169, 5);
    ctx.lineTo(452, 169);
    ctx.arcTo(442, 169, 442, 172, 12);
    ctx.lineTo(442, 230);
    ctx.arcTo(442, 238, 445, 238, 12);
    ctx.lineTo(550, 238);
    ctx.stroke();

    // DOWN
    ctx.moveTo(0, 283);
    ctx.lineTo(97, 283);
    ctx.arcTo(99, 283, 99, 286, 5);
    ctx.lineTo(99, 335);
    ctx.arcTo(99, 338, 96, 338, 5);
    ctx.lineTo(9, 338);
    ctx.arcTo(1, 338, 1, 341, 12);
    ctx.lineTo(1, 540);
    ctx.arcTo(1, 548, 9, 548, 12);
    ctx.lineTo(539, 548);
    ctx.arcTo(547, 548, 547, 540, 12);
    ctx.lineTo(547, 345);
    ctx.arcTo(547, 337, 539, 337, 12);
    ctx.lineTo(453, 337);
    ctx.arcTo(450, 337, 450, 334, 5);
    ctx.lineTo(450, 286);
    ctx.arcTo(450, 283, 453, 283, 5);
    ctx.lineTo(550, 283);
    ctx.stroke();

    ctx.moveTo(0, 276);
    ctx.lineTo(99, 276);
    ctx.arcTo(107, 276, 107, 282, 12);
    ctx.lineTo(107, 335);
    ctx.arcTo(107, 345, 101, 345, 12);
    ctx.lineTo(12, 345);
    ctx.arcTo(9, 345, 9, 348, 5);
    ctx.lineTo(9, 432);
    ctx.arcTo(9, 435, 12, 435, 5);
    ctx.lineTo(44, 435);
    ctx.arcTo(47, 435, 47, 438, 5);
    ctx.lineTo(47, 448);
    ctx.arcTo(47, 451, 44, 451, 5);
    ctx.lineTo(12, 451);
    ctx.arcTo(9, 451, 9, 454, 5);
    ctx.lineTo(9, 538);
    ctx.arcTo(9, 541, 12, 541, 5);
    ctx.lineTo(536, 541);
    ctx.arcTo(539, 541, 539, 538, 5);
    ctx.lineTo(539, 455);
    ctx.arcTo(539, 451, 536, 451, 5);
    ctx.lineTo(505, 451);
    ctx.arcTo(502, 451, 502, 448, 5);
    ctx.lineTo(502, 439);
    ctx.arcTo(502, 436, 505, 436, 5);
    ctx.lineTo(536, 436);
    ctx.arcTo(539, 433, 539, 430, 5);
    ctx.lineTo(539, 349);
    ctx.arcTo(539, 345, 536, 345, 5);
    ctx.lineTo(455, 345);
    ctx.arcTo(442, 345, 442, 342, 12);
    ctx.lineTo(442, 288);
    ctx.arcTo(442, 276, 448, 276, 12);
    ctx.lineTo(550, 276);
    ctx.stroke();

    // LEFT
    ctx.roundRect(50, 45, 107, 79, 5);
    ctx.stroke();
    ctx.roundRect(50, 116, 107, 132, 5);
    ctx.stroke();
    ctx.roundRect(148, 45, 224, 79, 5);
    ctx.stroke();
    ctx.roundRect(148, 382, 224, 398, 5);
    ctx.stroke();
    ctx.roundRect(148, 276, 165, 345, 5);
    ctx.stroke();

    ctx.moveTo(56, 504);
    ctx.lineTo(220, 504);
    ctx.arcTo(223, 504, 223, 501, 5);
    ctx.lineTo(223, 492);
    ctx.arcTo(223, 489, 220, 489, 5);
    ctx.lineTo(168, 489);
    ctx.arcTo(165, 489, 165, 486, 5);
    ctx.lineTo(165, 439);
    ctx.arcTo(165, 436, 162, 436, 5);
    ctx.lineTo(152, 436);
    ctx.arcTo(149, 436, 149, 439, 5);
    ctx.lineTo(149, 486);
    ctx.arcTo(149, 489, 146, 489, 5);
    ctx.lineTo(54, 489);
    ctx.arcTo(51, 489, 51, 492, 5);
    ctx.lineTo(51, 501);
    ctx.arcTo(51, 504, 54, 504, 5);
    ctx.stroke();

    ctx.moveTo(55, 382);
    ctx.lineTo(104, 382);
    ctx.arcTo(107, 382, 107, 385, 5);
    ctx.lineTo(107, 447);
    ctx.arcTo(107, 450, 104, 450, 5);
    ctx.lineTo(93, 450);
    ctx.arcTo(90, 450, 90, 447, 5);
    ctx.lineTo(90, 401);
    ctx.arcTo(90, 398, 87, 398, 5);
    ctx.lineTo(55, 398);
    ctx.arcTo(52, 398, 52, 395, 5);
    ctx.lineTo(52, 385);
    ctx.arcTo(52, 382, 55, 382, 5);
    ctx.stroke();

    ctx.moveTo(148, 121);
    ctx.lineTo(148, 236);
    ctx.arcTo(148, 239, 151, 239, 5);
    ctx.lineTo(162, 239);
    ctx.arcTo(165, 239, 165, 236, 5);
    ctx.lineTo(165, 188);
    ctx.arcTo(165, 185, 168, 185, 5);
    ctx.lineTo(221, 185);
    ctx.arcTo(224, 185, 224, 182, 5);
    ctx.lineTo(224, 173);
    ctx.arcTo(224, 170, 221, 170, 5);
    ctx.lineTo(168, 170);
    ctx.arcTo(165, 170, 165, 169, 5);
    ctx.lineTo(165, 120);
    ctx.arcTo(165, 117, 162, 117, 5);
    ctx.lineTo(151, 117);
    ctx.arcTo(148, 117, 148, 120, 5);
    ctx.stroke();

    // RIGHT
    ctx.roundRect(442, 45, 498, 79, 5);
    ctx.stroke();
    ctx.roundRect(442, 116, 498, 132, 5);
    ctx.stroke();
    ctx.roundRect(324, 45, 400, 79, 5);
    ctx.stroke();
    ctx.roundRect(324, 382, 400, 398, 5);
    ctx.stroke();
    ctx.roundRect(383, 276, 400, 345, 5);
    ctx.stroke();

    ctx.moveTo(330, 504);
    ctx.lineTo(494, 504);
    ctx.arcTo(497, 504, 497, 501, 5);
    ctx.lineTo(497, 492);
    ctx.arcTo(497, 489, 494, 489, 5);
    ctx.lineTo(403, 489);
    ctx.arcTo(400, 489, 400, 486, 5);
    ctx.lineTo(400, 441);
    ctx.arcTo(397, 436, 394, 436, 5);
    ctx.lineTo(386, 436);
    ctx.arcTo(383, 436, 383, 439, 5);
    ctx.lineTo(383, 486);
    ctx.arcTo(383, 489, 380, 489, 5);
    ctx.lineTo(328, 489);
    ctx.arcTo(325, 489, 325, 492, 5);
    ctx.lineTo(325, 500);
    ctx.arcTo(325, 504, 328, 504, 5);
    ctx.stroke();

    ctx.moveTo(495, 382);
    ctx.lineTo(445, 382);
    ctx.arcTo(442, 382, 442, 385, 5);
    ctx.lineTo(442, 447);
    ctx.arcTo(442, 450, 445, 450, 5);
    ctx.lineTo(456, 450);
    ctx.arcTo(459, 450, 459, 447, 5);
    ctx.lineTo(459, 401);
    ctx.arcTo(459, 398, 462, 398, 5);
    ctx.lineTo(495, 398);
    ctx.arcTo(498, 398, 498, 395, 5);
    ctx.lineTo(498, 385);
    ctx.arcTo(498, 382, 495, 382, 5);
    ctx.stroke();

    ctx.moveTo(400, 121);
    ctx.lineTo(400, 236);
    ctx.arcTo(400, 239, 397, 239, 5);
    ctx.lineTo(386, 239);
    ctx.arcTo(383, 239, 383, 236, 5);
    ctx.lineTo(383, 188);
    ctx.arcTo(383, 185, 380, 185, 5);
    ctx.lineTo(328, 185);
    ctx.arcTo(325, 185, 325, 182, 5);
    ctx.lineTo(325, 173);
    ctx.arcTo(325, 170, 328, 170, 5);
    ctx.lineTo(380, 170);
    ctx.arcTo(383, 170, 383, 169, 5);
    ctx.lineTo(383, 120);
    ctx.arcTo(383, 117, 385, 117, 5);
    ctx.lineTo(397, 117);
    ctx.arcTo(400, 117, 400, 120, 5);
    ctx.stroke();

    // CENTER
    ctx.moveTo(212, 117);
    ctx.lineTo(338, 117);
    ctx.arcTo(341, 120, 341, 123, 5);
    ctx.lineTo(341, 129);
    ctx.arcTo(341, 132, 338, 132, 5);
    ctx.lineTo(286, 132);
    ctx.arcTo(283, 132, 283, 135, 5);
    ctx.lineTo(283, 182);
    ctx.arcTo(283, 185, 280, 185, 5);
    ctx.lineTo(269, 185);
    ctx.arcTo(266, 185, 266, 182, 5);
    ctx.lineTo(266, 135);
    ctx.arcTo(266, 132, 262, 132, 5);
    ctx.lineTo(211, 132);
    ctx.arcTo(208, 132, 208, 129, 5);
    ctx.lineTo(208, 120);
    ctx.arcTo(208, 117, 211, 117, 5);
    ctx.stroke();

    ctx.moveTo(212, 329);
    ctx.lineTo(338, 329);
    ctx.arcTo(341, 332, 341, 335, 5);
    ctx.lineTo(341, 341);
    ctx.arcTo(341, 344, 338, 344, 5);
    ctx.lineTo(286, 344);
    ctx.arcTo(283, 344, 283, 347, 5);
    ctx.lineTo(283, 394);
    ctx.arcTo(283, 397, 280, 397, 5);
    ctx.lineTo(269, 397);
    ctx.arcTo(266, 397, 266, 394, 5);
    ctx.lineTo(266, 347);
    ctx.arcTo(266, 344, 262, 344, 5);
    ctx.lineTo(211, 344);
    ctx.arcTo(208, 344, 208, 129, 5);
    ctx.lineTo(208, 332);
    ctx.arcTo(208, 329, 211, 329, 5);
    ctx.stroke();

    ctx.moveTo(212, 436);
    ctx.lineTo(338, 436);
    ctx.arcTo(341, 439, 341, 442, 5);
    ctx.lineTo(341, 448);
    ctx.arcTo(341, 451, 338, 451, 5);
    ctx.lineTo(286, 451);
    ctx.arcTo(283, 451, 283, 454, 5);
    ctx.lineTo(283, 501);
    ctx.arcTo(283, 503, 280, 503, 5);
    ctx.lineTo(269, 503);
    ctx.arcTo(266, 503, 266, 501, 5);
    ctx.lineTo(266, 454);
    ctx.arcTo(266, 451, 262, 451, 5);
    ctx.lineTo(211, 451);
    ctx.arcTo(208, 451, 208, 236, 5);
    ctx.lineTo(208, 439);
    ctx.arcTo(208, 436, 211, 436, 5);
    ctx.stroke();

    ctx.moveTo(254, 223);
    ctx.lineTo(207, 223);
    ctx.lineTo(207, 292);
    ctx.lineTo(342, 292);
    ctx.lineTo(342, 223);
    ctx.lineTo(296, 223);
    ctx.lineTo(296, 230);
    ctx.lineTo(334, 230);
    ctx.lineTo(334, 284);
    ctx.lineTo(214, 284);
    ctx.lineTo(214, 230);
    ctx.lineTo(254, 230);
    ctx.lineTo(254, 223);
    ctx.stroke();

    ctx.closePath();
}
CanvasRenderingContext2D.prototype.roundRect = function(sx, sy, ex, ey, r) {
    var r2d = Math.PI/180;
    if( ( ex - sx ) - ( 2 * r ) < 0 ) { r = ( ( ex - sx ) / 2 ); }
    if( ( ey - sy ) - ( 2 * r ) < 0 ) { r = ( ( ey - sy ) / 2 ); }
    this.beginPath();
    this.moveTo(sx+r,sy);
    this.lineTo(ex-r,sy);
    this.arc(ex-r,sy+r,r,r2d*270,r2d*360,false);
    this.lineTo(ex,ey-r);
    this.arc(ex-r,ey-r,r,r2d*0,r2d*90,false);
    this.lineTo(sx+r,ey);
    this.arc(sx+r,ey-r,r,r2d*90,r2d*180,false);
    this.lineTo(sx,sy+r);
    this.arc(sx+r,sy+r,r,r2d*180,r2d*270,false);
    this.closePath();
}

var PATHS = new Array();
var PATHS_CANVAS_CONTEXT = null;
function initPaths() {
    var canvas = document.getElementById('canvas-paths');
    canvas.setAttribute('width', '550');
    canvas.setAttribute('height', '550');
    if (canvas.getContext) {
        PATHS_CANVAS_CONTEXT = canvas.getContext('2d');
    }

    // CENTER
    PATHS.push("128,416-422,416");
    PATHS.push("30,98-518,98");
    PATHS.push("2,258-186,258");
    PATHS.push("362,258-548,258");
    PATHS.push("186,204-362,204");
    PATHS.push("186,310-362,310");
    PATHS.push("30,522-518,522");
    PATHS.push("238,258-314,258");
    PATHS.push("276,204-276,258");

    // LEFT
    PATHS.push("128,26-128,470");
    PATHS.push("30,26-244,26");
    PATHS.push("30,26-30,150");
    PATHS.push("30,150-128,150");
    PATHS.push("244,26-244,98");
    PATHS.push("186,204-186,364");
    PATHS.push("30,364-244,364");
    PATHS.push("244,364-244,416");
    PATHS.push("30,364-30,416");
    PATHS.push("30,416-70,416");
    PATHS.push("70,416-70,470");
    PATHS.push("30,470-128,470");
    PATHS.push("30,470-30,522");
    PATHS.push("244,150-244,204");
    PATHS.push("186,150-244,150");
    PATHS.push("186,98-186,150");
    PATHS.push("244,470-244,522");
    PATHS.push("186,470-244,470");
    PATHS.push("186,416-186,470");

    // RIGHT
    PATHS.push("422,26-422,470");
    PATHS.push("304,26-518,26");
    PATHS.push("518,26-518,150");
    PATHS.push("304,26-304,98");
    PATHS.push("422,150-518,150");
    PATHS.push("362,204-362,364");
    PATHS.push("304,364-518,364");
    PATHS.push("304,364-304,416");
    PATHS.push("518,364-518,416");
    PATHS.push("480,416-518,416");
    PATHS.push("480,416-480,470");
    PATHS.push("422,470-518,470");
    PATHS.push("518,470-518,522");
    PATHS.push("304,150-304,204");
    PATHS.push("304,150-362,150");
    PATHS.push("362,98-362,150");
    PATHS.push("304,470-304,522");
    PATHS.push("304,470-362,470");
    PATHS.push("362,416-362,470");

}
function drawPaths() {
    var ctx = PATHS_CANVAS_CONTEXT;

    ctx.strokeStyle = "red";

    for (var i = 0, imax = PATHS.length; i < imax; i ++) {

        var p = PATHS[i];

        var startX = p.split("-")[0].split(",")[0];
        var startY = p.split("-")[0].split(",")[1];
        var endX = p.split("-")[1].split(",")[0];
        var endY = p.split("-")[1].split(",")[1];

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.closePath();
    }
}

var BUBBLES_ARRAY = new Array();
var BUBBLES_CANVAS_CONTEXT = null;
var BUBBLES_X_START = 30;
var BUBBLES_X_END = 518;
var BUBBLES_GAP = ((BUBBLES_X_END - BUBBLES_X_START) / 25);
var BUBBLES_Y_START = 26;
var BUBBLES_Y_END = 522;
var BUBBLES_SIZE = 3;
var BUBBLES_COUNTER = 0;

var SUPER_BUBBLES = [];
var SUPER_BUBBLES_SIZE = 8;
var SUPER_BUBBLES_BLINK = false;
var SUPER_BUBBLES_BLINK_STATE = 0;
var SUPER_BUBBLES_BLINK_TIMER = -1;
var SUPER_BUBBLES_BLINK_SPEED = 525;

function initBubbles() {
    BUBBLES_COUNTER = 0;
    BUBBLES_ARRAY.length = 0;

    var canvas = document.getElementById('canvas-bubbles');
    canvas.setAttribute('width', '550');
    canvas.setAttribute('height', '550');
    if (canvas.getContext) {
        BUBBLES_CANVAS_CONTEXT = canvas.getContext('2d');
    }
}

function drawBubbles() {

    var ctx = BUBBLES_CANVAS_CONTEXT;
    ctx.fillStyle = "#dca5be";

    for (var line = 1, linemax = 29, i = 0, s = 0; line <= linemax; line ++) {
        var y = getYFromLine(line);
        for (var x = BUBBLES_X_START, xmax = BUBBLES_X_END, bubble = 1 ; x < xmax; bubble ++, x += BUBBLES_GAP) {
            if (canAddBubble(line, bubble)) {
                var type = "";
                var size = "";
                if (isSuperBubble(line, bubble)) {
                    type = "s";
                    size = SUPER_BUBBLES_SIZE;
                    SUPER_BUBBLES[s] = line + ";" + bubble + ";" + parseInt(correctionX(x, bubble)) + "," + parseInt(y) + ";0";
                    s ++;
                } else {
                    type = "b";
                    size = BUBBLES_SIZE;
                }
                BUBBLES_COUNTER ++;
                ctx.beginPath();
                ctx.arc(correctionX(x, bubble), y, size, 0, 2 * Math.PI, false);
                ctx.fill();
                ctx.closePath();

                BUBBLES_ARRAY.push( parseInt(correctionX(x, bubble)) + "," + parseInt(y) + ";" + line + ";" + bubble + ";" + type + ";0" );
                i ++;
            }
        }
    }
}

function stopBlinkSuperBubbles() {
    clearInterval(SUPER_BUBBLES_BLINK_TIMER);
    SUPER_BUBBLES_BLINK_TIMER = -1;
    SUPER_BUBBLES_BLINK = false;
}

function blinkSuperBubbles() {

    if (SUPER_BUBBLES_BLINK === false) {
        SUPER_BUBBLES_BLINK = true;
        SUPER_BUBBLES_BLINK_TIMER = setInterval('blinkSuperBubbles()', SUPER_BUBBLES_BLINK_SPEED);
    } else {

        if (SUPER_BUBBLES_BLINK_STATE === 0) {
            SUPER_BUBBLES_BLINK_STATE = 1;
        } else {
            SUPER_BUBBLES_BLINK_STATE = 0;
        }

        var clone = SUPER_BUBBLES.slice(0);

        for (var i = 0, imax = clone.length; i < imax; i ++) {

            var s = clone[i];

            if ( s.split(";")[3] === "0" ) {

                var sx = parseInt(s.split(";")[2].split(",")[0]);
                var sy = parseInt(s.split(";")[2].split(",")[1]);

                if (SUPER_BUBBLES_BLINK_STATE === 1) {
                    eraseBubble("s", sx, sy);
                } else {
                    var ctx = getBubblesCanevasContext();
                    ctx.fillStyle = "#dca5be";
                    ctx.beginPath();
                    ctx.arc(sx, sy, SUPER_BUBBLES_SIZE, 0, 2 * Math.PI, false);
                    ctx.fill();
                    ctx.closePath();
                }

            }
        }
    }
}

function setSuperBubbleOnXY( x, y, eat ) {

    for (var i = 0, imax = SUPER_BUBBLES.length; i < imax; i ++) {
        var bubbleParams = SUPER_BUBBLES[i].split( ";" );
        var testX = parseInt(bubbleParams[2].split( "," )[0]);
        var testY = parseInt(bubbleParams[2].split( "," )[1]);
        if ( testX === x && testY === y ) {
            SUPER_BUBBLES[i] = SUPER_BUBBLES[i].substr( 0, SUPER_BUBBLES[i].length - 1 ) + "1";
            break;
        }
    }
}

function getBubbleOnXY( x, y ) {

    var bubble = null;
    for (var i = 0, imax = BUBBLES_ARRAY.length; i < imax; i ++) {
        var bubbleParams = BUBBLES_ARRAY[i].split( ";" );
        var testX = parseInt(bubbleParams[0].split( "," )[0]);
        var testY = parseInt(bubbleParams[0].split( "," )[1]);
        if ( testX === x && testY === y ) {
            bubble = BUBBLES_ARRAY[i];
            break;
        }
    }
    return bubble;
}

function eraseBubble(t, x, y) {

    var ctx = getBubblesCanevasContext();

    var size = "";
    if (t === "s") {
        size = SUPER_BUBBLES_SIZE;
    } else {
        size = BUBBLES_SIZE;
    }

    ctx.clearRect(x - size, y - size, (size + 1) * 2, (size + 1) * 2);
}

function isSuperBubble(line, bubble) {
    if ( (line === 23 || line === 4) && (bubble === 1 || bubble === 26)) {
        return true;
    }

    return false;
}

function canAddBubble(line, bubble) {

    if ( ( ( line >= 1 && line <= 4) || (line >= 9 && line <= 10) || (line >= 20 && line <= 22) || (line >= 26 && line <= 28) ) && (bubble === 13 || bubble === 14)) {
        return false;
    } else if ( ( (line >= 2 && line <= 4) || (line >= 21 && line <= 22) ) && ( (bubble >= 2 && bubble <= 5) || (bubble >= 7 && bubble <= 11) || (bubble >= 16 && bubble <= 20) || (bubble >= 22 && bubble <= 25) ) ) {
        return false;
    } else if ( ( line >= 6 && line <= 7 ) && ( (bubble >= 2 && bubble <= 5) || (bubble >= 7 && bubble <= 8) || (bubble >= 10 && bubble <= 17) ||  (bubble >= 19 && bubble <= 20) || (bubble >= 22 && bubble <= 25) ) ) {
        return false;
    } else if ( ( line === 8 ) && ( (bubble >= 7 && bubble <= 8) || (bubble >= 13 && bubble <= 14) || (bubble >= 19 && bubble <= 20) ) ) {
        return false;
    } else if ( (( line >= 9 &&  line <= 19) ) && ( (bubble >= 1 && bubble <= 5) || (bubble >= 22 && bubble <= 26) ) ) {
        return false;
    } else if ( ( line === 11 || line === 17 ) && ( (bubble >= 7 && bubble <= 20) ) ) {
        return false;
    } else if ( ( line === 9 || line === 10 ) && ( (bubble === 12 || bubble === 15) ) ) {
        return false;
    } else if ( ( (line >= 12 && line <= 13) || (line >= 15 && line <= 16) ) && ( (bubble === 9 || bubble === 18) ) ) {
        return false;
    } else if ( line === 14 && ( (bubble >= 7 && bubble <= 9) || (bubble >= 18 && bubble <= 20) ) ) {
        return false;
    } else if ( (line === 18 || line === 19) && ( bubble === 9 || bubble === 18) ) {
        return false;
    } else if ( ( line >= 9 && line <= 10 ) && ( (bubble >= 7 && bubble <= 11) || (bubble >= 16 && bubble <= 20) ) ) {
        return false;
    } else if ( (( line >= 11 && line <= 13) || (line >= 15 && line <= 19) ) && ( (bubble >= 7 && bubble <= 8) || (bubble >= 19 && bubble <= 20) ) ) {
        return false;
    } else if ( ( (line >= 12 && line <= 16) || (line >= 18 && line <= 19) ) && ( bubble >= 10 && bubble <= 17) ) {
        return false;
    } else if ( (line === 23) && ( (bubble >= 4 && bubble <= 5) || (bubble >= 22 && bubble <= 23) ) ) {
        return false;
    } else if ( (line >= 24 && line <= 25) && ( (bubble >= 1 && bubble <= 2) || (bubble >= 4 && bubble <= 5) || (bubble >= 7 && bubble <= 8) || (bubble >= 10 && bubble <= 17) || (bubble >= 19 && bubble <= 20) || (bubble >= 22 && bubble <= 23) || (bubble >= 25 && bubble <= 26) ) ) {
        return false;
    } else if ( (line === 26) && ( (bubble >= 7 && bubble <= 8) || (bubble >= 19 && bubble <= 20) ) ) {
        return false;
    } else if ( (line >= 27 && line <= 28) && ( (bubble >= 2 && bubble <= 11) || (bubble >= 16 && bubble <= 25) ) ) {
        return false;
    }

    return true;
}

function correctionX(x, bubble) {

    if (bubble === 3) {
        return x + 1;
    } else if (bubble === 6) {
        return x + 1;
    } else if (bubble === 15) {
        return x + 1;
    } else if (bubble === 18) {
        return x + 1;
    } else if (bubble === 21) {
        return x + 2;
    } else if (bubble === 24) {
        return x + 2;
    } else if (bubble === 26) {
        return x + 1;
    }
    return x;
}

function getYFromLine(line) {
    var y = BUBBLES_Y_START;
    if (line < 8) {
        y = BUBBLES_Y_START + ( (line - 1) * 18 );
    } else if (line > 7 && line < 15) {
        y = 150 + ( (line - 8) * 18 );
    } else if (line > 14 && line < 21) {
        y = 256 + ( (line - 14) * 18 );
    } else if (line > 20 && line < 26) {
        y = 362 + ( (line - 20) * 18 );
    } else if (line > 25 && line < 29) {
        y = 452 + ( (line - 25) * 18 );
    } else if (line === 29) {
        y = BUBBLES_Y_END;
    }

    return y;
}

function initPacman() {
    var canvas = document.getElementById('canvas-pacman');
    canvas.setAttribute('width', '550');
    canvas.setAttribute('height', '550');
    if (canvas.getContext) {
        PACMAN_CANVAS_CONTEXT = canvas.getContext('2d');
    }
}
function drawPacman() {

    var ctx = getPacmanCanevasContext();

    ctx.fillStyle = "#fff200";
    ctx.beginPath();

    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    var lineToX = PACMAN_POSITION_X;
    var lineToY = PACMAN_POSITION_Y;
    if (PACMAN_DIRECTION === 1) {
        startAngle = (0.35 - (PACMAN_MOUNTH_STATE * 0.05)) * Math.PI;
        endAngle = (1.65 + (PACMAN_MOUNTH_STATE * 0.05)) * Math.PI;
        lineToX -= 8;
    } else if (PACMAN_DIRECTION === 2) {
        startAngle = (0.85 - (PACMAN_MOUNTH_STATE * 0.05)) * Math.PI;
        endAngle = (0.15 + (PACMAN_MOUNTH_STATE * 0.05)) * Math.PI;
        lineToY -= 8;
    } else if (PACMAN_DIRECTION === 3) {
        startAngle = (1.35 - (PACMAN_MOUNTH_STATE * 0.05)) * Math.PI;
        endAngle = (0.65 + (PACMAN_MOUNTH_STATE * 0.05)) * Math.PI;
        lineToX += 8;
    } else if (PACMAN_DIRECTION === 4) {
        startAngle = (1.85 - (PACMAN_MOUNTH_STATE * 0.05)) * Math.PI;
        endAngle = (1.15 + (PACMAN_MOUNTH_STATE * 0.05)) * Math.PI;
        lineToY += 8;
    }
    ctx.arc(PACMAN_POSITION_X, PACMAN_POSITION_Y, PACMAN_SIZE, startAngle, endAngle, false);
    ctx.lineTo(lineToX, lineToY);
    ctx.fill();
    ctx.closePath();
}*/