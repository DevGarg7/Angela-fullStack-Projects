var x = Math.floor(Math.random() * 6) + 1;
var y = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll('.dice img')[0].setAttribute('src', 'images/dice' + x + '.png');
document.querySelectorAll('.dice img')[1].setAttribute('src', 'images/dice' + y + '.png');
if (x > y) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (x < y) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}