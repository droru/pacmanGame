var numOfBalls =50
var gameTime ;
var numOfMonster=1
var S_color1;
var S_color2;
var S_color3;
var M_up;
var M_down;
var M_left;
var M_right;
var loogedUser;
var audio;
var audiooff;
var sound;
var soundOver;
var soundWin;
var startGame;
var soundLife;
var users=
    [
        {username : "a", password: "a" ,firstname :"a" ,lastname: "a" ,email: "a@a.com",gender: "male" ,birthdate: "1.1.1990"}
    ];

var isplaying =false;
$(document).ready(function () {
    window.addEventListener("keydown", function(e) {
        // space, page up, page down and arrow keys:
        if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);



    var i_numBalls =$("#s_numBalls")
    var i_gameTime =$("#s_gameTime")
    var i_numofMonster =$("#s_numMonster")

    M_up="ArrowUp"
    M_down="ArrowDown"
    M_left="ArrowLeft"
    M_right="ArrowRight"

    S_color1=document.getElementById("s_color1").getAttribute('value');
    S_color2=document.getElementById("s_color2").getAttribute('value');;
    S_color3=document.getElementById("s_color3").getAttribute('value');
    gameTime=60;
    //


    var regNum = /\d/;
    var regPass=/^\w+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    showWelcome();
    audio=$("#soundOn");
    audio.hide();
    audiooff=$("#soundOf")

    sound = new Howl({
        src: ['pacmanTheme.mp3']

    });
    sound.on('end', function(){
        sound.play();
    });

    soundLife = new Howl({
        src: ['extraLife.mp3']

    });
    soundOver = new Howl({
        src: ['Gameover.mp3']

    });

    soundWin = new Howl({
        src: ['gameWin.mp3']

    });

    function showWelcome() {
        $("#Singin").hide();
        $("#Login").hide();
        $("#settings").hide();
        $("#welcome").show();
        $("#game").hide();

    }

    $("#w_username").hide();
    $("#w_password").hide();
    $("#w_firstname").hide();
    $("#w_lastname").hide();
    $("#w_email").hide();
    $("#w_date").hide();
    $("#w_gender").hide();
    $("#w_loginuser").hide();
    $("#w_loginpass").hide();
    $("#w_numOfball").hide();
    $("#w_numMonster").hide();
    $("#w_gameTime").hide();

    $("#buttonLogIn").click(function () {
        $("#Singin").hide();
        $("#welcome").hide();
        $("#settings").hide();
        $("#game").hide();
        $("#Login").show();
    });
    $("#buttonSignIn").click(function () {
        $("#Login").hide();
        $("#welcome").hide();
        $("#settings").hide();
        $("#game").hide();
        $("#Singin").show();
    });


    $("#bWelcomeMenu").click(function () {
        if (!isplaying){
            $("#Singin").hide();
            $("#Login").hide();
            $("#settings").hide();
            $("#game").hide();
            $("#welcome").show();/*.css("visibility", "visible");*/
            $("#bWelcomeMenu").addClass("active");
            $("#bSettingMenu").removeClass("active");
        }
    });

    $("#s_letsPlay").click(function () {
        startGame=true;
        $("#Singin").hide();
        $("#Login").hide();
        $("#welcome").hide();

        S_color1=document.getElementById("s_color1").value;
        S_color2=document.getElementById("s_color2").value;
        S_color3=document.getElementById("s_color3").value;
        numOfMonster=document.getElementById("s_numMonster").value;
        numOfBalls=document.getElementById("s_numBalls").value;
        gameTime=document.getElementById("s_gameTime").value;
        //console.log()

        console.log(S_color1+"  "+S_color2+"  "+S_color3);


        console.log(numOfMonster+" "+numOfBalls+" "+gameTime)

        if(numOfMonster>3||numOfMonster<1) {
            startGame = false;
            $("#w_numMonster").show();
        }
        else
            $("#w_numMonster").hide();

        if(numOfBalls>90||numOfBalls<50) {
            startGame = false;
            $("#w_numOfball").show();
        }
        else
            $("#w_numOfball").hide();

        if(gameTime<60) {
            startGame = false;
            $("#w_gameTime").show();

        }
        else
            $("#w_gameTime").hide();

        if(startGame==true){
            $("#settings").hide();
            $("#game").show();
            $("#bAboutMenu").disabled = true;
            $("#bWelcomeMenu").disabled = true;
            Start();
        }


    })
    /*$("#bSettingMenu").click(function () {
    $("#Singin").hide();
    $("#Login").hide();
    $("#welcome").hide();
    $("#game").hide();
    $("#settings").show();/*.css("visibility", "visible");

    $("#bWelcomeMenu").removeClass("active");
    $("#bSettingMenu").addClass("active");

});*/

    $("#bAboutMenu").click(function () {
        var modal = document.getElementById('about');

        $('.modal-content').css({
            'transform':'translateY(0px)'
        });

        modal.style.display = "block";
        $('.modal-content > .close').click(function () {
            modal.style.display="none";
            close_modal();
        });
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                close_modal();
            }
        }
        $(document).keydown(function(event) {
            if (event.keyCode == 27) {
                modal.style.display = "none";
                close_modal();
            }
        });

        function close_modal() {
            $('.modal-content').css({
                'transform':'translateY(-300%)'
            });

            $('.modal-content').siblings('.btn').css({
                'z-index':'1'
            });
        }
    });

    function inintSetting() {
        document.getElementById("s_gameTime").setAttribute('value',gameTime);
        document.getElementById("s_numBalls").setAttribute('value',numOfBalls);
        document.getElementById("s_numMonster").setAttribute('value',numOfMonster);
        document.getElementById("s_moveU").setAttribute( 'value',M_up);
        document.getElementById("s_moveD").setAttribute( 'value',M_down);
        document.getElementById("s_moveL").setAttribute( 'value',M_left);
        document.getElementById("s_moveR").setAttribute( 'value',M_right);
        document.getElementById("s_color1").setAttribute( 'value',S_color1);
        document.getElementById("s_color2").setAttribute( 'value',S_color2);
        document.getElementById("s_color3").setAttribute( 'value',S_color3);

    }

    $("form #register").click(function (event) {
        var username = $("form #username").val();
        var firstname = $("form #firstname").val();
        var lastname = $("form #lastname").val();
        var password = $("form #password").val();
        var email = $("form #email").val();
        var date =$("form #b_day").val().toString()+"."+$("form #b_month").val().toString()+"."+$("form #b_year").val();
        var gender=$( "input[name=gender]:checked" ).val();
        var singup = true;

        if (regNum.test(firstname) || firstname == "") {
            $("form #firstname").css("borderColor", "red");
            $("#w_firstname").show();
            singup=false;
        } else {

            $("form #firstname").css("borderColor", "");
            $("#w_firstname").hide();
        }
        if(regNum.test(lastname)||lastname=="") {
            $("form #lastname").css("borderColor", "red");
            $("#w_lastname").show();
            singup=false;

        }else {
            $("form #lastname").css("borderColor", "");
            $("#w_lastname").hide();
        }
        if(password.length<8) {
            $("form #password").css("borderColor", "red");
            $("#w_password").show();
            singup=false;

        }else {
            $("form #password").css("borderColor", "");
            $("#w_password").hide();
        }
        if(email==""||!emailReg.test(email)) {
            $("form #email").css("borderColor", "red");
            $("#w_email").show();
            singup=false;
        }else {
            $("form #email").css("borderColor", "");
            $("#w_email").hide();
        }
        if(username=="") {
            $("form #username").css("borderColor", "red");
            $("#w_username").show();
            singup=false;

        }else {
            $("form #username").css("borderColor", "");
            $("#w_username").hide();
        }

        if($("form #b_day").val()=="day"){
            $("form #b_day").css("borderColor", "red");
            $("#w_date").show();
            singup=false;

        }else {
            $("form #b_day").css("borderColor", "");
            $("#w_date").hide();
        }

        if($("form #b_month").val()=="Month"){
            $("form #b_month").css("borderColor", "red");
            $("#w_date").show();
            singup=false;

        }else {
            $("form #b_month").css("borderColor", "");
            $("#w_date").hide();
        }

        if($("form #b_year").val()=="year" ){
            $("form #b_year").css("borderColor", "red");
            $("#w_date").show();
            singup=false;

        }else {
            $("form #b_year").css("borderColor", "");
            $("#w_date").hide();
        }
        if(gender==undefined){
            $("#w_gender").show();
            singup=false;

        }else {
            $("#w_gender").hide();
        }
        if(singup) {
            event.preventDefault()
            alert("ok")
            var newUser={username : username.toString(), password: password.toString() ,firstname :firstname.toString() ,lastname: lastname.toString() ,email: email.toString(),gender: gender.toString() ,birthdate: date.toString()}
            users.push(newUser);
            console.log(users)
            showWelcome()
        }
        else {
            //showWelcome()
            //alert(gender)
            event.preventDefault();
        }

    });

    $("form #loginBtn").click(function (event) {
        var username = $("form #L_username").val();
        var password = $("form #L_pass").val();
        var loginOk=true;
        var finduser=false;

        users.forEach(function(element) {
            if(element.username==username.toString()&&element.password==password.toString())
                finduser=true;
            return
        });
        if(finduser) {
            //if(users.has(username))
            //if(username=="a"&&password=="a")
            //loginOk=true;
            event.preventDefault();

            $("#Singin").hide();
            $("#Login").hide();
            $("#settings").show();
            $("#welcome").hide();
            $("#game").hide();
            $("#playerName").text(username.toString());
            console.log("user loogged")
            $("#bWelcomeMenu").removeClass("active");
            $("#bSettingMenu").addClass("active");
            inintSetting();

        }
        else{
            event.preventDefault();
            loginOk=false;
            $("form #L_username").css("borderColor", "red");
            $("form #L_pass").css("borderColor", "red");
            $("#w_loginuser").show();
            $("#w_loginpass").show();
            console.log("user not log")

        }
    })

    function add (username,password,firstName,lastName,email,gender,birthdate) {
        this.username=username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender=gender;
        this.birthdate=birthdate;
    }
    var soundOn=false;
    audiooff.on("click",function (event) {
        sound.play();

        audiooff.hide();
        audio.show();

    })

    audio.on("click",function (event) {
        sound.stop();
        soundOn=false;
        audiooff.show();
        audio.hide();

    })

    $("#s_random").click(function (event) {
        numOfBalls =getRandomArbitrary(50,80)
        gameTime =getRandomArbitrary(60,300)
        numOfMonster=getRandomArbitrary(1,4)

        document.getElementById("s_gameTime").setAttribute('value',gameTime);
        document.getElementById("s_numBalls").setAttribute('value',numOfBalls);
        document.getElementById("s_numMonster").setAttribute('value',numOfMonster);

        document.getElementById("s_moveU").setAttribute( 'value',"ArrowUp");
        document.getElementById("s_moveD").setAttribute( 'value',"ArrowDown");
        document.getElementById("s_moveL").setAttribute( 'value',"ArrowLeft");
        document.getElementById("s_moveR").setAttribute( 'value',"ArrowRight");

        M_up="ArrowUp"
        M_down="ArrowDown"
        M_left="ArrowLeft"
        M_right="ArrowRight"

        S_color1=getRandomColor();
        S_color2=getRandomColor();
        S_color3=getRandomColor();
        document.getElementById("s_color1").setAttribute( 'value',S_color1);
        document.getElementById("s_color2").setAttribute( 'value',S_color2);
        document.getElementById("s_color3").setAttribute( 'value',S_color3);


    })

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $("#s_moveU").on('keydown', function (e) {
        e.preventDefault()
        var name=e.key;
        document.getElementById("s_moveU").setAttribute( 'value',name);
        M_up=name;
        console.log(M_up)
    })
    $("#s_moveD").on('keydown', function (e) {
        e.preventDefault()
        var name=e.key;
        document.getElementById("s_moveD").setAttribute( 'value',name);
        M_down=name;

    })
    $("#s_moveL").on('keydown', function (e) {
        e.preventDefault()
        var name=e.key;
        document.getElementById("s_moveL").setAttribute( 'value',name);
        M_left=name;

    })
    $("#s_moveR").on('keydown', function (e) {
        e.preventDefault()
        var name=e.key;
        document.getElementById("s_moveR").setAttribute( 'value',name);
        M_right=name;
    })

    $("#bResetGame").click(function () {
        stopGame();
        $("#game").hide();
        $("#settings").show();
        //Start();
    });

    $("#bStopGame").click(function () {
        stopGame();
        showWelcome();
    });

});




