/* Is Unique: Implement an algorithm to determine if a string has all 
unique characters. What if you cannot use additional data structures? */


// Time = O(s) 
function isUnique (s){

    // assuming s is ascii string 
    // number of unique ascii characters is 256;
    if(s.length > 256) return false;

    let map = {};
    for(let i = 0; i < s.length; i++)
        // s[i] is a character not previously encountered, record it
        if(!map[s.charAt(i)]) map[s.charAt(i)] = 1;
        // s[i] is a repeated character, return false
        else return false;
    
    // have looped over every character
    return true;
} 


// in place, sort of? - only store variables in s
// Time = O(s lg s)
function isUniqueInPlace (s){


    // assuming s is ascii string 
    // number of unique ascii characters is 256;
    if(s.length > 256) return false;

    // sort first by spliting into array, sorting characters, and rejoining
    s = s.split("").sort().join("");
    
    for (let i = 0; i <s.length-1; i++)
        // no character should be the same as the one before/after it
        if(s.charAt(i) === s.charAt(i+1)) return false;


    return true;
}

module.exports = {
    isUniqueInPlace,
    isUnique
}