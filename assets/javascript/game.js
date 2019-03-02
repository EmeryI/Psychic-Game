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

var yourGuessesSoFarText = document.getElementById("yourguessessofar-text");

var GuessesLeftText = document.getElementById("guessesleft-text");
// the above are all references to the HTML ids

document.onkeyup = function(event) {
    // .onkeyup is the listeing event for when a key is hit
    console.log("onkeyup");
    var currentGuess = event.key;
    yourGuessesSoFar.push(currentGuess)
    console.log(currentGuess + "current guess")
    console.log(yourGuessesSoFar)
    console.log(" guesses so far")

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // userguess appears in html
    yourGuessesSoFarText.textContent = yourGuessesSoFar
        // if computerguess and currentguess are eaqual wins go up
    if (computerGuess === currentGuess) {
        wins++;
        winsText.textContent = wins
    }

    // if computerguess and userguess are not eaqual then userguess will populate and numguess will decrease
}