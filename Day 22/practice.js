// Q1. Create a <p> tag with red text saying "Hey I'm red!"

let newPara = document.createElement('p');

newPara.innerText = "Hey I'm red!";

document.querySelector('body').append(newPara);

newPara.classList.add('red');


// Q2. Create an <h3> with a blue text that says "I'm a blue H3"

let newHeading = document.createElement('h3');

newHeading.innerText = "I'm a blue H3";

document.querySelector('body').append(newHeading);

newHeading.classList.add('blue');

// Q3. Create a <div> with a black border and a pink background color with the following elements inside it:
// another <h1> saying "I'm a div"
// a <p> thats says "ME TOO"

let newDiv = document.createElement('div');
let newDivHeading = document.createElement('h1');
let newDivPara = document.createElement('p');

newDivHeading.innerText = "I'm a div";
newDivPara.innerText = "ME TOO";

newDiv.append(newDivHeading);
newDiv.append(newDivPara);
document.querySelector('body').append(newDiv);


newDiv.classList.add('q3');