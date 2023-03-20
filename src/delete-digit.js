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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let nStr = n.toString()
  let nArr = []
  nArr[0] = nStr.slice(1)
  for (let i = 1; i < nStr.length; i++) {
    nArr.push(nStr.slice(0, i) + nStr.slice(i+1))
  }
  return Math.max(...nArr)
}

module.exports = {
  deleteDigit
};
