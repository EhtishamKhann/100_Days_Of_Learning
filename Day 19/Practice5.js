// Q1 . Create a function that print the sum of 1 - n numbers

function factorial(num){
    let sum = 0;
    for (let i = 0; i <= num; i++) {
          sum = sum + i;  
    }

    return sum;
}

console.log(factorial(5));
