let lib = require("../node.js");
let methods = require("./index");

let test1 = (func) => {
    let example = lib.createList([1, 2, 3, 4])
    let toDelete = example.head.next.next;
    func(toDelete, example);
    return example.toString();
}

let test2 = (func) => {
    let example = lib.createList([1, 2, 3, 4, 5, 6, 7])
    let toDelete = example.head.next.next.next.next;
    func(toDelete, example);
    return example.toString();
}

let test3 = (func) => {
    let example = lib.createList([1, 5, 9, 12])
    let toDelete = example.head.next.next;
    func(toDelete, example);
    return example.toString();
}

test("ex1:", () => {
    expect(test1(methods.deleteNode)).toBe("1 => 2 => 4 => EOL");
})

test("ex1:", () => {
    expect(test1(methods.deleteData)).toBe("1 => 2 => 4 => EOL");
})

test("ex2:", () => {
    expect(test2(methods.deleteNode)).toBe("1 => 2 => 3 => 4 => 6 => 7 => EOL");
})

test("ex2:", () => {
    expect(test2(methods.deleteData)).toBe("1 => 2 => 3 => 4 => 6 => 7 => EOL");
})

test("ex3:", () => {
    expect(test3(methods.deleteData)).toBe("1 => 5 => 12 => EOL");
})
test("ex3:", () => {
    expect(test3(methods.deleteNode)).toBe("1 => 5 => 12 => EOL");
})