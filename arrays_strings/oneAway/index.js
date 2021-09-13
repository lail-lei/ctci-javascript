/**
 * One Away: There are three types of edits that can be performed on 
 * strings: insert a character, remove a character, or replace a character. 
 * Given two strings, write a function to check if they are one edit (or zero edits) away.
 */


function oneAway (s1, s2){

    if(s1 === s2) return true;

    let distance = levenshteinDistanceDP(s1, s2);
    return distance <= 1;  
}


// token1 = "hello", token2 = "world"
function levenshteinDistanceDP (token1, token2){

        
        const rows = token1.length + 1;
        const columns = token2.length + 1;

        // lets create a matrix to hold our values
        const matrix = new Array(rows).fill(null).map(() => Array(columns).fill(0));
        // now we init the first row to equal 0 1 2 3 .... rows
        // these values are derived from the number of operations it would take 
        // each substring from "", "h", "he", ..... "hello" to match ""
        for (let i = 0; i < columns; i++)
            matrix[0][i] = i;

        // and the first column to equal 0 1 2 3 .... columns
        // these values are derived from the number of operations it would take 
        // each substring from "", "w", "wo", ..... "world" to match ""
        for (let i = 0; i < columns; i++)
            matrix[0][i] = i;
        

        // our operations can only be operations can only be insert, replace or delete
        // 0: subtrings "" and "" match, so no operation is taken 
        // 1: substrings "h" and "w" require 1 deletion each (h => "" and w => "")
        // 2: substrings "he" and "wo" require 2 deletions each  ("he" => "" and "wo" => "")
        // 3: substrings "hel" and "wor" require 3 deletions each ("hel" => "" and "wor" =>"")


        // iterate through each cell
        // start at 1,1
        for (let r = 1; r < rows; r++) {
            for (let c = 1; c < columns; c++){

                    // CASE 1 : the index being checked contains the same letter
                    // "bread" "boy"
                    // "b" === "b"
                    // get value in top left corner (no change in edit distance since previous letter)
                    // i - 1 because we have extra space in front "" empty string
                    if(token1.charAt(r-1) === token2.charAt(c -1)) matrix[r][c] = matrix[r-1][c-1];


                    // CASE 2 : the index being checked does not contains the same letter
                    // "hello" "world"
                    // "h" !== "w"
                    
                    // get minimum value in 2 by 2 neighborhood and add 1
                    else {
                        let above = matrix[r-1][c];
                        let next = matrix[r][c-1];
                        let topLeft = matrix[r-1][c-1];

                        if(above <= next && above <= topLeft) 
                            matrix[r][c] = above+1;
                        
                        else if (next <= above && next <= topLeft)
                            matrix[r][c] = next+1;
                        
                        else 
                            matrix[r][c] = topLeft+1;
                    }

            }
        }

        return matrix[rows-1][columns-1]; // this is total distance for both whole words 
}


module.exports = {
    oneAway, 
}