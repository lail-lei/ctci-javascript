// Zero Matrix: 
// Write an algorithm such that if an element in an MxN matrix is 0, 
// its entire row and column are set to 0.


function zeroMatrix (matrix){

    let rows = new Array(matrix.length).fill(0);
    let columns = new Array(matrix[0].length).fill(0); // assuming not a ragged matrix M*N
    
    for(let r = 0; r < matrix.length; r++)
        for(let c = 0; c < matrix[r].length; c++){
            if(matrix[r][c] === 0) {
                rows[r] = 1;
                columns[c] = 1;
            }

        }
    
    for (let r = 0; r < rows.length; r++)
        if(rows[r] === 1) setRowZero(r, matrix);
    

    for (let c = 0; c < columns.length; c++)
        if(columns[c] === 1) setColumnZero(c, matrix);

  
    return matrix;
    
}


function setRowZero (r, matrix){
    for(let c = 0; c < matrix[r].length; c++)
        matrix[r][c] = 0;  
}

function setColumnZero (c, matrix){
    for(let r = 0; r < matrix.length; r++)
        matrix[r][c] = 0;  
}



module.exports = {

    zeroMatrix,

}