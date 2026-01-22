// Q1. For the given string "help!", trim it and convert to upper case 

let strOne = "help!";
let methodString = strOne.trim().toUpperCase();

console.log(methodString);

// Q2. For the srtig name "Apna College", Predict the output of the following
// str.slice(4,9)
// str.indexOf("na")
// str.replace("Apna","Our")

let strTwo = "Apna College";

console.log(strTwo.slice(4,9));     // Coll
console.log(strTwo.indexOf("na"));  //2
console.log(strTwo.replace("Apna","Our"));  //Our College

// Q3. Seperate the "college" part in the above string and replace "l" with "t"

console.log(strTwo.slice(5).replace("l","t").replace("l","t"));

