// Qs5. Write a JavaScript function to generate a random number within a range
// (start, end).

let num1 = 100;
let num2 = 200

let randomNumber = function(start,end){
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start ;
}

console.log(randomNumber(num1,num2));