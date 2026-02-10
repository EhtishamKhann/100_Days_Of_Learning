// write an arrow function that named arrayAverage that accepts an array of numbers and return
// the average of that numbers 

let arrayOfNumbers = [];

let arrayAverage = (array) => {
    if(array.length===0){
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let ans = sum / array.length;
    return ans;
};

console.log(arrayAverage(arrayOfNumbers));
