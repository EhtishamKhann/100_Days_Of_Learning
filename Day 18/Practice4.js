// Guessing Game

const max = prompt("Enter the maximum number");

const random = Math.floor( Math.random * max) + 1;

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if (guess == random) {
        console.log(`Congrats You gussed it right the number was ${random}`);
        break;  
    } else if (guess < random){
        guess = prompt("your number was too small please try again.")
    }
    
    else {
        guess = prompt("your number was too large please try again.");
    }

}


