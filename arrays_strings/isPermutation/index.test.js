const permutation = require("./index")

test("empty string: returns true", () => {
    expect(permutation.permutationChecker("", "")).toBe(true);
})
test("inplace, empty string: returns true", () => {
    expect(permutation.permutationCheckerInPlace("", "")).toBe(true);
})


test("single character: returns true", () => {
    expect(permutation.permutationChecker("a", "a")).toBe(true);
})
test("single character: returns truee", () => {
    expect(permutation.permutationCheckerInPlace("a", "a")).toBe(true);
})

test("single character strings, different character: returns false", () => {
    expect(permutation.permutationChecker("b", "a")).toBe(false);
})
test("single character strings, different character, in place: returns false", () => {
    expect(permutation.permutationCheckerInPlace("b", "a")).toBe(false);
})

test("three characters: returns true", () =>{
    expect(permutation.permutationChecker("abc", "bac")).toBe(true);
})
test("three characters, in place: returns true", () =>{
    expect(permutation.permutationCheckerInPlace("abc", "bac")).toBe(true);
})


test("repeating characters: returns true", () =>{
    expect(permutation.permutationChecker("aabbc", "bcaba")).toBe(true);
})
test("repeating characters, in place: returns true", () =>{
    expect(permutation.permutationCheckerInPlace("aabbc", "bcaba")).toBe(true);
})



test("different length: returns false", () =>{
    expect(permutation.permutationChecker("bim", "james")).toBe(false);
})

test("different length: returns false", () =>{
    expect(permutation.permutationCheckerInPlace("bim", "james")).toBe(false);
})

