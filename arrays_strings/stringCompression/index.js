// String Compression: Implement a method to 
// perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2blc5a3. 
// If the "compressed" string would not become smaller than the original string, 
// your method should return the original string. 
// You can assume the string has only uppercase and lowercase letters (a - z).


function compress (s1){

    let currentCount = 1;  // init to first letter
    let compressed = "".concat(s1.charAt(0)); // init to first letter
    let characters = s1.split(""); // not sure the big O of charat, so lets convert to character array

    for (let i = 1; i< characters.length; i++){
        if(characters[i] === characters[i-1])
            currentCount++;
        else{
            compressed += currentCount + characters[i];
            currentCount = 1;
        }
    }

    // handle end of string
    compressed += currentCount;

    if(compressed.length < s1.length) return compressed;
    return s1;
}

module.exports={
    compress
}