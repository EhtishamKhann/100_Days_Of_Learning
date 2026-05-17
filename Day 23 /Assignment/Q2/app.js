// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.

let body = document.querySelector('body');

let btn = document.createElement('button');
btn.innerText = "Click Me";

body.insertAdjacentElement('beforeend', btn);

btn.addEventListener('click', function () {
    this.style.color = 'green';
    this.style.backgroundColor = 'white';
});