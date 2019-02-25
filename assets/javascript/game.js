var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessesLeft = 0;
var yourGuessesSoFar = [];

// var directionsText = document.getElementById("directions-text");

// var userChoiceText = document.getElementById("userchoice-text");

var winsText = document.getElementById("wins-text");

var lossesText = document.getElementById("losses-text");

var tiesText = document.getElementById("yourguessessofar-text");

var computerChoiceText = document.getElementById("guessesleft-text");

document.onkeyup = function(event) {
    console.log("onkeyup");
    var yourGuessesSoFar = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    for (i = 0; i < 10; i++) {
        console.log(i + 1);
    }
}