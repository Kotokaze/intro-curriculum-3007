'use strict';

/**
 * 17の倍数ならば真を返す
 * @param {number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
	return (num%17 === 0);
}

module.exports = {
	isMultipleOfSeventeen
}
