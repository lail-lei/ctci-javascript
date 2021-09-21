
// A string is said to be a child of a another string if it can be formed by
//  deleting 0 or more characters from the other string. 
// Letters cannot be rearranged. Given two strings of equal length, 
// what's the longest string that can be constructed such that it is a child of both?

function commonChild(s1, s2) {
  
    // string lengths +1 space for empty string
    let len1 = s1.length+1;
    let len2 = s2.length+1;
    // common sequence problem
    
    let matrix = new Array(len1).fill(null).map(() => {return new Array(len2).fill(0)});
    
    // first row and column represent "" and "" (empty strings)
    // all values are 0;
    
    // index of first string (horizontal)
    for(let i1 = 1; i1 < len1; i1++)
    {
        // index for second string (vertical)
        for(let i2 = 1; i2 < len2; i2++)
        {
            // if current character is same, can add 1 to common seq length
            // -1 because string 0 indexed and doesnt include space for "" string
            if(s1.charAt(i1 - 1) === s2.charAt(i2 - 1))
                  matrix[i1][i2] = matrix[i1 - 1][i2-1] + 1;
            
            // find max(csl(i2, i1-current),  csl(i2-current, i1)
            // essentially : "harr" and "sall" 
            // comparing "har" and "sall" 
            // and "harr" and "sal" for largest possible subsequence
            else{
                let cutI1 = matrix[i1][i2-1];
                let cutI2 = matrix[i1-1][i2];
                matrix[i1][i2] = Math.max(cutI1, cutI2)
            }
               
        }
    }
    
      return matrix[s1.length][s2.length];
  }