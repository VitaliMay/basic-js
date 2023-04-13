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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let arr
  let result = ''
  let parameters = {repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: '|'}
  // переписываю свойства в parfmeters в соответствии с приходящими в options, если они есть
  for (key in options) parameters[key] = options[key];
  if (parameters.addition === null) parameters.addition = 'null'  /* проверка на null для одного хитровыдуманного теста */
  arr = new Array(parameters.additionRepeatTimes) /* создаю пустой массив нужного размера */
  arr = arr.fill(parameters.addition) /* заполняю массив */
  result = str + arr.join(parameters.additionSeparator) /* формирую строку, которую надо повторять */
    /* для итогового результата фактически повторяю предыдущие действия */
  return Array(parameters.repeatTimes).fill(result).join(parameters.separator)
}

module.exports = {
  repeater
};