function getRandomArbitrary(min, max) {
    return parseInt( Math.random() * (max - min) + min);
}

var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var lblScore;
var lblTime;
var numOfGhost;
var lives;
var ball1;
var ball2;
var ball3;
var eatenBall;

function Start() {
    document.getElementById("playerName").scrollIntoView();

    var canvas = document.getElementById('canvas');
    context = canvas.getContext("2d");
    stopGame();
    isplaying=true;

    //play the song
    sound.play();
    sound.loop;
    audiooff.hide();
    audio.show();


    ball1 = parseInt(0.6*numOfBalls);
    ball2 =parseInt(0.3*numOfBalls);
    ball3 =parseInt(0.1*numOfBalls);
    if(ball1 + ball2 + ball3 != numOfBalls)
        ball3 = numOfBalls - ball1 - ball2;
    numOfGhost=numOfMonster;
    eatenBall=ball3+ball2+ball1;
    board = new Array();
    lives = 3;
    score = 0;
    pac_color = "yellow";
    var cnt = 100;
    var food_remain = numOfBalls;
    var pacman_remain = 1;
    start_time = new Date();
    lblScore = document.getElementById("lblScore");
    lblTime = document.getElementById("lblTime");

    for (var i = 0; i < 10; i++) {
        board[i] = new Array();
        //put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
        for (var j = 0; j < 10; j++) {
            if ((i === 3 && j === 3) || (i === 3 && j === 4) || (i === 3 && j === 5) || (i === 6 && j === 1) || (i === 6 && j === 2) || (i==7 && j==8)) {
                board[i][j] = 4;
            } else {
                var randomNum = Math.random();
                if (randomNum <= 1.0 * food_remain / cnt) {
                    food_remain--;
                    board[i][j] = 1;
                } else if (randomNum < 1.0 * (pacman_remain + food_remain) / cnt) {
                    shape.i = i;
                    shape.j = j;
                    pacman_remain--;
                    board[i][j] = 2;
                } else {
                    board[i][j] = 0;
                }
                cnt--;
            }
        }
    }
    while (food_remain > 0) {
        var emptyCell = findRandomEmptyCell(board);
        board[emptyCell[0]][emptyCell[1]] = 1;
        food_remain--;
    }
    keysDown = {};
    addEventListener("keydown", function (e) {
        keysDown[e.key] = true;
    }, false);
    addEventListener("keyup", function (e) {
        keysDown[e.key] = false;
    }, false);

    drawBoard();
    interval = setInterval(UpdatePosition, 250);

}
function getballColor() {
    var x=4;
    while(x>3)
        x=getRandomArbitrary(1,4)

    if(x==1) {
        if (ball1 > 0) {
            ball1--;
            return S_color1;
        }
    }
    if(x==2){
        if(ball2>0)
        {
            ball2--
            return S_color2;
        }
    }
    if (x==3)
        if(ball3>0)
        {
            ball3--;
            return S_color3
        }
    return getballColor();
}
function randomPacman(){
    var randomx=0;
    var randomy=0;
    while (randomx==0||randomx==9||randomy==0||randomy==9) {
        var random = findRandomEmptyCell(board);
        randomx = random[0];
        randomy = random[1];
        console.log(randomx+" "+randomy);
    }
    shape.i = randomx;
    shape.j = randomy;
    PACMAN_POSITION_X = randomx;
    PACMAN_POSITION_Y = randomy;
    board[randomx][randomy] = 2;
}
function findRandomEmptyCell(board) {
    var i = Math.floor((Math.random() * 9) + 1);
    var j = Math.floor((Math.random() * 9) + 1);
    while (board[i][j] !== 0) {
        i = Math.floor((Math.random() * 9) + 1);
        j = Math.floor((Math.random() * 9) + 1);
    }
    return [i, j];
}

