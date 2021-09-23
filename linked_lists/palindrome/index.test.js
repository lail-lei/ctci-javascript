 
let lib = require("../node.js");
let methods = require("./index.js")


const test1 = (func) => {
    let list = lib.createList([0, 1, 2, 3]) // false
    return func(list);
}

const test2 = (func) => {
    let list = lib.createList([0, 2, 1, 2, 0]) // true
    return func(list);
}

const test3 = (func) => {
    let list = lib.createList([0, 1, 0]) // true
    return func(list);
}

const test4 = (func) => {
    let list = lib.createList([0, 0, 0, 0]) // true
    return func(list);
}

const test5 = (func) => {
    let list = lib.createList([]) // true
    return func(list);
}

const test6 = (func) => {
    let list = lib.createList([1]) // true
    return func(list);
}

const test7 = (func) => {
    let list = lib.createList([1, 2, 3, 2, 5]) // false
    return func(list);
}

test("ex1: naive", () => {
    expect(test1(methods.isPalindromeNaive)).toBe(false);
})
test("ex1: half-stack", () => {
    expect(test1(methods.isPalindromeHalfStack)).toBe(false);
})
test("ex1: recursive", () => {
    expect(test1(methods.isPalindrome)).toBe(false);
})


test("ex2: naive", () => {
    expect(test2(methods.isPalindromeNaive)).toBe(true);
})
test("ex2: half-stack", () => {
    expect(test2(methods.isPalindromeHalfStack)).toBe(true);
})
test("ex2: recursive", () => {
    expect(test2(methods.isPalindrome)).toBe(true);
})

test("ex3: naive", () => {
    expect(test3(methods.isPalindromeNaive)).toBe(true);
})
test("ex3: half-stack", () => {
    expect(test3(methods.isPalindromeHalfStack)).toBe(true);
})
test("ex3: recursive", () => {
    expect(test3(methods.isPalindrome)).toBe(true);
})

test("ex4: naive", () => {
    expect(test4(methods.isPalindromeNaive)).toBe(true);
})
test("ex4: half-stack", () => {
    expect(test4(methods.isPalindromeHalfStack)).toBe(true);
})
test("ex4: recursive", () => {
    expect(test4(methods.isPalindrome)).toBe(true);
})

test("ex5: naive", () => {
    expect(test5(methods.isPalindromeNaive)).toBe(true);
})
test("ex5: half-stack", () => {
    expect(test5(methods.isPalindromeHalfStack)).toBe(true);
})
test("ex5: recursive", () => {
    expect(test5(methods.isPalindrome)).toBe(true);
})

test("ex6: naive", () => {
    expect(test6(methods.isPalindromeNaive)).toBe(true);
})
test("ex6: half-stack", () => {
    expect(test6(methods.isPalindromeHalfStack)).toBe(true);
})
test("ex6: recursive", () => {
    expect(test6(methods.isPalindrome)).toBe(true);
})


test("ex7: naive", () => {
    expect(test7(methods.isPalindromeNaive)).toBe(false);
})
test("ex7: half-stack", () => {
    expect(test7(methods.isPalindromeHalfStack)).toBe(false);
})
test("ex7: recursive", () => {
    expect(test7(methods.isPalindrome)).toBe(false);
})