const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) options.separator = "+";
  if (!options.additionSeparator) options.additionSeparator = "|";
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (options.addition === undefined) options.addition = "";

  let result = "";
  console.log(options.separator)

  for (let i = 0; i < options.repeatTimes; i++) {
    result += str;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      result += options.addition;
      if (j + 1 === options.additionRepeatTimes) break;
      result += options.additionSeparator;
    }
    if (i + 1 === options.repeatTimes) break;
    result += options.separator;
  }

  return result;
}

module.exports = {
  repeater
};