/**
 * @return {number}
 */
function GetKeyPressed() {
    if (keysDown[M_up]) {
        console.log(M_up)
        return 1;
    }
    if (keysDown[M_down]) {
        console.log(M_down)
        return 2;
    }
    if (keysDown[M_left]) {
        console.log(M_left)
        return 3;
    }
    if (keysDown[M_right]) {
        console.log(M_right)
        return 4;
    }
}

var startAngle = 0.15;
var endAngle = 1.85;
var eyeX = +5;
var eyeY = -15;
var PACMAN_POSITION_X;
var PACMAN_POSITION_Y;
var POSITION_STEP = 60;
var eatTime=false;
var addTime=false;
var drawLife=false;
function Draw() {
    //context.clearRect(0, 0, canvas.width, canvas.height); //clean board
    lblScore.innerText = score;
    lblTime.innerText = Math.ceil(time_elapsed);
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var center = new Object();
            center.x = i * 60 + 30;
            center.y = j * 60 + 30;
            if (board[i][j] === 2) {
                context.beginPath();
                context.arc(center.x, center.y, 30, startAngle * Math.PI, endAngle * Math.PI); // half circle
                context.lineTo(center.x, center.y);
                context.fillStyle = pac_color; //color
                context.fill();
                context.beginPath();
                context.arc(center.x + eyeX, center.y + eyeY, 5, 0, 2 * Math.PI); // circle
                context.fillStyle = "white"; //color
                context.fill();
            } else if (board[i][j] === 1) {
                context.beginPath();
                context.arc(center.x, center.y, 10, 0, 2 * Math.PI); // circle
                context.fillStyle = getballColor(); //color
                context.fill();
                board[i][j]=8;
            }
        }
    }
    drawGhosts();
}
function drawPacman() {
    lblScore.innerText = score;
    console.log(time_elapsed +" " +gameTime+" " +"60");
    lblTime.innerText = Math.ceil(time_elapsed);

    context.clearRect(PACMAN_POSITION_X * POSITION_STEP, PACMAN_POSITION_Y * POSITION_STEP, POSITION_STEP, POSITION_STEP);
    var x = PACMAN_POSITION_X * POSITION_STEP + POSITION_STEP/2;
    var y = PACMAN_POSITION_Y * POSITION_STEP + POSITION_STEP/2;
    context.beginPath();
    context.arc(x, y, 30, startAngle * Math.PI, endAngle * Math.PI); // half circle
    context.lineTo(x, y);
    context.fillStyle = pac_color; //color
    context.fill();
    context.beginPath();
    context.arc(x + eyeX, y + eyeY, 5, 0, 2 * Math.PI); // circle
    context.fillStyle = "white"; //color
    context.fill();
}

