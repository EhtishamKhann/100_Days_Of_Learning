// Q5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.

const megaObjects = (obj1, obj2) => ({ ...obj1, ...obj2});

let newObject = megaObjects( {a:1 , b:2 } , {c:3 , d:4 });

console.log(newObject);