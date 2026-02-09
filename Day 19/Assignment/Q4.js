// Qs4. Write a JavaScript function to count the number of vowels in a String
// argument.

let string = "Pakistan";

let vowelsCounter = function(str){
    let count = 0 ;
    for (let i = 0; i < str.length; i++) {
        if (
            str[i] == 'A' ||
            str[i] == 'a' ||
            str[i] == 'E' ||
            str[i] == 'e' ||
            str[i] == 'I' ||
            str[i] == 'i' ||
            str[i] == 'O' ||
            str[i] == 'o' ||
            str[i] == 'U' ||
            str[i] == 'u' 
        ) {
            count += 1;
        }
    }

    return count;
}

console.log(vowelsCounter(string));
