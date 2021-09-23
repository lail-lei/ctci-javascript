let lib = require("../node.js");
let methods = require("./index.js")



const test1 = (func) => {
    let list = lib.createList(["A", "B", "C", "D", "E"])
    list.tail.next = list.head.next.next;
    list.tail = list.head.next.next;
    list.size++;
    let result = func(list);
    return  result ? result.toString() : "null"
}

const test2 = (func) => {
    let list = lib.createList(["A", "B", "C", "D", "E"])
    list.tail.next = list.head;
    list.tail = list.head;
    list.size++;
    let result = func(list);
    return  result ? result.toString() : "null"
}



const test3 = (func) => {
    let list = lib.createList([])
    let result = func(list);
    return  result ? result.toString() : "null"
}


const test4 = (func) => {
    let list = lib.createList([1, 2, 3, 4])
    let result = func(list);
    return  result ? result.toString() : "null"
}

const test5 = (func) => {
    let list = lib.createList(["A", "B", "C", "D", "E"])
    list.tail.next = list.tail;
    list.tail = list.tail;
    list.size++;
    let result = func(list);
    return  result ? result.toString() : "null"
}




test("cycle in middle", () => {
    expect(test1(methods.detectLoopNaive)).toBe("data: C, next: D");
})

test("cycle in middle", () => {
    expect(test1(methods.floydsAlgorithm)).toBe("data: C, next: D");
})
test("cycle from head:", () => {
    expect(test2(methods.detectLoopNaive)).toBe("data: A, next: B");
})
test("cycle from head:", () => {
    expect(test2(methods.floydsAlgorithm)).toBe("data: A, next: B");
})

test("empty:", () => {
    expect(test3(methods.detectLoopNaive)).toBe("null");
})
test("empty:", () => {
    expect(test3(methods.floydsAlgorithm)).toBe("null");
})

test("no cycle:", () => {
    expect(test4(methods.detectLoopNaive)).toBe("null");
})

test("no cycle:", () => {
    expect(test4(methods.floydsAlgorithm)).toBe("null");
})

test("cycle from tail:", () => {
    expect(test5(methods.detectLoopNaive)).toBe("data: E, next: E");
})

test("cycle from tail:", () => {
    expect(test5(methods.floydsAlgorithm)).toBe("data: E, next: E");
})