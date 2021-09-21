let lib = require("../node.js");
let methods = require("./index");

let test1 = (func) => {
    let example = lib.createList([3, 5, 8, 5, 10, 2, 1])
    func(example, 5);
    return example.toString();
}

let test2 = (func) => {
    let example = lib.createList([4, 3, 1, 2, 5])
    func(example, 4);
    return example.toString();
}

let test3 = (func) => {
    let example = lib.createList([5, 3, 4, 7, 6, 1, 8])
    func(example, 5);
    return example.toString();
}

let test4 = (func) => {
    let example = lib.createList([5, 3, 4, 7, 6, 1, 8])
    func(example, 2);
    return example.toString();
}

let test5 = (func) => {
    let example = lib.createList([5, 3, 4, 7, 6, 1, 8])
    func(example, 7);
    return example.toString();
}

test("ex1:", () => {
    expect(test1(methods.partition)).toBe("3 => 2 => 1 => 5 => 8 => 5 => 10 => EOL");
})

test("ex2:", () => {
    expect(test2(methods.partition)).toBe("3 => 1 => 2 => 5 => 4 => EOL");
})
test("ex3:", () => {
    expect(test3(methods.partition)).toBe("3 => 4 => 1 => 8 => 5 => 7 => 6 => EOL");
})

test("ex4:", () => {
    expect(test4(methods.partition)).toBe("1 => 8 => 5 => 3 => 4 => 7 => 6 => EOL");
})

test("ex5:", () => {
    expect(test5(methods.partition)).toBe("5 => 3 => 4 => 6 => 1 => 8 => 7 => EOL");
})