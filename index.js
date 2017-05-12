/**
 * @param  {string} start
 * @param  {string} end
 * @param  {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
	if (bank == undefined) {
		return -1;
	}

    if (bank.indexOf(end) === -1) {
		return -1;
	}

	function diffElement (a, b) {
		var arr1 = a.split('');
		var arr2 = b.split('');

		var totalDiffElement = arr1.map(function (item, index, arr) {
			if (arr2[index] === item) {
				return 0;
			}
			return 1;
		}).reduce(function (acc, val) {
			return acc + val;
		}, 0);

		console.log('diffElement ' + totalDiffElement);
		return totalDiffElement;
	}

	if (diffElement(start, end) === 1) {
		return 1;
	}

	return -1;
};

module.exports = {
	minMutation: minMutation
};