// Q1. What will be the output of the following code :

let greet = "hello";

function changeGreet(){
    let greet = "namasta";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
    
}

console.log(greet);
changeGreet();