// ex1
const ex1 = (/** @type {number} */ year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// ex2;
const ex2 = (/** @type {Object} */ obj1, /** @type {Object} */ obj2) =>
  Object.keys(obj1).every((key) => obj2[key]);

// ex3;
const ex3 = (/** @type {string} */ str) =>
  str.split("\n").map((/** @type {string} */ s) => s.split(","));

// ex4;
const ex4 = () => {
  let result = "#";
  let all = "abcdef0123456789".split("");
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 7);
    result += all[random];
  }
  return result;
};

// ex5;
const ex5 = (
  /** @type {number[]} */ arr,
  /** @type {(arg: number[]) => Boolean} */ fn
) => fn(arr) || false;

module.exports = {
  ex1,
  ex2,
  ex3,
  ex4,
  ex5,
};
