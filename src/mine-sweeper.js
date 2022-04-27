const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(m) {
	let sum = [];
	m.forEach( (el1, i1, arr1) => {
		sum.push([]);
		el1.forEach( (el2, i2) => {

			let bomb = 0;
			if(arr1[i1 - 1] !== undefined) {
				if(arr1[i1 - 1][i2 - 1] !== undefined) {
					if(arr1[i1 - 1][i2 - 1]) bomb += 1;
				}
				if(arr1[i1 - 1][i2] !== undefined) {
					if(arr1[i1 - 1][i2]) bomb += 1;
				}
				if(arr1[i1 - 1][i2 + 1] !== undefined) {
					if(arr1[i1 - 1][i2 + 1]) bomb += 1;
				}
			}
			if(arr1[i1][i2 - 1] !== undefined) {
				if(arr1[i1][i2 - 1]) bomb += 1;
			}
			if(arr1[i1][i2 + 1] !== undefined) {
				if(arr1[i1][i2 + 1]) bomb += 1;
			}
			if(arr1[i1 + 1] !== undefined) {
				if(arr1[i1 + 1][i2 - 1] !== undefined) {
					if(arr1[i1 + 1][i2 - 1]) bomb += 1;
				}
				if(arr1[i1 + 1][i2] !== undefined) {
					if(arr1[i1 + 1][i2]) bomb += 1;
				}
				if(arr1[i1 + 1][i2 + 1] !== undefined) {
					if(arr1[i1 + 1][i2 + 1]) bomb += 1;
				}
			}
			sum[i1][i2] = bomb;
		} );
	} );
	return sum;
}

module.exports = {
  minesweeper
};
