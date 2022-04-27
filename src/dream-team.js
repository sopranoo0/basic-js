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
function createDreamTeam(m) {
	if(Object.prototype.toString.call(m) === '[object Array]' && m.length){
		let abbr = '';
		m.forEach(el => { 
			if(el && String(el) === el){
				abbr += el.trim().toUpperCase().split('').shift();
			}
		});
		return abbr.split('').sort().join('');
	}
	return !1;
}

module.exports = {
  createDreamTeam
};
