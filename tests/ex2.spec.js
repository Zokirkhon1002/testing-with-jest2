// @ts-nocheck
const { ex1, ex2, ex3, ex4, ex5 } = require("../masalalar/ex2");

describe(`
Write a JavaScript program to create a new string from a given string taking the last 3
characters and added at both the front and back. The string length must be 3 or more, if
not, the original string is returned.
`, () => {
  it("should return original string. if string's length less than 3", () => {
    expect(ex1("zo")).toBe("zo");
    expect(ex1("zo")).not.toBe("zok");
  });

  it("should return zokoki if string is zoki", () => {
    expect(ex1("zoki")).toMatch("zokoki");
    expect(ex1("zoki")).not.toMatch("zoki");
  });

  test("should return zokhon if string is zokirkhon", () => {
    expect(ex1("zokirkhon")).toMatch("zokhon");
    expect(ex1("zokirkhon")).not.toMatch("zokirkho");
  });
});

describe(`
Write a JavaScript program to extract the first half of a string of even length.
`, () => {
  test("should return first half of a string of even length", () => {
    expect(ex2("zo")).toBe("z");
    expect(ex2("zo")).not.toBe("zo");
  });

  it("should return first half of a string of even length", () => {
    expect(ex2("zoki")).toBe("zo");
    expect(ex2("zoki")).not.toBe("zok");
  });

  test("should return first half of a string of even length", () => {
    expect(ex2("zokirkhon")).toBe("zoki");
    expect(ex2("zokirkhon")).not.toBe("zokir");
  });
});

describe(`
Write a JavaScript program to concatenate two strings except their first character.
`, () => {
  it("should return concatenated string except first characters", () => {
    expect(ex3("abc", "abc")).toBe("bcbc");
    expect(ex3("abc", "abc")).not.toBe("abcabc");
  });

  it("should return concatenated string except first characters", () => {
    expect(ex3("1abc", "1abc")).toMatch("abcabc");
    expect(ex3("1abc", "1abc")).not.toMatch("1abc1abc");
  });
});

describe(`
Given two values, write a JavaScript program to find out which one is nearest to 100
`, () => {
  it("should return number that is nearest to 100", () => {
    expect(ex4(45, 65)).toBe(65);
    expect(ex4(45, 65)).not.toBe(45);
  });

  it("should return number that is nearest to 100", () => {
    expect(ex4(65, 34)).toEqual(65);
    expect(ex4(65, 34)).not.toEqual(34);
  });
});

describe(`
Write a JavaScript program to check a given string contains 2 to 4 occurrences of a specified
character.
`, () => {
  it("shoud return true if given string contains 2 to 4 occurrences of a specified character", () => {
    expect(ex5("asd3qwe3gads", "3")).toBeTruthy();
    expect(ex5("asd3qwe3gads", "3")).not.toBeFalsy();
  });

  it("shoud return true if given string contains 2 to 4 occurrences of a specified character", () => {
    expect(ex5("as*dfwe*qw231", "*")).toBeTruthy();
    expect(ex5("as*dfwe*qw231", "*")).not.toBeFalsy();
  });

  it("shoud return false if given string does not contain 2 to 4 occurrences of a specified character", () => {
    expect(ex5("asdfwe*qw231", "#")).toBeFalsy();
    expect(ex5("asdfwe*qw231", "#")).not.toBeTruthy();
  });

  it("shoud return false if given string does not contain 2 to 4 occurrences of a specified character", () => {
    expect(ex5("asdfwe*qw231", "a")).toBeFalsy();
    expect(ex5("asdfwe*qw231", "a")).not.toBeTruthy();
  });

  it("shoud return false if given string does not contain 2 to 4 occurrences of a specified character", () => {
    expect(ex5("asdfawe*aqwa23a1", "a")).toBeFalsy();
    expect(ex5("asdfawe*aqwa23a1", "a")).not.toBeTruthy();
  });
});
