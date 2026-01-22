// Write a program to find the largest of 3 numbers

let num1 = 10;
let num2 = 20;
let num3 = 70;

if (num1>num2) {
    if (num1>num3) {
        console.log(`${num1} is the Greatest Number.`);
    } else {
        console.log(`${num3} is the Greatest Number.`);
    }
} else {
    if (num2>num3) {
        console.log(`${num2} is the Greatest Number.`);
    } else {
        console.log(`${num3} is the Greatest Number.`);
    }
}