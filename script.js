var mine;
var p1, p2, p3, p4, p5, p6, p7, p8;

var finished = false;
function build(){
    var row = Math.floor(Math.random()*6 +1);
    var col = Math.floor(Math.random()*6 +1);
    mine = row + "" + col;
    
    p1 = (row - 1) +""+ (col - 1);
    p2 = (row - 1) +""+ col;
    p3 = (row - 1) +""+ (col + 1);
    p4 = row +""+ (col - 1);
    p5 = row +""+ (col + 1);
    p6 = (row + 1) +""+ (col - 1);
    p7 = (row + 1) +""+ col;
    p8 = (row + 1) +""+(col + 1);
    
}
function press(obj){
    var userinput = obj.id;
    if(finished == false){
    if(userinput == mine){
        obj.style.backgroundColor = "red";
        obj.innerHTML = "BOMB";
        gameOverDisplay();
        overSound();
        finished = true;
    }
    else if(userinput == p1 || userinput == p2 ||
        userinput == p3 || userinput == p4 ||
        userinput == p5 || userinput == p6 ||
        userinput == p7 || userinput == p8 ){
            obj.style.backgroundColor = "red";
            btnClick();
        }
    else{
        obj.style.backgroundColor = "teal";
        btnClick();
    }
}
}
function gameOverDisplay(){
    for(var i = 0; i<36; i++){
        document.getElementsByClassName("cell")[i].style.backgroundColor = "red";
        document.getElementsByClassName("cell")[i].style.color = "white";
        document.getElementById("32").innerHTML ="G";
        document.getElementById("33").innerHTML ="A";
        document.getElementById("34").innerHTML ="M";
        document.getElementById("35").innerHTML ="E";

        document.getElementById("42").innerHTML ="O";
        document.getElementById("43").innerHTML ="V";
        document.getElementById("44").innerHTML ="E";
        document.getElementById("45").innerHTML ="R";

    }
    // finished = true;
}
function btnClick(){
    var btnClick = document.getElementById("btnClick");
    btnClick.play();
}
function overSound(){
    var overSound = document.getElementById("gameOver");
    overSound.play();
}