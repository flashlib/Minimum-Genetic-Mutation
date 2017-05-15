/**
 * @param  {string} start
 * @param  {string} end
 * @param  {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
	if (bank === undefined) {
		return -1;
	}

	function diffElements(a, b) {
		var arr1 = a.split('');
		var arr2 = b.split('');

		var diffElements = arr1.map(function(item, index, arr) {
			if (arr2[index] === item) {
				return -1;
			}
			return index;
		}).filter(function(item, index) {
			return item !== -1;
		});

		return diffElements;
	}

	function searchMutation(start, end, bank) {
		if (bank.indexOf(end) === -1) {
			return [];
		}

		if (start === end) {
			return [end];
		}

		if (diffElements(start, end).length === 1) {
			return [start, end];
		}

		var mutations = [];
		bank.forEach(function(element, index) {
			if (diffElements(start, element).length === 1) {
				var subMuations = searchMutation(element, end, bank.filter(function(item, i) {
					return i !== index;
				}));
				mutations.push([start].concat(subMuations));
			}
		});

		console.log('(' + start + ', ' + end + '), bank: ' + bank + ', mutations: ' + JSON.stringify(mutations));

		var validMutations = mutations.filter(function(item, index) {
			return item[item.length - 1] === end;
		});

		if (validMutations.length === 0) {
			return [];
		}

		return validMutations.sort(function(first, last) {
			return first.length - last.length;
		})[0];
	}

	return searchMutation(start, end, bank).length - 1;
};

module.exports = {
	minMutation: minMutation
};