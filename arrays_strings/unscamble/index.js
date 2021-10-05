
// problem taken from here: https://www.youtube.com/watch?v=BpGh-fKRYiQ

// O((a * lg(a))  + w * (a * a))  or O(a*lga + w*a^2)  or O(w * a^2)
// for sorting where a = len of anagram, where words is number 
// of words that are anagrams of anagram
function unscramble (scrambled, words) {

    // can we assume the structure of the words map contains 
    // sorted anagram as key, and list of possible words as value
    // if not, i would quickly reorganize map to follow that pattern 


    // first things that came to mind:
    // use dynamic programming to find edit distance 
    // between a word and potential words this seems like it might be overkill as only step
    // would have to compare anagram to every single possible word in 
    // the list of words 

    // but might be useful to do later once we narrow down possible anagrams

    // step 1, sort the scrambled word
    let sorted = [...scrambled].sort((a, b) => {return a.localeCompare(b)})


    // check possible words map for list of words that contain all 
    // letters in sorted word
    if(!words[sorted] || words[sorted].length === 0) return null; // no recommendations exist for these letters

    if(words[sorted].length === 1) return words[sorted][0]; // this is only possible word 
    
    // now this will be an object (called recs for recommendations) that will 
    // contain possible words and the "confidence score" for each word
    // how close the the word is to the scrambled word
    let recs = words[sorted].reduce((accum, element) => {
            accum[element] = getEditDistance (scrambled, element);
            return accum;
    }, {})


    // since we are returning the most likely word we return th
    return getMaxConfidenceWord(recs);

}

// this can be written more neatly 
// lowest edit distance == highest confidence
function getMaxConfidenceWord (recs) {

    let min = Number.MAX_VALUE; 
    let recommendedWord = "";

    for(let word in recs){
        if(recs[word] < min){
            min = recs[word];
            recommendedWord = word;
        } 
    }

    return recommendedWord;
}


function getEditDistance (token1, token2) {

    // since they are anagrams, these will be same length 
    let len1 = token1.length + 1; 
    let len2 = token2.length + 1;

    // this creates our matrix
    let matrix = new Array(len1).fill(null).map(() => {return new Array(len2).fill(0)});

    // init first column all with 0-len
    for(let r = 0; r < len1; r++)
        matrix[r][0] = r;

    // init first row with all 0 
    for (let c = 0; c < len2; c++)
        matrix[0][c] = c;

    for(let r = 1; r < len1; r++){
        for (let c = 1; c < len2; c++){
        
            // if the characters are the same, get top left corner
            if(token1.charAt(r-1) === token2.charAt(c-1))
                matrix[r][c] = matrix[r-1][c-1];
            
            else{
                // find the minimum value of either the top, 
                // the top left, or the left value

                let top = matrix[r-1][c];
                let topleft = matrix[r-1][c-1];
                let left = matrix[r][c-1];

                if(top <= topleft && top <= left) 
                    matrix[r][c] = top+1;
                if(topleft <= top && topleft <= left) 
                    matrix[r][c] = topleft+1;
                else 
                    matrix[r][c] = left+1;

            }

        }
    }

    // this will return the minimum edit distance between each word
    return matrix[len1-1][len2-1];

}