const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(name) { this.name = name; } // нужен, чтобы пройти проверку на реверс

  encrypt(str, key) {
    //if (arguments.length < 2) throw new Error('Incorrect arguments!')
    if (str === undefined || key === undefined) throw new Error('Incorrect arguments!')

    key = key.toUpperCase()
    let strUp = str.toUpperCase()
    const firstLetter = 'A'.charCodeAt()  // 65
    const countABC = 26 // последняя буква Z будет (65+26-1)
    let strCode = str.toUpperCase().replace(/[^a-z]/gi, '') // формирую строку для расчета кода (убираю пробелы и другие символы)

    let keyCode = Math.ceil(strCode.length / key.length) // определяю коэффициент для формирования ключа длиной с входную строку
    keyCode = key.repeat(keyCode).slice(0, strCode.length) // сформировал ключ для перевода

    let result = []
    let k = 0 // счётчик пробелов и прочих символов
    for (let i = 0; i < strUp.length; i++) {
      if (strUp[i] === ' ' || strUp.charCodeAt(i) < 65 || strUp.charCodeAt(i) > 90) { // 90 это код буквы Z
        result.push(str[i])
        k = k+1
      } else {
        let letter = strUp.charCodeAt(i) - firstLetter
        let shift = keyCode.charCodeAt(i - k) - firstLetter
        result.push(String.fromCharCode(firstLetter + (letter + shift) % countABC))
      }
    }
    if (this.name === false) return result.reverse().join('')  // определяется в конструкторе
    return result.join('')

  }


  decrypt(strDe, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    //if (arguments.length < 2) throw new Error('Incorrect arguments!');
    if (strDe === undefined || key === undefined) throw new Error('Incorrect arguments!')

    key = key.toUpperCase()
    const firstLetter = 'A'.charCodeAt()
    const countABC = 26
    let strDecode = strDe.toUpperCase().replace(/[^a-z]/gi, '') // формирую строку для расчета кода (убираю пробелы и другие символы)
    let keyCode = Math.ceil(strDecode.length / key.length) // определяю коэффициент для формирования ключа длиной с входную строку

    keyCode = key.repeat(keyCode).slice(0, strDecode.length) // сформировал ключ для перевода

    let result = []
    let k = 0 // счётчик пробелов и прочих символов
    for (let i = 0; i < strDe.length; i++) {
      if (strDe[i] === ' ' || strDe.charCodeAt(i) < 65 || strDe.charCodeAt(i) > 90) { // 90 это код буквы Z
      result.push(strDe[i])
      k = k+1
      } else {

      let letter = strDe.charCodeAt(i) - firstLetter
      let shift = keyCode.charCodeAt(i - k) - firstLetter
      result.push(String.fromCharCode(firstLetter + (letter - shift +countABC) % countABC))

      }
    }

    if (this.name === false) return result.reverse().join('') // определяется в конструкторе
    return result.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
