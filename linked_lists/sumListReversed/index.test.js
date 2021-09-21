let lib = require("../node.js");
let methods = require("./index");



let test0 = (func) => {
    let num1 = lib.createList([])
    let num2 = lib.createList([])
    return func(num1, num2).toString();
}

let test1 = (func) => {
    let num1 = lib.createList([6, 1, 7])
    let num2 = lib.createList([2, 9, 5])
    return func(num1, num2).toString();
}

let test2 = (func) => {
    let num1 = lib.createList([])
    let num2 = lib.createList([1, 2, 3])
    return func(num1, num2).toString();
}

let test3 = (func) => {
    let num1 = lib.createList([1, 2, 3])
    let num2 = lib.createList([1, 2, 3])
    return func(num1, num2).toString();
}


let test4 = (func) => {
    let num1 = lib.createList([3, 8, 1])
    let num2 = lib.createList([2, 5, 3])
    return func(num1, num2).toString();
}

let test5 = (func) => {
    let num1 = lib.createList([9, 8, 1])
    let num2 = lib.createList([2, 5, 9])
    return func(num1, num2).toString();
}

let test6 = (func) => {
    let num1 = lib.createList([1])
    let num2 = lib.createList([2, 5])
    return func(num1, num2).toString();
}

test("ex0:", () => {
    expect(test0(methods.sumLists)).toBe("EOL");
})


test("ex1:", () => {
    expect(test1(methods.sumLists)).toBe("9 => 1 => 2 => EOL");
})

test("ex2:", () => {
    expect(test2(methods.sumLists)).toBe("1 => 2 => 3 => EOL");
})


test("ex3:", () => {
    expect(test3(methods.sumLists)).toBe("2 => 4 => 6 => EOL");
})


test("ex4:", () => {
    expect(test4(methods.sumLists)).toBe("6 => 3 => 4 => EOL");
})

test("ex5:", () => {
    expect(test5(methods.sumLists)).toBe("1 => 2 => 4 => 0 => EOL");
})
test("ex6:", () => {
    expect(test6(methods.sumLists)).toBe("2 => 6 => EOL");
})