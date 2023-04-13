const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let result = 0
  let index = []
  for (let i = 0; i < matrix.length; i++) {
    for (key in matrix[i]) {
      if (index.includes(key) !== true) {
        if (matrix[i][key] === 0) index.push(key);
        result = result + matrix[i][key]
      }
    }
  }
  return result

}

module.exports = {
  getMatrixElementsSum
};
