
// Rotate Matrix:
//  Given an image represented by an NxN matrix, 
//  where each pixel in the image is 4 bytes, 
// write a method to rotate the image by 90 degrees. Can you do this in place?


let matrix = [[7, 4, 1],    
              [8, 5, 2], 
              [9, 6, 3]
            ]

let matrixInPlace = [[7, 4, 1],    
            [8, 5, 2], 
            [9, 6, 3]
        ]
let matrixRotated = [[1, 2, 3],    
                     [4, 5, 6], 
                     [7, 8, 9]
                    ]

let matrix5 = [[1, 2, 3, 4, 5],
               [6, 7, 8, 9, 10],
               [11, 12, 13, 14, 15],
               [16, 17, 18, 19, 20],
               [21, 22, 23, 24, 25]
            ]
let matrix5InPlace = [[1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]
         ]
let matrix5Rotated = [[5, 10, 15, 20, 25],
                      [4, 9, 14, 19, 24],
                      [3, 8, 13, 18, 23],
                      [2, 7, 12, 17, 22],
                      [1, 6, 11, 16, 21]
            ]
let matrix6 = [[1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18],
            [19, 20, 21, 22, 23, 24],
            [25, 26, 27, 28, 29, 30],
            [31, 32, 33, 34, 35, 36]
         ]
let matrix6InPlace = [[1, 2, 3, 4, 5, 6],
         [7, 8, 9, 10, 11, 12],
         [13, 14, 15, 16, 17, 18],
         [19, 20, 21, 22, 23, 24],
         [25, 26, 27, 28, 29, 30],
         [31, 32, 33, 34, 35, 36]
      ]

let matrix6Rotated = [
         [6, 12, 18, 24, 30, 36],
         [5, 11, 17, 23, 29, 35],
         [4, 10, 16, 22, 28, 34],
         [3, 9, 15, 21, 27, 33],
         [2, 8, 14, 20, 26, 32],
         [1, 7, 13, 19, 25, 31]
        ]

let matrix4 = [[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16]
      ]
let matrix4InPlace = [  [1, 2, 3, 4],
                        [ 5, 6, 7, 8],
                        [9, 10, 11, 12],
                        [13, 14, 15, 16] ]

let matrix4Rotated = [[4, 8, 12, 16],
                      [3, 7, 11, 15],
                      [2, 6, 10, 14],
                      [1, 5, 9, 13]
      ]



let rotateMatrix90 = require("./index");

test("tiny:", () => {
    expect(rotateMatrix90.rotate(matrix)).toStrictEqual(matrixRotated);
})
test("tiny:", () => {
    expect(rotateMatrix90.rotateInPlace(matrixInPlace)).toStrictEqual(matrixRotated);
})

test("small:", () => {
    expect(rotateMatrix90.rotate(matrix4)).toStrictEqual(matrix4Rotated);
})
      
test("small:", () => {
    expect(rotateMatrix90.rotateInPlace(matrix4InPlace)).toStrictEqual(matrix4Rotated);
})


test("5:", () => {
    expect(rotateMatrix90.rotateInPlace(matrix5InPlace)).toStrictEqual(matrix5Rotated);
})
test("5:", () => {
    expect(rotateMatrix90.rotate(matrix5)).toStrictEqual(matrix5Rotated);
})
test("6:", () => {
    expect(rotateMatrix90.rotateInPlace(matrix6InPlace)).toStrictEqual(matrix6Rotated);
})
test("6:", () => {
    expect(rotateMatrix90.rotate(matrix6)).toStrictEqual(matrix6Rotated);
})