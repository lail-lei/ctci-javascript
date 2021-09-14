


let stringRotation = require("./index");


test("waterbottle, erbottlewat", () => {
    expect(stringRotation.stringRotation("waterbottle", "erbottlewat")).toBe(true);
})

test("waterbottle, ttlewaterbo", () => {
    expect(stringRotation.stringRotation("waterbottle", "ttlewaterbo")).toBe(true);
})

test("hello, hello", () => {
    expect(stringRotation.stringRotation("hello", "hello")).toBe(true);
})

test("hello, llohe", () => {
    expect(stringRotation.stringRotation("hello", "llohe")).toBe(true);
})

test("hello, llo", () => {
    expect(stringRotation.stringRotation("hello", "llo")).toBe(false);
})

test("hello, world", () => {
    expect(stringRotation.stringRotation("hello", "world")).toBe(false);
})

test("hello, oehell (anagram)", () => {
    expect(stringRotation.stringRotation("hello", "oehll")).toBe(false);
})


