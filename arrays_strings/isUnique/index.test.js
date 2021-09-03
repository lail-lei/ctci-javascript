const unique = require("./index")


test("small: returns true if string contains only unique (non-repeated) characters", () => {
    expect(unique.isUnique("laieforugh")).toBe(true);
})
test("small, in place: returns true if string contains only unique (non-repeated) characters", () => {
    expect(unique.isUniqueInPlace("laieforugh")).toBe(true);
})
test("medium: returns true if string contains only unique (non-repeated) characters", () => {
    expect(unique.isUnique("pqornsmtlukvjwixhygzfedcba")).toBe(true);
})
test("medium, in place: returns true if string contains only unique (non-repeated) characters", () => {
    expect(unique.isUniqueInPlace("pqornsmtlukvjwixhygzfedcba")).toBe(true);
})
test("large: returns true if string contains only unique (non-repeated) characters", () => {
    expect(unique.isUnique("BApqQorRnsSmtTluUkvVjwWixXhHYygzZfeOdcbaDFCGEMIJLNKP")).toBe(true);
})
test("large, in place: returns true if string contains only unique (non-repeated) characters", () => {
    expect(unique.isUniqueInPlace("BApqQorRnsSmtTluUkvVjwWixXhHYygzZfeOdcbaDFCGEMIJLNKP")).toBe(true);
})

test("very-large: returns true if string contains only unique (non-repeated) characters", () => {
    expect(unique.isUnique("BApqQorRnsSmtTluUkvVjwWixXhHYygzZfeOdcbaDFCGEMIJLNKP0123456789!@#$%^&*()_+{}|:;'<,.>?/~`\\\" áíóúñ")).toBe(true);
})
test("very-large, in place: returns true if string contains only unique (non-repeated) characters", () => {
    expect(unique.isUniqueInPlace("BApqQorRnsSmtTluUkvVjwWixXhHYygzZfeOdcbaDFCGEMIJLNKP0123456789!@#$%^&*()_+{}|:;'<,.>?/~`\\\" áíóúñ")).toBe(true);
})

test("fail: returns true if string contains only unique (non-repeated) characters", () => {
    expect(unique.isUnique("The first byte of the string is not a character, but the binary number equal to the number of characters in the string." 
                                    +"Suppose, for example, we wished to store the string Hello world!" 
                                    +"Including the space between the words, this has 12 characters. It would then be stored (writing the binary in hex) as"
                                    +"0C 48 65 6C 6C 6F 20 57 6F 72 6C 64 21Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum dui at sollicitudin volutpat. Fusce bibendum mauris tincidunt urna mattis, ac facilisis turpis pulvinar. Curabitur ut augue auctor leo ullamcorper auctor sit amet vulputate ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin rhoncus ligula felis. Aliquam accumsan consequat sodales. Aliquam placerat egestas lobortis. Vestibulum eleifend felis orci, ac fermentum sapien malesuada eget. Aenean efficitur justo neque, sed viverra ante aliquam a. Sed ac velit lobortis, dignissim felis quis, fermentum neque. In libero tortor, pretium porttitor ex at, lacinia luctus purus. Vestibulum justo ipsum, ullamcorper in sapien ut, pretium tincidunt augue. Suspendisse potenti. Sed sed sollicitudin turpis. Integer quis pharetra felis. Quisque condimentum id lacus vitae feugiat."
                                    + "Maecenas vel tellus mattis libero sollicitudin posuere. Nullam et sollicitudin velit, a ornare est. In eu nisi quam. In quis neque blandit, fringilla diam vitae, cursus lacus. Cras tincidunt lectus laoreet, tempus metus quis, sollicitudin justo. Fusce malesuada convallis accumsan. Morbi rutrum, tortor consequat convallis fermentum, nunc ex efficitur sem, nec auctor nibh erat ac ipsum. Sed euismod dolor odio, eu lobortis libero imperdiet non. Nullam luctus, sapien et iaculis interdum, dolor arcu convallis tortor, nec molestie nunc arcu a nulla. Vestibulum lobortis sem posuere blandit scelerisque. Nulla pellentesque iaculis aliquam.")
                                    ).toBe(false);
})

test("fail, in place: returns true if string contains only unique (non-repeated) characters", () => {
    expect(unique.isUniqueInPlace("The first byte of the string is not a character, but the binary number equal to the number of characters in the string." 
                                    +"Suppose, for example, we wished to store the string Hello world!" 
                                    +"Including the space between the words, this has 12 characters. It would then be stored (writing the binary in hex) as"
                                    +"0C 48 65 6C 6C 6F 20 57 6F 72 6C 64 21Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum dui at sollicitudin volutpat. Fusce bibendum mauris tincidunt urna mattis, ac facilisis turpis pulvinar. Curabitur ut augue auctor leo ullamcorper auctor sit amet vulputate ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin rhoncus ligula felis. Aliquam accumsan consequat sodales. Aliquam placerat egestas lobortis. Vestibulum eleifend felis orci, ac fermentum sapien malesuada eget. Aenean efficitur justo neque, sed viverra ante aliquam a. Sed ac velit lobortis, dignissim felis quis, fermentum neque. In libero tortor, pretium porttitor ex at, lacinia luctus purus. Vestibulum justo ipsum, ullamcorper in sapien ut, pretium tincidunt augue. Suspendisse potenti. Sed sed sollicitudin turpis. Integer quis pharetra felis. Quisque condimentum id lacus vitae feugiat."
                                    + "Maecenas vel tellus mattis libero sollicitudin posuere. Nullam et sollicitudin velit, a ornare est. In eu nisi quam. In quis neque blandit, fringilla diam vitae, cursus lacus. Cras tincidunt lectus laoreet, tempus metus quis, sollicitudin justo. Fusce malesuada convallis accumsan. Morbi rutrum, tortor consequat convallis fermentum, nunc ex efficitur sem, nec auctor nibh erat ac ipsum. Sed euismod dolor odio, eu lobortis libero imperdiet non. Nullam luctus, sapien et iaculis interdum, dolor arcu convallis tortor, nec molestie nunc arcu a nulla. Vestibulum lobortis sem posuere blandit scelerisque. Nulla pellentesque iaculis aliquam.")
                                    ).toBe(false);
})