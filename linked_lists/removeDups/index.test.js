let lib = require("../node.js");
let methods = require("./index");


let test1 = (func) => {
    let example = lib.createList([10, 22, 4, 10, 10, 7, 4])
    func(example);
    return example.toString();
}

let test2 = (func) => {
    let example = lib.createList([])
    func(example);
    return example.toString();
}

let test3 = (func) => {
    let example = lib.createList([1, 2, 3, 4])
    func(example);
    return example.toString();
}

let test4 = (func) => {
    let example = lib.createList([1, 2, 2, 3, 2, 4])
    func(example);
    return example.toString();
}


test("ex1:", () => {
    expect(test1(methods.remove)).toBe("10 => 22 => 4 => 7 => EOL");
})

test("ex1 in place:", () => {
    expect(test1(methods.removeInPlace)).toBe("10 => 22 => 4 => 7 => EOL");
})

test("ex2:", () => {
    expect(test2(methods.remove)).toBe("EOL");
})

test("ex2 in place:", () => {
    expect(test2(methods.removeInPlace)).toBe("EOL");
})


test("ex3:", () => {
    expect(test3(methods.remove)).toBe("1 => 2 => 3 => 4 => EOL");
})

test("ex3 in place:", () => {
    expect(test3(methods.removeInPlace)).toBe("1 => 2 => 3 => 4 => EOL");
})

test("ex4:", () => {
    expect(test4(methods.remove)).toBe("1 => 2 => 3 => 4 => EOL");
})

test("ex4 in place:", () => {
    expect(test4(methods.removeInPlace)).toBe("1 => 2 => 3 => 4 => EOL");
})

