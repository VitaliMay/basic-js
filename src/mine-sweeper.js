const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [] // объявляю результирующий массив

  for (let i = 0; i < matrix.length; i++) {
    result[i] = [] // продолжаю формировать массив результата
    for (let k = 0; k < matrix[i].length; k++) {
      result[i][k] = 0 // присваиваю начальные значерия в массив результата
      // суть решения - обхожу по кругу каждую ячейку матрицы,
      // если нахожу мину(true) увеличиваю значение счётчика (или соответствующей ячейки результирующего массива)
      if ((i-1) >= 0 && (k-1) >= 0 && matrix[i-1][k-1] === true) result[i][k] = result[i][k] + 1;
      if ((i-1) >= 0 && (k) >= 0 && matrix[i-1][k] === true) result[i][k] = result[i][k] + 1;
      if ((i-1) >= 0 && (k + 1) < matrix[i].length && matrix[i-1][k+1] === true) result[i][k] = result[i][k] + 1;
      if ((i) >= 0 && (k + 1) < matrix[i].length && matrix[i][k+1] === true) result[i][k] = result[i][k] + 1;
      if ((i+1) < matrix.length && (k + 1) < matrix[i].length && matrix[i+1][k+1] === true) result[i][k] = result[i][k] + 1;
      if ((i+1) < matrix.length && (k) < matrix[i].length && matrix[i+1][k] === true) result[i][k] = result[i][k] + 1;
      if ((i+1) < matrix.length && (k-1) >= 0 && matrix[i+1][k-1] === true) result[i][k] = result[i][k] + 1;
      if ((i) < matrix.length && (k-1) >= 0 && matrix[i][k-1] === true) result[i][k] = result[i][k] + 1;
    }
  }
  return result
}

module.exports = {
  minesweeper
};
