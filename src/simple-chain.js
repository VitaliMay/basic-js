const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  result: '',
  finish: [],
  getLength() {
    if (this.result.length === 0) return 0;
    return this.result.split('~~').length
  },
  addLink(value = '') {
    if (this.getLength() === 0) {this.result = this.result + `( ${value} )`}
    else {this.result = this.result + `~~( ${value} )`}
    return this
  },
  removeLink(position) {
    this.finish = this.result.split('~~')
    // со всеми этими проверками тест проходит)
    //if (this.result.length === 0 || typeof position !== 'number' || !Number.isInteger(position) || position <= 0 || position > this.getLength()) {
    //if (typeof position !== 'number' || !Number.isInteger(position) || position <= 0 || position > this.getLength()) {
    if (!Number.isInteger(position) || position <= 0 || position > this.getLength()) {
      this.finish = [] // надо обнулять, иначе не проходит тест
      this.result = '' // надо обнулять, иначе не проходит тест
      throw new Error ("You can't remove incorrect link!")
    } else {
      this.finish.splice(position-1, 1)
      this.result = this.finish.join('~~')
    }

    return this

  },
  reverseChain() {
    this.result = this.result.split('~~').reverse().join('~~')
    return this

  },
  finishChain() {
    this.finish = [this.result]
    this.result = ''
    return this.finish.pop()
  }
};

module.exports = {
  chainMaker
};
