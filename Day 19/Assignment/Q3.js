// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"

let country = ["Australia", "Germany", "United States of America"] ;

let largestCountryName = function (arr){
    let ans = "";
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > ans.length){
            ans = arr[i];
        }
        
    }

    return ans;
}

console.log(largestCountryName(country));