function drawBoard() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var center = new Object();
            center.x = i * 60 + 30;
            center.y = j * 60 + 30;
            if (board[i][j] === 2) {
                if(i==0&&j==0)
                    randomPacman();
                else {
                    PACMAN_POSITION_X = i;
                    PACMAN_POSITION_Y = j;
                }
                drawPacman();
            } else if (board[i][j] === 1) {
                context.beginPath();
                context.arc(center.x, center.y, 10, 0, 2 * Math.PI); // circle
                var colorfill=getballColor();
                context.fillStyle = colorfill //color
                context.fill();
                scoreUpadate(colorfill,i,j);
                //board[i][j]=8;
            }
        }
    }
    context.strokeStyle = "#1C6EA4";
    context.lineWidth = "2";
    context.beginPath();
    context.roundRect(181, 181, 239, 359, 5);
    context.stroke();
    context.roundRect(186, 186, 234, 354, 5);
    context.stroke();
    context.roundRect(361, 61, 419, 179, 5);
    context.stroke();
    context.roundRect(366, 66, 414, 174, 5);
    context.stroke();
    context.roundRect(421, 481, 479, 539, 5);
    context.stroke();
    context.roundRect(426, 486, 474, 534, 5);
    context.stroke();

    drawGhosts();
    drawFruit();
    moveFruit();
    drawLives();



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
function scoreUpadate(colorfill,i,j) {
    if(colorfill.toString()==S_color1.toString())
        board[i][j]=11;
    else if (colorfill.toString()==S_color2.toString())
        board[i][j]=12;
    else
        board[i][j]=13;
}
function drawGhosts() {
    if(numOfGhost==1)
        drawGhost("blinky");
    else if(numOfGhost==2) {
        drawGhost('inky');
        drawGhost("blinky");
    }
    else if (numOfGhost==3) {
        drawGhost("clyde");
        drawGhost('inky');
        drawGhost("blinky");

    }
    setTimeout(function(){
        moveGhosts(numOfGhost);
    }, 500);
}
function drawLives(){
    var context = document.getElementById("lives").getContext("2d");
    var x, y;
    var radius = 12;
    context.clearRect(0, 0, 3*2*radius, 2*radius);
    for(var i=0; i < 3-lives; i++){
        x = i*2*radius+radius;
        y = radius;
        context.beginPath();
        context.arc(x, y, radius, startAngle * Math.PI, endAngle * Math.PI); // half circle
        context.lineTo(x, y);
        context.fillStyle = "black"; //color
        context.fill();
    }
    for (i = i; i < 3; i++) {
        x = i*2*radius+radius;
        y = radius;
        context.beginPath();
        context.arc(x, y, radius, startAngle * Math.PI, endAngle * Math.PI); // half circle
        context.lineTo(x, y);
        context.fillStyle = pac_color; //color
        context.fill();
    }
}

