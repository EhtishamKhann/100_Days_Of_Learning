// Q1. Square and sum the array elements using the arrow function and then find the
// average of the array.

let nums = [1, 2, 3, 4, 5];

const square = nums.map( (num)=> num * num );
console.log(square);

const sum = square.reduce( (acc , el)=> acc + el );

let average = sum / nums.length;

console.log(average);
