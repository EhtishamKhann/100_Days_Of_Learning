// Q1. Guess the favorite movie

let favMovie = "avengers";
let guess = prompt("Guess my favorite movie (type QUIT to exit)");

while (guess !== favMovie && guess !== "QUIT") {
    guess = prompt("Wrong! Try again (type QUIT to exit)");
}

if (guess === favMovie) {
    console.log("Congratulations! You guessed it right.");
} else {
    console.log("You quit the game.");
}
