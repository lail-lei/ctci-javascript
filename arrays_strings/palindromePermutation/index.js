/**
 * Palindrome Permutation: Given a string, write a function to check 
 * if it is a permutation of a palin­drome. 
 * 
 * A palindrome is a word or phrase that is the same forwards and backwards. 
 * A permutation is a rearrangement of letters. 
 * The palindrome does not need to be limited to just dictionary words.
 */


// My assumption is that spaces are not counted as characters
// assuming no special characters, and strings are lower cased
// if spaces do count, remove code at line 16 and should still work

function palindromePermutation (s) {

    s = s.replace(/ /g, ""); // remove spaces

    let map = {};

    // count frequencies
    for (let i = 0; i < s.length; i++)
        if(map[s.charAt(i)]) map[s.charAt(i)]++;
        else map[s.charAt(i)] = 1;

    // if a palindrome length is odd, it can only have 1
    // character that occurs an odd number of times
    
    // if a palindrome length is even, it cannot have 
    // any characters that occur an odd number of times
    let numAllowedOddFrequency = s.length % 2 === 0 ? 0 : 1;

    for (let character in map)
        // check if character freqeuncy is even or odd
        if(map[character] % 2 !== 0)
            // if frequency is odd and we still haven't encountered 
            // an odd frequency, record that we have encountered an odd frequency
            if (numAllowedOddFrequency) numAllowedOddFrequency--;
            // either string length is even or odd string has multiple
            // characters with odd frequency. not a palindrome
            else return false;
        
    
    // meets requirements
    return true;
    
}


module.exports={
    palindromePermutation
}