function UpdatePosition() {

    if(lblTime.innerText <= 0) {
        stopIntervals();
    }

    board[shape.i][shape.j] = 0;
    context.clearRect(shape.i*60, shape.j*60, 60, 60);
    var x = GetKeyPressed();
    if (x === 1) {
        if (shape.j > 0 && board[shape.i][shape.j - 1] !== 4) {
            shape.j--;
            startAngle = 1.65;
            endAngle = 1.35;
            eyeX = -15;
            eyeY = -5;
        }
    }
    if (x === 2) {
        if (shape.j < 9 && board[shape.i][shape.j + 1] !== 4) {
            shape.j++;
            startAngle = 0.65;
            endAngle = 0.35;
            eyeX = +15;
            eyeY = +5;
        }
    }
    if (x === 3) {
        if (shape.i > 0 && board[shape.i - 1][shape.j] !== 4) {
            shape.i--;
            startAngle = 1.15;
            endAngle = 0.85;
            eyeX = -5;
            eyeY = -15;
        }
    }
    if (x === 4) {
        if (shape.i < 9 && board[shape.i + 1][shape.j] !== 4) {
            shape.i++;
            startAngle = 0.15;
            endAngle = 1.85;
            eyeX = +5;
            eyeY = -15;
        }
    }
    if (board[shape.i][shape.j] === 11){
        score=score+5;
        eatenBall--
    }
    if (board[shape.i][shape.j] === 12){
        score=score+15;
        eatenBall--
    }
    if (board[shape.i][shape.j] === 13){
        score=score+25;
        eatenBall--
    }
    if (board[shape.i][shape.j] === 16){
        lives++
        drawLife=false;
        drawLives();
        soundLife.play();

    }
    if(board[shape.i][shape.j]==15){
        eatTime=true;
    }

    if(FRUIT_POSITION_X != null && FRUIT_POSITION_Y != null && FRUIT_POSITION_X == PACMAN_POSITION_X && FRUIT_POSITION_Y == PACMAN_POSITION_Y) {
        score += 50;
        eraseFruit();
        clearInterval(fruitInterval);
        FRUIT_POSITION_X = null;
        FRUIT_POSITION_Y = null;
    }

    if (eatenBall==0) {
        stopIntervals()
        message("We have a Winner!!!");
        soundWin.play();
    }
    board[shape.i][shape.j] = 2;
    PACMAN_POSITION_X =  shape.i;
    PACMAN_POSITION_Y = shape.j;
    var currentTime = new Date();
    time_elapsed = (gameTime-60)+60 - (currentTime - start_time) / 1000;

    if(lives==1&&drawLife==false) {
        drawLife=true;
        drawaddLife();
    }
    if(eatTime)
        time_elapsed=(time_elapsed+20);
    if(time_elapsed <= 0) {
        lblTime.innerText = 0;
        stopIntervals();
        if(score < 150)
            message("You can do better " + score);
        else {
            message("We have a Winner!!!");
            soundWin.play();
            sound.stop();
        }
    }
    if (score >= 20 && time_elapsed <= 10) {
        pac_color = "green";
    }
    if(time_elapsed<25&&addTime==false) {
        drawaddTime();
        addTime=true;
    }
    //Draw();
    drawPacman();
}


