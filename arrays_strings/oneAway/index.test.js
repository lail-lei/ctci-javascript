let oneAway = require("./index");


test("tiny: a, b", () => {
    expect(oneAway.oneAway("lai", "lei")).toBe(true);
})

test("tiny: a, a", () => {
    expect(oneAway.oneAway("a", "a")).toBe(true);
})

test("tiny: a, aa", () => {
    expect(oneAway.oneAway("a", "aa")).toBe(true);
})

test("tiny: a, bw", () => {
    expect(oneAway.oneAway("a", "bw")).toBe(false);
})

test("small: lai, lei", () => {
    expect(oneAway.oneAway("lai", "lei")).toBe(true);
})

test("small: lailei, leilei", () => {
    expect(oneAway.oneAway("lailei", "leilei")).toBe(true);
})


test("medium: kitten, hitting", () => {
    expect(oneAway.oneAway("kitten", "hitting")).toBe(false);
})


test("large:", () => {
    expect(oneAway.oneAway("IwillgetbyIwillgetby", "IwillgetbyIwillsurvive")).toBe(false);
})

test("large:", () => {
    expect(oneAway.oneAway("IwillgetbyIwillgetby", "IwillgetbyIwillgetby")).toBe(true);
})