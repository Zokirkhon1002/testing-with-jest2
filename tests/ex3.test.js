// @ts-nocheck
const { ex1 } = require("../masalalar/ex3");

describe(`
Write a JavaScript program to find the number of even digits in a an array of integers
`, ()=> {
    it("should return 4 if array has for even numbers and\n\
    should not return 5,3, ...etc", ()=> {
        let tempArr = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(ex1(tempArr)).toBe(4)
        expect(ex1(tempArr)).not.toBe(5)
        expect(ex1(tempArr)).not.toBe(3)
    })

    it("should return 2 if array has two even numbers", ()=> {
        let tempArr = [1, 1, 3, 4, 5, 6, 7, 3];
        expect(ex1(tempArr)).toEqual(2)
        expect(ex1(tempArr)).not.toEqual(4)
        expect(ex1(tempArr)).not.toEqual(3)
    })

    it("should return 0 if array has not even numbers", ()=> {
        let tempArr = [1, 1, 3, 5, 5, 9, 7, 3];
        expect(ex1(tempArr)).toEqual(0)
        expect(ex1(tempArr)).not.toEqual(1)
        expect(ex1(tempArr)).not.toEqual(2)
    })
})


