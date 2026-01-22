// Q1. Create a system to calculate a popcorn prices based on the size customer asked for:

// If size is XL , price is Rs. 250
// If size is L , price is Rs. 200
// If size is M , price is Rs. 100
// If size is S , price is Rs. 50

let size = 'S';

if (size=='XL') {
    console.log("Rs. 250");
} 
else if(size=='L') {
    console.log("Rs. 200");
}
else if(size=='M') {
    console.log("Rs. 100");
}
else if(size=='S') {
    console.log("Rs. 50");
}
else {
    console.log("Please enter a valid size");
}