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

		var diffElements = arr1.map(function (item, index, arr) {
			if (arr2[index] === item) {
				return -1;
			}
			return index;
		}).filter(function (item, index) {
			return item !== -1;
		});

		console.log('diffElement ' + diffElements);
		return diffElements;
	}

	if (diffElement(start, end).length === 1) {
		return 1;
	}

	return -1;
};

module.exports = {
	minMutation: minMutation
};