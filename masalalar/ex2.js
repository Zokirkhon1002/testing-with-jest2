// ex1
const ex1 = (/** @type {string} */ str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

// ex2
const ex2 = (/** @type {string} */ str) => str.slice(0, str.length / 2);

// ex3
const ex3 = (/** @type {string} */ str1, /** @type {string} */ str2) =>
  str1.slice(1) + str2.slice(1);

// ex4
const ex4 = (/** @type {number} */ a, /** @type {number} */ b) =>
  100 - a > 100 - b ? b : a;

// ex5
// 5-exercise
const ex5 = (/** @type {string} */ str, /** @type {string} */ char) => {
  let len = str.split("").filter((i) => i === char).length;
  return len >= 2 && 4 >= len;
};

module.exports = { ex1, ex2, ex3, ex4, ex5 };
