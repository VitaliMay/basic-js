const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let x = sampleActivity
  if ((typeof x) != 'string') {
    return false;
  }
  
  x = parseFloat(sampleActivity)
  if (x !== x || x === 0 || x > 15 || x < 0) {
    return false;
  }
  
  return Math.ceil(Math.log(15/parseFloat(sampleActivity))/(0.693/5730))
  
}

module.exports = {
  dateSample
};
