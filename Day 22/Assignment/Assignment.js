// Q1. Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me"

let newInput = document.createElement('input');
let newbtn = document.createElement('button');

newbtn.innerText = "Click me";

document.querySelector('body').append(newInput);
document.querySelector('body').append(newbtn);

// Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn"

newbtn.setAttribute("id", "btn");
newInput.setAttribute("placeholder" , "username");


// Qs3. Access the btn using the querySelector and button id. Change the button background
// color to blue and text color to white.

let btn = document.querySelector('#btn');
btn.classList.add('btn');

// Qs4. Create an h1 element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.

let newHeading = document.createElement('h1');
newHeading.innerText = "DOM Practice";
newHeading.classList.add('heading');
document.querySelector('body').append(newHeading);

// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.

let newPara = document.createElement('p');
newPara.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector('body').append(newPara);
