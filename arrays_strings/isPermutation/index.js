/** Check Permutation: Given two strings, 
 * write a method to decide if one is a permutation of the other. **/


// Permutation Defintition
// Both strings contain the same letters at the same frequency
// A string does not contain letters not found in the other string. 
// both strings cannot be different lengths 
// assumption a and b are lowercased

// Time O(a + b)
// since a and b are same length, n
// Time  = O(n)
function permutationChecker (a, b){

    if (a.length !== b.length) return false;

    let map = {};
    // put all characters of a into a hashmap to get frequencies
    for(let i = 0; i < a.length; i++)
        if(map[a.charAt(i)]) map[a.charAt(i)]++
        else map[a.charAt(i)] = 1;
    
    // iterate over all characters in b to see if common character with a
    for (let i = 0; i < b.length; i++)
    {
        // if key exists in map, "match" b's version of character with one of a's version of character
        if(map.hasOwnProperty(b.charAt(i))) map[b.charAt(i)]--;

        else return false; // encountered a character in b that's not in a
    }

    // all letters in a should have been matched to b, which should mean all frequencies in map are at 0
    // if leftovers, return false.
    for (let character in map)
        if (Math.abs(map[character]) > 0) return false; 
    

    return true;
   
}

// Time O(n log n + n) 
function permutationCheckerInPlace (a, b){

    if (a.length !== b.length) return false;

    // first, sort each string
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    // if permuation, should be identical
    // now check to make sure each sorted string has same letter at same index
    for(let i = 0; i< a.length; i++){
        if(a.charAt(i) !== b.charAt(i)) return false;
    }

    return true;
   
}

module.exports = {
    permutationChecker,
    permutationCheckerInPlace
}