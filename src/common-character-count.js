const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // достаю из строки уникальные элементы
  arrS1 = [... new Set(s1)]
  arrS2 = [... new Set(s2)]
  let result = []
  let ans = 0

  // определяю общие элементы и создаю из них массив
  for (key in arrS1) {
    if (arrS2.includes(arrS1[key])) result.push(arrS1[key])
  }

  // подсчитываю количество элемента в каждой из строк и беру меньшее в ответ
  for (key in result) {
    ans = ans + Math.min(s1.split(result[key]).length - 1, s2.split(result[key]).length - 1)
  }
  return ans
}

module.exports = {
  getCommonCharacterCount
};
