// Q1 Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load


let btn = document.querySelector('button');
let input = document.querySelector('input');

btn.addEventListener('mouseout' , function () {
    this.style.backgroundColor = 'red';
})
input.addEventListener("keypress", function(event) {
    console.log(event.key); 
});

window.addEventListener("scroll", () => {
    console.log("User is scrolling");
});

window.addEventListener("load", () => {
    console.log("Page fully loaded");
});
