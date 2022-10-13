const ex1 = (/** @type {number[]} */ arr) =>
  arr.filter((/** @type {number} */ i) => i % 2 == 0).length;

const ex2 = (/** @type {number[]} */ arr) =>
  arr.filter((/** @type {number} */ i) => i % 2 == 1).length;

// tartib bilan
const ex3 = (/** @type {string | any[]} */ arr) => {
  let len = arr.length;
  if (len <= 0) return false;
  for (let i = 0; i < len; i++) {
    if (arr[i] + 1 !== arr[++i]) return false;
  }
  return true;
};

const ex4 = (/** @type {number[]} */ arr) => {
  let result = Math.max(...arr.filter((i) => !(i % 2)));
  return result >= 1 ? result : 0;
};

const ex5 = (/** @type {string} */ str) => str.replace(/\d/, "$");

module.exports = {
  ex1,
  ex2,
  ex3,
  ex4,
  ex5,
};
