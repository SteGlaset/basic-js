const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = "";

  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }
    encoded += count - 1 != 0 ? count + str[i] : str[i];
  }

  return encoded;
}

module.exports = {
  encodeLine
};

console.log(encodeLine('aabbccc'))