//add to time

//var h;
//var currentTime = new Date();
//h=currentTime=start_time;
//drawaddTime();



function drawaddTime() {
    var emptyCell=findRandomEmptyCell(board);
    board[emptyCell[0]][emptyCell[1]]=15;
    var center = new Object();
    center.x = emptyCell[0]*60;
    center.y = emptyCell[1]*60;
    var image=new Image()
    image.onload=function(){
        context.drawImage(image, center.x, center.y, 60, 60);

    }
    image.src="Clock.png"

}
function drawaddLife() {
    var emptyCell=findRandomEmptyCell(board);
    board[emptyCell[0]][emptyCell[1]]=16;
    var center = new Object();
    center.x = emptyCell[0]*60;
    center.y = emptyCell[1]*60;
    var image=new Image()
    image.onload=function(){
        context.drawImage(image, center.x, center.y, 50, 50);

    }
    image.src="heart.png"
}


function stopGame() {
    sound.stop();
    audiooff.show();
    audio.hide();
    isplaying=false;
    stopIntervals();
    //clean board
    var canvas = document.getElementById('canvas');
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas = document.getElementById('ghostsCanvas');
    getContext().clearRect(0, 0, canvas.width, canvas.height);
    clearMessage();
    resetGhosts();
    resetFruit();

}
function stopIntervals(){
    console.log("stoped");
    clearInterval(interval);
    clearInterval(ghostsInterval);
    clearInterval(fruitInterval);
}
function resetGame() {
    //reset pacman
    context.clearRect(PACMAN_POSITION_X*POSITION_STEP, PACMAN_POSITION_Y*POSITION_STEP, POSITION_STEP, POSITION_STEP);

    randomPacman();
    drawPacman();
    drawLives();
    interval = setInterval(UpdatePosition, 250);

    //reset ghosts
    eraseGhosts();
    resetGhosts();
    drawGhosts();

    //reset fruit
    eraseFruit();
    resetFruit();
    drawFruit();
    moveFruit();
}
function message(m) {
    var svg = document.getElementsByTagName("svg");
    svg[0].style.visibility = "visible";
    //svg.visibility = "visibale";
    $("#message").show();
    $("#message").html(m);
    if (m === "You Lost!") $("#message").addClass("red");
}
function clearMessage() {
    var svg = document.getElementsByTagName("svg");
    svg[0].style.visibility = "hidden";
    //svg.visibility = "collapse";
    $("#message").hide();
    $("#message").html("");
    $("#message").removeClass("red");
}
