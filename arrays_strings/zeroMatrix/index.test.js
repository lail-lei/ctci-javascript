
// public void withThreeTree() {
//     assertTrue(Arrays.deepEquals(
//             new int[][]{
//                     {1, 0, 3},
//                     {0, 0, 0},
//                     {7, 0, 9}}, new _01_08_ZeroMatrix().zero(
//                     new int[][]{
//                             {1, 2, 3},
//                             {4, 0, 6},
//                             {7, 8, 9}})));
// }


let matrix = [[1, 2, 3],    
              [4, 0, 6], 
              [7, 8, 9]
            ]

let matrixResult = [[1, 0, 3],    
                    [0, 0, 0], 
                    [7, 0, 9]
                    ]

let matrix3x4 = [[1, 2, 3, 12],    
                 [4, 0, 6, 11], 
                  [7, 8, 9, 0]
                ]

let matrixResult3x4 = [[1, 0, 3, 0],
                       [0, 0, 0, 0],
                       [0, 0, 0, 0]]
      

let zeroMatrix = require("./index");

test("3x3:", () => {
    expect(zeroMatrix.zeroMatrix(matrix)).toStrictEqual(matrixResult);
})

test("3x4:", () => {
    expect(zeroMatrix.zeroMatrix(matrix3x4)).toStrictEqual(matrixResult3x4);
})

