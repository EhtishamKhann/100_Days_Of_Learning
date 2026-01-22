// Q1. A "good string" is a string that start with the letter 'a' and has a length > 3. 

// write a program to find out weather the string is good or not.

let str = "apple";

if (str[0]=='a' && str.length>3) {
    console.log("good string");
} else {
    console.log("bad string");
}


// Q2. Predict the output of the following code 

let num = 12;
if (( num % 3 === 0) && ((num+1==15) || (num-1 == 11))) {
//         True                 False         True
//          |                    |_____________|
//          |                           |
//        True                        True   
//          |__________________________|
//                      |
//                    True    (so the answer will be safe)

    console.log("safe");
} else {
    console.log("unsafe");
}