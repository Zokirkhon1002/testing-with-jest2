// ex1
const ex1 = (/** @type {number} */ year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

module.exports = {
  ex1,
};
