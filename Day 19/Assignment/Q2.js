// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let str = "abcdabcdefgggh";

let getUnique = function(string){
    let ans = "";
    for (let i = 0; i < string.length; i++) {
        if (ans.indexOf(string[i]) == -1) {
            ans += string[i];
        }
    }

    return ans;
}

console.log(getUnique(str));

