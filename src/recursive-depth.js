const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) { 
		let c = 1;
		for (let el of arr) {
			let deep = 1;
			if (Array.isArray(el)) deep += this.calculateDepth(el);
			if (deep > c) c = deep;
		}
		return c;
	}
}

module.exports = {
  DepthCalculator
};
