// @ts-nocheck
const { ex1 } = require("../masalalar/ex5");

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

// console.log(ex1("Adfajsrewqpih")); // aAdefhijpqrsw
