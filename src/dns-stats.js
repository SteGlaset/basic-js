const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let DNS = {};

  for (let i in domains) {
    for (let j = domains[i].length - 1; j >= 0; j--) {
      if(domains[i][j] === '.' || j === 0) {
        
        let domain = domains[i].substring(j, domains[i].length);
        if (DNS.hasOwnProperty(domain)) {
          DNS[domain]++;
        } else {
          DNS[domain] = 1;
        }
      }
    }
  }

  return DNS;
}

module.exports = {
  getDNSStats
};

console.log(getDNSStats(['epam.com']))
