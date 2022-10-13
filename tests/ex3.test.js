// @ts-nocheck
const { ex1, ex2, ex3, ex4, ex5 } = require("../masalalar/ex3");

// ex1
describe(`
Write a JavaScript program to find the number of even digits in a an array of integers
`, () => {
  it("should return 4 if array has for even numbers", () => {
    let tempArr = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(ex1(tempArr)).toBe(4);
    expect(ex1(tempArr)).not.toBe(5);
    expect(ex1(tempArr)).not.toBe(3);
  });

  it("should return 2 if array has two even numbers", () => {
    let tempArr = [1, 1, 3, 4, 5, 6, 7, 3];
    expect(ex1(tempArr)).toEqual(2);
    expect(ex1(tempArr)).not.toEqual(4);
    expect(ex1(tempArr)).not.toEqual(3);
  });

  it("should return 0 if array has not even numbers", () => {
    let tempArr = [1, 1, 3, 5, 5, 9, 7, 3];
    expect(ex1(tempArr)).toEqual(0);
    expect(ex1(tempArr)).not.toEqual(1);
    expect(ex1(tempArr)).not.toEqual(2);
  });
});

// ex2
describe(`
Write a JavaScript program to find the number of odd digits in a an array of integers
`, () => {
  it("should return number of odd numbers as integer", () => {
    let tempArr = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(ex2(tempArr)).toBe(4);
    expect(ex2(tempArr)).not.toBe(3);
    expect(ex2(tempArr)).not.toBe(5);
  });
});

// ex3
describe(`
Write a JavaScript program to check whether a given array of integers is sorted in ascending
order
`, () => {
  it("should return false if the array of integers is not sorted", () => {
    let tempArr = [5, 4, 6, 3, 7, 2, 8];
    expect(ex3(tempArr)).toBe(false);
    expect(ex3(tempArr)).not.toBe(true);
  });

  it("should return false if the array of integers is not sorted", () => {
    let tempArr = [1, 2, 3, 4, 5, 6, 8];
    expect(ex3(tempArr)).toBeFalsy();
    expect(ex3(tempArr)).not.toBeTruthy();
  });

  it("should return false if the array of integers is not sorted", () => {
    let tempArr = [7, 1, 2, 3, 4, 5, 6];
    expect(ex3(tempArr)).toEqual(false);
    expect(ex3(tempArr)).not.toEqual(true);
  });

  it("should return true if the array of integers is sorted in ascending order", () => {
    let tempArr = [1, 2, 3, 4, 5, 6];

    expect(ex3(tempArr)).toBe(true);
    expect(ex3(tempArr)).not.toBe(false);

    expect(ex3(tempArr)).toBeTruthy();
    expect(ex3(tempArr)).not.toBeFalsy();

    expect(ex3(tempArr)).toEqual(true);
    expect(ex3(tempArr)).not.toEqual(false);
  });
});

// ex4
describe(`
Write a JavaScript program to get the largest even number from an array of integers
`, () => {
  test("should return the largest even number from an array of integers", () => {
    let tempArr = [5, 4, 6, 3, 7, 2, 8, 9];

    expect(ex4(tempArr)).toBe(8);
    expect(ex4(tempArr)).toBeTruthy;
    expect(ex4(tempArr)).toEqual(8);
  });

  it("should return the positive number if array has even number", () => {
    let tempArr = [5, 4, 6, 3, 7, 2, 8, 9];

    expect(ex4(tempArr)).toBeGreaterThan(0);
    expect(ex4(tempArr)).not.toBeLessThan(1);
  });

  test("should return the zero if there is not any even numbers in the array", () => {
    let tempArr = [5, 3, 7, 9];

    expect(ex4(tempArr)).not.toBeGreaterThanOrEqual(1);
    expect(ex4(tempArr)).toBeLessThanOrEqual(0);
  });

  test("should not return false or any other falsy result except zero(0)", () => {
    let tempArr = ["as", "asda"];

    expect(ex4(tempArr)).toBe(0);
    expect(isNaN(ex4(tempArr))).toBe(false);
    expect(isNaN(ex4(tempArr))).not.toBe(true);
    expect(isNaN(ex4(tempArr))).not.toBeTruthy();
    expect(ex4(tempArr)).not.toBe("");
    expect(ex4(tempArr)).not.toBe([]);
    expect(ex4(tempArr)).not.toBe({});
    expect(ex4(tempArr)).toBeLessThanOrEqual(0);
    expect(ex4(tempArr)).not.toBeTruthy();
    expect(ex4(tempArr)).not.toBeUndefined();
    expect(ex4(tempArr)).not.toBeNull();
    expect(ex4(tempArr)).toBeDefined();
  });
});

// ex5
describe(`
Write a JavaScript program to replace the first digit in a string (should contain at least one
  digit) with a $ character.
`, () => {
  test("should return a string that first digit replaced with a $ character", () => {
    let tempText = "afslbi12ub3fa";
    let result = "afslbi$2ub3fa";
    expect(ex5(tempText)).toBe(result);
    expect(ex5(tempText)).toEqual(result);
  });
  test("should return a string that first digit replaced with a $ character", () => {
    let tempText = "afslbi12ub3fa";
    expect(ex5(tempText)).toMatch(/$/);
    expect(ex5(tempText)).not.toMatch(tempText);
  });
  test("should return a string that first digit replaced with a $ character", () => {
    let tempText = "afslbi12ub3fa";
    expect(ex5(tempText)).not.toBe(tempText);
    expect(ex5(tempText)).not.toMatch(tempText);
  });
  test("should return a string that first digit replaced with a $ character", () => {
    let tempText = "afslbi12ub3fa";
    expect(ex5(tempText)).not.toBe(tempText);
    expect(ex5(tempText)).not.toBe("");
    expect(ex5(tempText)).not.toBe([]);
    expect(ex5(tempText)).not.toBe({});
  });
});
