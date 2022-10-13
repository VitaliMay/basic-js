const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let mat = matrix.slice()
  let arr = []
  let result = 0

  for (let i = 0; i < matrix.length; i++) {
      arr = arr.concat(mat[i]);
  }

  for (let k = 0; k < arr.length; k++) {
      if (arr[k] === '^^') {
          result++
      }
  }

return result


}

module.exports = {
  countCats
};
