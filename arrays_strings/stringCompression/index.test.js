
let stringCompression = require("./index");




test("tiny: a", () => {
    expect(stringCompression.compress("a")).toBe("a");
})

test("tiny: aa", () => {
    expect(stringCompression.compress("aa")).toBe("aa");
})

test("tiny: aaa", () => {
    expect(stringCompression.compress("aaa")).toBe("a3");
})

test("tiny: aaab", () => {
    expect(stringCompression.compress("aaab")).toBe("aaab");
})

test("tiny: aaab", () => {
    expect(stringCompression.compress("aaabb")).toBe("a3b2");
})

test("tiny: aaabbaa", () => {
    expect(stringCompression.compress("aaabbaa")).toBe("a3b2a2");
})

test("book: aaab", () => {
    expect(stringCompression.compress("aabcccccaaa")).toBe("a2b1c5a3");
})


