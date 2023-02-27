var player1 = Math.floor((Math.random()*6)+1);
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", "images/dice"+player1+".png");




var player2 = Math.floor((Math.random()*6)+1);
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", "images/dice"+player2+".png");


if (player1 > player2){
    document.querySelector(".container h1").innerHTML=" Player 1 win";
}else if (player1 === player2){
    document.querySelector(".container h1").innerHTML="Draw";
}
else{
    document.querySelector(".container h1").innerHTML=" Player 2 win";
}
