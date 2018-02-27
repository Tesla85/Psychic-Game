
//Create variable to track correct guesses, incorrect guesses, and number of guesses remaining until reset
var mindReader = 0;
//incorrect guess
var weakForce = 0;
//Number of guesses remaining until reset
var guess = 10;

//Creates array for all options A-Z
var computerPick = ["a", "b", "c",
                    "d", "e", "f", 
                    "g", "h","i", 
                    "j", "k", "l", 
                    "m", "n", "o", 
                    "p", "q", "r", 
                    "s", "t", "u", 
                    "v", "w", "x", 
                    "y", "z"];


//What key was pressed, brings number of guesses down by one.
 document.onkeyup = function (event) {

// Determines which key was pressed.
var userGuess = event.key;
   
// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    
// This logic determines the outcome of the game (Correct guess, incorrect guess, guesses remaining-1), and increments the appropriate number.
function reset() {
}

if (userGuess === computerPick) {
    mindReader++;
} else (userGuess != computerPick) {
    guess--;
} 

if (guess < 1) {
    weakForce++;
} else (reset()) {

}

// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and mindReader/weakForce/guess.
var html =
    "<p>You chose: " + userGuess + "</p>" +
    "<p>The computer chose: " + computerPick + "</p>" +
    "<p>mindReader: " + mindReader + "</p>" +
    "<p>weakForce: " + weakForce + "</p>" +
    "<p>guess: " + guess + "</p>";

console.log(html);

// Set the inner HTML contents of the #game div to our html string
document.getElementById("game").innerHTML = html;
}
};
  