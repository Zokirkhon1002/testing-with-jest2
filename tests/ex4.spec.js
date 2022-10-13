// @ts-nocheck
const { ex1 } = require("../masalalar/ex4");

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
