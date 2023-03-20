const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let result = Array(arr.length).fill(-1) // создаю результирующий массив и на полняю его (-1)

  /*let arrSort = arr.slice(0)*/ // чтобы не менялся исходный массив
  arrSort = [...arr] // чтобы не менялся исходный массив
  arrSort = arrSort.sort((a, b) => b - a) // сортирую по убыванию, чтобы доставать наименьшие значения методом pop()

  // console.log(arrSort)
  // console.log(arr)

  // сформировал отсортированный массив без (-1)
  arrSort.splice(arrSort.indexOf(-1), arrSort.lastIndexOf(-1))
  console.log(arrSort)

  // сравниваю исходный массив с результирующим
  for (key in result) {
    if (result[key] !== arr[key]) result[key] = arrSort.pop()
  }
  return result

}

module.exports = {
  sortByHeight
};
