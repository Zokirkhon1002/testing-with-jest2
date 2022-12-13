// ex1
const ex1 = (/** @type {string} */ str) =>
  str
    .split("")
    .sort((/** @type {string} */ a, /** @type {string} */ b) =>
      a.localeCompare(b)
    )
    .join("");

// ex2
const ex2 = (/** @type {string} */ str) => {
  if (typeof str !== "string" || !str) {
    throw new Error("argument must be string and can not be empty");
  }
  return str.match(/[a,e,i,o,u]/g)?.length ?? 0;
};

module.exports = {
  ex1,
  ex2,
};
