// @ts-nocheck
const { ex1, ex2 } = require("../masalalar/ex5");

describe(`
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string: 'webmaster'
Expected Output: 'abeemrstw'
`, () => {
  test('should return "aadefhijpqrsw" if argument is "adfajsrewqpih"', () => {
    let tempStr = "adfajsrewqpih";
    let result = ex1(tempStr);
    expect(result).toBe("aadefhijpqrsw");
    expect(result).toEqual("aadefhijpqrsw");
  });
  test('should return "adfjknsvxz" if argument is "dsafjkzxnv"', () => {
    let tempStr = "dsafjkzxnv";
    let result = ex1(tempStr);
    expect(result).toBe("adfjknsvxz");
    expect(result).toEqual("adfjknsvxz");
  });
  test('should return "aahilnpsvxz" if argument is "zxnvlsaihpa"', () => {
    let tempStr = "zxnvlsaihpa";
    let result = ex1(tempStr);
    expect(result).toBe("aahilnpsvxz");
    expect(result).toEqual("aahilnpsvxz");
  });
  test("should not return 'Aadefhijpqrsw', should return 'aAdefhijpqrsw' if argument is 'Adfajsrewqpih'", () => {
    let tempStr = "Adfajsrewqpih";
    let result = ex1(tempStr);
    expect(result).not.toBe("Aadefhijpqrsw");
    expect(result).not.toEqual("Aadefhijpqrsw");
    expect(result).toBe("aAdefhijpqrsw");
    expect(result).toEqual("aAdefhijpqrsw");
  });
});

describe(`
Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
`, () => {
  test("should return new Error 'argument must be string and can not be empty'\
    if argument doesn't give", () => {
    expect(ex2).toThrow();
    expect(ex2).toThrow(/argument must be string and can not be empty/);
  });
  test("should return counts the number of vowels with in the string", () => {
    let tempExample = "zokirkhon";
    let result = ex2(tempExample);
    expect(result).toBe(3);
    expect(result).toEqual(3);
    expect(result).not.toBe(2);
    expect(result).not.toEqual(4);
    expect(result).toBeGreaterThan(2);
    expect(result).toBeLessThan(4);
    expect(result).toBeGreaterThanOrEqual(3);
    expect(result).toBeLessThanOrEqual(3);
  });
  it("should return 0 if there are not any vowels given within the string", () => {
    let tempExample = "sdfghjklzxcvbnm";
    let result = ex2(tempExample);
    expect(result).toBe(0);
    expect(result).not.toBe(1);
    expect(result).not.toBe(-1);

    expect(result).not.toBeTruthy();
    expect(result).toBeFalsy();

    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();

    expect(result).toEqual(0);
    expect(result).not.toEqual(4);
    expect(result).not.toEqual(-2);

    expect(result).toBeGreaterThan(-1);
    expect(result).toBeLessThan(1);

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(0);
  });
});
