// Qs1. Write a JavaScript function that returns array elements larger than a number.

let larNum = function(num,array) {
    let returnArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
            returnArr.push(array[i])
        }
    }
    return returnArr ;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number = 5 ;


console.log(larNum(number,array));
