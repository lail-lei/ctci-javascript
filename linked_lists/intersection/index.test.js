let lib = require("../node.js");
let methods = require("./index.js")



const test1 = (func) => {
    let list1 = lib.createList([0, 1, 2, 3]) 
    let list2 = lib.createList([5, 0, 3])
    list2.tail.next = list1.head.next.next;
    list2.tail = list1.tail; 
    let result = func(list1, list2);
    return  result ? result.toString() : "null"
}

const test2 = (func) => {
    let list1 = lib.createList([]) 
    let list2 = lib.createList([5, 0, 3])
    let result = func(list1, list2);
    return  result ? result.toString() : "null"
}

const test3 = (func) => {
    let list1 = lib.createList([]) 
    let list2 = lib.createList([])
    let result = func(list1, list2);
    return  result ? result.toString() : "null"
}


const test4 = (func) => {
    let list1 = lib.createList([1, 2, 3, 4]) 
    let list2 = lib.createList([1, 2, 3, 4])
    let result = func(list1, list2);
    return  result ? result.toString() : "null"
}

const test5 = (func) => {
    let list1 = lib.createList([0, 1, 2, 3]) 
    let list2 = lib.createList([5, 0, 3])
    list2.tail.next = list1.head;
    list2.tail = list1.tail; 
    let result = func(list1, list2);
    return  result ? result.toString() : "null"
}



test("ex1:", () => {
    expect(test1(methods.intersection)).toBe("data: 2, next: 3");
})

test("ex2: 1 empty:", () => {
    expect(test2(methods.intersection)).toBe("null");
})

test("ex3: 2 empty:", () => {
    expect(test3(methods.intersection)).toBe("null");
})

test("ex4: 2 separate lists:", () => {
    expect(test4(methods.intersection)).toBe("null");
})

test("ex5: 2 combined lists:", () => {
    expect(test5(methods.intersection)).toBe("data: 0, next: 1");
})