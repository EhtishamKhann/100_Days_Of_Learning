// Q1. Create a Function that returns the concatenation of all strings in an array.

let arr = [ "hello", "world"];

function concat(array){
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string = string + array[i];
    }

    return string;
}


console.log(concat(arr));
