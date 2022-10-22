// @ts-nocheck
const { ex1, ex2, ex3 } = require("../masalalar/ex4");

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
