// ex1
const ex1 = (/** @type {string} */ str) =>
  str
    .split("")
    .sort((/** @type {string} */ a, /** @type {string} */ b) =>
      a.localeCompare(b)
    )
    .join("");

module.exports = {
  ex1,
};
