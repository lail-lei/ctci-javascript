/**
 * Group Anagrams: Write a method to sort an array of
 * strings so that all the anagrams are next to each other.
 */

// Approach 1: sort all strings, 
// then sort the array of strings
// O(nlogn)
function groupAnagramsNaive (strings)  {
    let sortedStrings = strings.map((element) => {return sortString(element)});
    return [...sortedStrings].sort((a, b) => a.localeCompare(b));
}

// for simplicity, let's use built-in sort 
function sortString(str) {
    // make copy of str
    return [...str].sort((a, b) => a.localeCompare(b)).join("");
}


// Approach 2: sort all strings, 
// then hash the elements by sorted value
function groupAnagramsHashed (strings)  {

    let hashed = strings.reduce((accum, element) => {

        let key = sortString(element);

        // if encountered the anagram, push onto list
        if (accum[key]) accum[key].push(element);
        
        else accum[key] = [element];

        return accum;

    }, {})

    return Object.values(hashed).flat();

}

// for simplicity, let's use built-in sort 
function sortString(str) {
    // make copy of str
    return [...str].sort((a, b) => a.localeCompare(b)).join("");
}


console.log(groupAnagramsHashed(["hello", "world", "olelh"]))