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
	let c = 1, line = '';
	str.split('').forEach((el, i, arr) => {
		if (el === arr[i + 1]) {
			c++;
		} else {
			line += (c > 1) ? (c + el) : el;
			c = 1;
		}
	});
	return line;
}

module.exports = {
  encodeLine
};
