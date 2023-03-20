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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // сформировал строку из исходного массива
  let arrStr = domains.join('.')

  let result = {}
  // делаю из каждой строки входного массива подмассив и переворачиваю его
  for (key in domains) domains[key] = domains[key].split('.').reverse();
  // определяю уникальные элементы и формирую из них массив
  let uniq = [...new Set(domains.flat())]

  // если массив уникальных элементов пустой, сворачиваем функцию
  if(uniq.length === 0) return result;

  result['.'+ uniq[0]] = arrStr.split(uniq[0]).length - 1
  result['.'+ uniq[0] + '.' + uniq[1]] = arrStr.split(uniq[1] + '.' + uniq[0]).length - 1

  if (uniq.length > 2) {
    let nameKey = '.'+ uniq[0] + '.' + uniq[1]
    console.log('name = ' + nameKey)
    for (let i = 2; i < uniq.length; i++) {
        result[nameKey + '.' + uniq[i]] = arrStr.split(uniq[i] + '.' + uniq[1] + '.' + uniq[0]).length - 1
    }
  }
  return result
}

module.exports = {
  getDNSStats
};
