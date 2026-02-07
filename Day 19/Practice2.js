// Q1. Craete a function that roll a dice 1-6

function dice(){
    let random = Math.floor( Math.random() * 6) + 1 ;
    console.log(random); 
}

dice();