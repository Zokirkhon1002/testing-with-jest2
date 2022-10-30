// @ts-nocheck
const { ex1, ex2, ex3, ex4, ex5 } = require("../masalalar/ex4");

describe(`
Given a year, report if it is a leap year.
`, () => {
  test("should return true if given year is leap year", () => {
    expect(ex1(1200)).toBe(true);
    expect(ex1(800)).toEqual(true);
    expect(ex1(804)).toBeTruthy();
    expect(ex1(1612)).not.toBeFalsy();
  });

  test("should return false if given year is not leap year", () => {
    expect(ex1(1000)).not.toBe(true);
    expect(ex1(900)).toBe(false);
    expect(ex1(909)).not.toEqual(true);
    expect(ex1(918)).toEqual(false);
    expect(ex1(707)).toBeFalsy();
    expect(ex1(713)).not.toBeTruthy();
  });
});

describe(`
Write a JavaScript program to compare two objects to determine if the first one contains
the same properties as the second one (which may also have additional properties). For
example, objA and objB are equal (but not equal to objC).
`, () => {
  test("should return true if objects are same", () => {
    const objA = { a: 1, b: 2, c: 1 };
    const objB = { a: 1, b: 1, c: 1 };

    expect(ex2(objA, objB)).toBe(true);
    expect(ex2(objA, objB)).toEqual(true);
    expect(ex2(objA, objB)).toBeTruthy();
    expect(ex2(objA, objB)).not.toBeFalsy();
  });

  test("should return false if objects have different proporties", () => {
    const objA = { a: 1, b: 2, c: 1 };
    const objC = { a: 1, b: 1, d: 1 };

    expect(ex2(objA, objC)).toBe(false);
    expect(ex2(objA, objC)).toEqual(false);
    expect(ex2(objA, objC)).toBeFalsy();
    expect(ex2(objA, objC)).not.toBeTruthy();
  });
});

describe(`
Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array.
A new line indicates a new row in the array. Example input:
abc,def,ghi\njkl,mno,pqr\nstu,vwx,yza
`, () => {
  test("should return 2D array", () => {
    let str = `abc,def,ghi\njkl,mno,pqr\nstu,vwx,yza`;

    const expected = [
      ["abc", "def", "ghi"],
      ["jkl", "mno", "pqr"],
      ["stu", "vwx", "yza"],
    ];

    const [a1, a2, a3] = expected;

    let result = ex3(str);

    expect(result).toEqual(expected);
    expect(result).toEqual([
      expect.arrayContaining(a1),
      expect.arrayContaining(a2),
      expect.arrayContaining(a3),
    ]);
    expect(result).toContainEqual(a3);
    expect(result).toContainEqual(a2);
    expect(result).toContainEqual(a1);
  });

  test("should return 2D array with another example", () => {
    let str = `zxc,asd,qwe\nrty,fgh,vbn\nmhj,iuy,pol`;

    const expected = [
      ["zxc", "asd", "qwe"],
      ["rty", "fgh", "vbn"],
      ["mhj", "iuy", "pol"],
    ];

    const [a1, a2, a3] = expected;

    let result = ex3(str);

    expect(result).toEqual(expected);
    expect(result).toEqual([
      expect.arrayContaining(a1),
      expect.arrayContaining(a2),
      expect.arrayContaining(a3),
    ]);
    expect(result).toContainEqual(a3);
    expect(result).toContainEqual(a2);
    expect(result).toContainEqual(a1);
  });
});

describe(`
Write a JavaScript program to generate a random hexadecimal color code.
`, () => {
  test("should return true if # in the value", () => {
    let char = "#";
    let result = ex4();
    expect(result).toEqual(expect.stringContaining(char));
    expect(result).toMatch(/#[a-f0-9]/);
  });

  test("should return true if length of value equal 7", () => {
    let len = 7;
    let result = ex4(len).length;
    expect(result).toEqual(7);
  });
  test("should return true if one of 'abcdef0123456789' is in value", () => {
    let result = ex4();
    expect(result).toMatch(/#[abcdef0123456789]/);
  });
  test("should return true if length of return not equal 7", () => {
    let result = ex4().length;
    expect(result).not.toBe(9);
    expect(result).not.toEqual(5);
    expect(result).toBeGreaterThan(6);
    expect(result).toBeLessThan(8);
  });
  test("should return true if one of 'abcdef0123456789' is not in value", () => {
    let result = ex4();
    expect(result).not.toMatch(/[higklmnopqrstuvwxyz]/);
  });
  test("should return true if value's type is string", () => {
    let result = ex4();
    expect(typeof result).toBe("string");
    expect(typeof result).toEqual("string");
  });
  test("should return true if value's type is not number, object and boolean", () => {
    let result = ex4();
    expect(typeof result).not.toBe("number");
    expect(typeof result).not.toEqual("object");
    expect(typeof result).not.toMatch("boolean");
  });
});

describe(`
Write a JavaScript function that returns true if the provided predicate function returns true
for all elements in a collection, false otherwise.
`, () => {
  test("should return true if all numbers in the array less than six", () => {
    let tempArr = [1, 2, 3, 4, 5];
    let tempNum = 6;
    let result = ex5(tempArr, (arr) => arr.every((x) => x < tempNum));
    expect(result).toBe(true);
    expect(result).toEqual(true);
  });

  test("should return true if all numbers in the array greater than zero", () => {
    let tempArr = [1, 2, 3, 4, 5];
    let tempNum = 0;
    let result = ex5(tempArr, (arr) => arr.every((x) => x > tempNum));
    expect(result).toBe(true);
    expect(result).toEqual(true);
  });

  test("should return false if one of numbers in the array less than \
    \n\tor equal 5 and one of them is greater than or eqaul 5", () => {
    let tempArr = [1, 2, 3, 4, 5, 7, 6];
    let tempNum = 5;
    let result = ex5(tempArr, (arr) => arr.every((x) => x <= tempNum));
    expect(result).toBe(false);
    expect(result).toEqual(false);
    expect(result).not.toBe(true);
    expect(result).not.toEqual(true);
  });
});
