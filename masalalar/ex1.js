// ex1
const isEqualToo100 = (/** @type {number} */ a, /** @type {number} */ b) =>
  a === 100 || b === 100 || a + b === 100;

// ex2
const getFileExtention = (/** @type {string | string[]} */ str) =>
  str.slice(str.lastIndexOf("."));

// ex3
const moveCharsForwardInAlphabet = (/** @type {string} */ str) =>
  str
    .split("")
    .map((/** @type {string} */ i) => String.fromCharCode(i.charCodeAt(0) + 1))
    .join("");

// ex4
const todaysDate = (/** @type {Date} */ date = new Date()) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// ex5
const prefixText = (
  /** @type {string | null} */ str1,
  /** @type {string} */ str2
) => {
  if (str1 === "" && str2.length) return str2;
  if (str2 === undefined) return str1;
  if (!str1) return "";
  return str1.startsWith(str2) ? str1 : `${str2} ${str1}`;
};

module.exports = {
  isEqualToo100,
  getFileExtention,
  moveCharsForwardInAlphabet,
  todaysDate,
  prefixText,
};
