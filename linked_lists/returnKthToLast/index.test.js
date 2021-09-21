let lib = require("../node.js");
let methods = require("./index");


let test1 = (func) => {
    let example = lib.createList([1, 2, 3, 4, 5, 6, 7, 8])
    let kth = func(example, 2);
    return kth ? kth.data : null;
}

let test2 = (func) => {
    let example = lib.createList([1, 2, 3, 4, 5, 6, 7, 8])
    let kth = func(example, 1);
    return kth ? kth.data : null;
}

let test3 = (func) => {
    let example = lib.createList([1, 2, 3, 4, 5, 6, 7, 8])
    let kth = func(example, 3);
    return kth ? kth.data : null;
}

let test4 = (func) => {
    let example = lib.createList([1, 2, 3, 4, 5, 6, 7, 8])
    let kth = func(example, 8);
    return kth ? kth.data : null;
}

let test5 = (func) => {
    let example = lib.createList([1, 2, 3, 4, 5, 6, 7, 8])
    let kth = func(example, 10);
    return kth ? kth.data : null;
}

let test6 = (func) => {
    let example = lib.createList([1, 2, 3, 4, 5, 6, 7, 8])
    let kth = func(example, 0);
    return kth ? kth.data : null;
}

let test7 = (func) => {
    let example = lib.createList([1, 2, 3, 4, 5, 7, 7, 8])
    let kth = func(example, 3);
    return kth ? kth.data : null;
}

test("ex1:", () => {
    expect(test1(methods.naive)).toBe(7);
})

test("ex2:", () => {
    expect(test2(methods.naive)).toBe(8);
})

test("ex3:", () => {
    expect(test3(methods.naive)).toBe(6);
})

test("ex4:", () => {
    expect(test4(methods.naive)).toBe(1);
})

test("ex5:", () => {
    expect(test5(methods.naive)).toBe(null);
})

test("ex6:", () => {
    expect(test6(methods.naive)).toBe(null);
})

test("ex7:", () => {
    expect(test7(methods.naive)).toBe(7);
})