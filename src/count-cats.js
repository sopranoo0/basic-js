const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(m) {
	let sum = 0;
	m.forEach( (el1, i1, arr1) => {
		el1.forEach( (el2, i2) => {
			if(el2 === '^^') sum ++;
		} );
	} );
	return sum;
}

// let rrr = countCats([
// 	[0, 1, '^^'],
// 	[0, '^^', 2],
// 	['^^', 1, 2]
// ]);
// console.log(rrr);

module.exports = {
  countCats
};
