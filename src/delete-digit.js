const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = Number.MIN_VALUE;
  let arr = Array.from(String(n), Number);
  let arrCpy = [...arr];

  for (let i in arrCpy) {
    arr = [...arrCpy];
    arr.splice(i, 1)
    max = arr.join('') > max ? +arr.join('') : max;
  }
  
  return max;
}

module.exports = {
  deleteDigit
};