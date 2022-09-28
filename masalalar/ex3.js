const ex1 = (/** @type {number[]} */ arr) =>
  arr.filter((/** @type {number} */ i) => i % 2 == 0).length;

const ex2 = (/** @type {number[]} */ arr) =>
  arr.filter((/** @type {number} */ i) => i % 2 == 1).length;




// 3-exercise
// 1-way // tartib bilan
const ex3 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
   if (arr[i]+1 !== arr[++i]) return false;
  };
  return true;
};



module.exports = {
  ex1,
  ex2,
  ex3
};
