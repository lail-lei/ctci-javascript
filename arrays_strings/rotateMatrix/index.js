
// Rotate Matrix:
//  Given an image represented by an NxN matrix, 
//  where each pixel in the image is 4 bytes, 
// write a method to rotate the image by 90 degrees. Can you do this in place?



function rotate (matrix) {

    const n = matrix.length;
    const rotated = new Array(n).fill(null).map(() => Array(n).fill(0));

    for (let c = 0; c < n; c++){
       let current_row = n - 1 - c;
       for (let r = 0; r < n; r++){
            rotated[current_row][r] = matrix[r][c];
       }
    }
    return rotated;
}


function rotateInPlace (matrix) {

    const n = matrix.length;
    // first, swap across the vertical 
    verticalSwap(matrix);
  
    // then swap across the diagnonal
    diagonalSwap(matrix)

    return matrix;
}


function verticalSwap (matrix) {

    for(let r = 0;  r < matrix.length; r++)
        for (let c = 0; c < Math.floor(matrix.length/2); c++)
        {
            let temp = matrix[r][c];
            matrix[r][c] = matrix[r][matrix.length - c -1];
            matrix[r][matrix.length-c-1] = temp;
        }
}

function diagonalSwap (matrix) {

    for (let r = 0; r < matrix.length; r++)
        for(let c = r+1; c < matrix.length; c++){
           let temp =  matrix[r][c];
           matrix[r][c] = matrix[c][r];
           matrix[c][r] = temp;
        }
}

module.exports = {
    rotate,
    rotateInPlace
}




