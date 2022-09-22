// @ts-nocheck
const {
  isEqualToo100,
  getFileExtention,
  moveCharsForwardInAlphabet,
  todaysDate,
  prefixText,
} = require("../masalalar/ex1.js");

// ex1
describe(`
ex1
Write a JavaScript program to check two numbers and return true if
one of the numbers is 100 or if the sum of the two numbers is 100
`, () => {
  test("should return true if the first number is 100", () => {
    expect(isEqualToo100(100, 0)).toBe(true);
  });

  test("should return true if the second number is 100", () => {
    expect(isEqualToo100(0, 100)).toBe(true);
  });

  it("should return true if the sum of the numbers is 100", () => {
    expect(isEqualToo100(50, 50)).toBe(true);
    expect(isEqualToo100(30, 70)).toBe(true);
    expect(isEqualToo100(20, 80)).toBe(true);
    expect(isEqualToo100(20, 70)).not.toBe(true);
  });

  it("should return false if the first number or second number or sum of the numbers is 100", () => {
    expect(isEqualToo100(10, 50)).toBe(false);
    expect(isEqualToo100(50, 50)).not.toBe(false);
  });
});

// ex2
describe(`
Write a JavaScript function to get the extension of a filename 
provided as a string. An extension with multiple period separators
should be considered as the entire extension (e.g. .config.js)
`, () => {
  it('should return ".html" if filename is index.html', () => {
    expect(getFileExtention("index.html")).toBe(".html");
  });

  test('should return ".js" if filename is app.js', () => {
    expect(getFileExtention("app.js")).toBe(".js");
  });

  it('should return ".css" if filename is styles.css', () => {
    expect(getFileExtention("styles.css")).toBe(".css");
  });

  test('should return ".txt" if filename is note.txt', () => {
    expect(getFileExtention("note.txt")).toBe(".txt");
  });
});

// ex3
describe(`
Write a function that accepts a string and moves the characters 
in the string by 1 position in the alphabet. It should be able to handle 
any number of characters in the string.  Optionally it can move the 
characters by a variable number of positions.
`, () => {
  test("should return the character b if we pass in the character a", () => {
    expect(moveCharsForwardInAlphabet("a")).toBe("b");
  });

  it("should return the next character in the alphabet", () => {
    expect(moveCharsForwardInAlphabet("b")).toBe("c");
    expect(moveCharsForwardInAlphabet("c")).toBe("d");
    expect(moveCharsForwardInAlphabet("d")).toBe("e");
    expect(moveCharsForwardInAlphabet("e")).toBe("f");
    expect(moveCharsForwardInAlphabet("f")).toBe("g");
  });

  it("should return the next character in the alphabet", () => {
    expect(moveCharsForwardInAlphabet("m")).toBe("n");
    expect(moveCharsForwardInAlphabet("n")).toBe("o");
    expect(moveCharsForwardInAlphabet("o")).toBe("p");
  });

  test("should return the next character in the alphabet", () => {
    expect(moveCharsForwardInAlphabet("r")).toBe("s");
  });
});

// ex4
describe(`
Write a JavaScript function that will get the current date 
and returns it in the format dd/mm/yyyy specific format.
`, () => {
  it("should return today's date in the format dd/mm/yyyy", () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const exptectedResult = `${day}/${month}/${year}`;

    expect(todaysDate()).toMatch(exptectedResult);
    // toMatch for string
  });
});

// ex5
describe(`
Write a JavaScript function that will prefix a string with
another provided string and return it. The original string should
be returned if it already starts with the string to prefix.
`, () => {
  it("should prefix a string with the provided value", () => {
    // toMatch for string
    expect(prefixText("Javascript", "groovy")).toMatch("groovy Javascript");
  });

  it("should not apply the prefixed string provided if it already exists at the start of the string", () => {
    expect(prefixText("JavaScript", "JavaScript")).toMatch("JavaScript");
    expect(prefixText("JavaScript is Groovy", "JavaScript")).toMatch(
      "JavaScript is Groovy"
    );
  });

  test("should return the original string if no prefix is provided", () => {
    expect(prefixText("Original String")).toMatch("Original String");
  });

  test("should return an empty string if there is a prefix and no string to prefix is provided", () => {
    expect(prefixText(null, "prefix")).toBeFalsy();
  });

  test("should return just the prefix if the original text is empty", () => {
    expect(prefixText("", "prefix")).toMatch("prefix");
  });
});
