// Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47853 have the same last digit ie 2

let num1 = 32;
let num2 = 47852;

if (num1%10 == num2%10) {
    console.log(`Both the numbers have same last digit that is ${num1%10}`);
} else {
    console.log("They dont have the same last digit");
}