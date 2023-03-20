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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // формирую массив уникальных элементов
  // let uniqArr = [... new Set(str)]
  // let result = ''

  // for (key in uniqArr) {
      // если элемент в исходной строке один, то просто добавляю элемент
    // if ((str.split(uniqArr[key]).length - 1) === 1) result = result + uniqArr[key];
      // иначе добавляю также количество элементов
  //   else result = result + (str.split(uniqArr[key]).length - 1) + uniqArr[key]
  // }
  // return result

  let stack = [str[0]]
  let result = ''
  console.log(stack)

  for (let i = 1; i <= str.length; i++) {
      if (str[i] === stack[stack.length - 1]) {
          stack.push(str[i])
      }
      if (str[i] !== stack[stack.length - 1]) {
          if (stack.length === 1) result = result + stack[stack.length - 1];
          if (stack.length !== 1) result = result + stack.length + stack[stack.length - 1]
          stack = []
          stack.push(str[i])
      }
  }
  return result
}

module.exports = {
  encodeLine
};
