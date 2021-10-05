let methods = require("./index");

let test1 = (func) => {
    let a = [0, 1, 2, 3, 4, 5, 6, 7]
    let b = [2, 4, 6, 8, 10]
    return func(a, b);
}

let test2 = (func) => {
    let a = [1, 3, 5, 7, 9]
    let b = [2, 4, 6, 8, 10]
    return func(a, b)
}

let test3 = (func) => {
    let a = [0]
    let b = [0]
    return func(a, b);
}

let test4 = (func) => {
    let a = []
    let b = []
    return func(a, b);
}

let test5 = (func) => {
    let a = [22, 33, 44, 55, 66, 77, 88 ]
    let b = [0, 101]
    return func(a, b);
}

let test6 = (func) => {
    let a = [22, 33, 44, 55, 66, 77, 88 ]
    let b = [99, 111, 222, 333]
    return func(a, b);
}


let test7 = (func) => {
    let a = [22, 33]
    let b = [23]
    return func(a, b);
}

test("ex1:", () => {
    expect(test1(methods.sortedMerge)).toStrictEqual([0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 10]);
}) 

test("ex1, non mutating:", () => {
    expect(test1(methods.sortedMergeNonMutating)).toStrictEqual([0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 10]);
})

test("ex2:", () => {
    expect(test2(methods.sortedMerge)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}) 

test("ex2, non mutating:", () => {
    expect(test2(methods.sortedMergeNonMutating)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
})

test("ex3:", () => {
    expect(test3(methods.sortedMerge)).toStrictEqual([0,0]);
}) 

test("ex3, non mutating:", () => {
    expect(test3(methods.sortedMergeNonMutating)).toStrictEqual([0,0]);
})

test("ex4:", () => {
    expect(test4(methods.sortedMerge)).toStrictEqual([]);
}) 

test("ex4, non mutating:", () => {
    expect(test4(methods.sortedMergeNonMutating)).toStrictEqual([]);
})

test("ex5:", () => {
    expect(test5(methods.sortedMerge)).toStrictEqual([0, 22, 33, 44, 55, 66, 77, 88, 101]);
}) 

test("ex5 non mutating:", () => {
    expect(test5(methods.sortedMergeNonMutating)).toStrictEqual([0, 22, 33, 44, 55, 66, 77, 88, 101]);
})

test("ex6:", () => {
    expect(test6(methods.sortedMerge)).toStrictEqual([22, 33, 44, 55, 66, 77, 88, 99, 111, 222, 333]);
}) 

test("ex6 non mutating:", () => {
    expect(test6(methods.sortedMergeNonMutating)).toStrictEqual([22, 33, 44, 55, 66, 77, 88, 99, 111, 222, 333]);
})

test("ex7:", () => {
    expect(test7(methods.sortedMerge)).toStrictEqual([22, 23, 33]);
}) 

test("ex7 non mutating:", () => {
    expect(test7(methods.sortedMergeNonMutating)).toStrictEqual([22, 23, 33]);
})