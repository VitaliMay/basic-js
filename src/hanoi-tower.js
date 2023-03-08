const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
// function calculateHanoi(/* disksNumber, turnsSpeed */) {
//   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
// }

function calculateHanoi(disksNumber, turnsSpeed) {
  const res = {turns: 0,
               seconds: 0,
               };
   res.turns = 2**disksNumber - 1;
   res.seconds = Math.floor((60 * 60 / turnsSpeed) * res.turns);
  //  console.log(res)
   return res;
}

module.exports = {
  calculateHanoi
};
