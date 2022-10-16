const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(members)) {
    return false;
 }
  let resultArr = []
  let a
  for (let item of members) {
    if ((typeof item) == 'string') {
        a = item.trim().slice(0, 1).toUpperCase()
        resultArr.push(a)
    }
 }
 return (resultArr.sort().join(''))

}

module.exports = {
  createDreamTeam
};
