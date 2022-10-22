// ex1
const ex1 = (/** @type {number} */ year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// ex2;
const ex2 = (/** @type {Object} */ obj1, /** @type {Object} */ obj2) =>
  Object.keys(obj1).every((key) => obj2[key]);

// ex3;
const ex3 = (/** @type {string} */ str) => str.split("\n").map((/** @type {string} */ s)=> s.split(","))

module.exports = {
  ex1,
  ex2,
  ex3
};
