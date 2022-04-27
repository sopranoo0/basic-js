const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) { 
	if (!options.separator) options.separator = '+';
	if (!options.additionSeparator) options.additionSeparator = '|';
	if (options.additionRepeatTimes && options.additionRepeatTimes < 2 ) options.additionSeparator = '';
	if (options.repeatTimes && options.repeatTimes < 2) options.separator = '';
	if (!options.hasOwnProperty('addition')) options.addition = '';

	let arr = new Array(options.additionRepeatTimes).fill( String(options.addition) ).join( String(options.additionSeparator) );
	return new Array(options.repeatTimes).fill( String(str) + arr ).join( String(options.separator) );
}

module.exports = {
  repeater
};
