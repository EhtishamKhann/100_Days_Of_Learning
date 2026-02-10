// write a function that prints the " Hello World " at interval of 2 seconfs for 5 times

let id = setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(()=>{
    clearInterval(id);
},11000);