// Q2. Create a function to find a min in an array 

let arr =  [ 3, 5, 6, 1, 2, 1 ,];

let minimum = arr.reduce((min , el)=>{
    if(min > el){
        return el;
    }else {
        return min;
    }
});

console.log(minimum);
