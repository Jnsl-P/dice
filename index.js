var diceNum1 = Math.floor(Math.random() * 6)+1;
var diceNum2 = Math.floor(Math.random() * 6)+1;


$('.img1').attr("src", "./images/dice1.png");
$('.img2').attr("src", "./images/dice1.png");

if (diceNum1 > diceNum2) {
    $('h1').text('⚐ Player 1 Wins!')
} else if (diceNum1 < diceNum2){
    $('h1').text('Player 2 Wins! ⚐')
} else {
    $('h1').text('Draw!')
}
