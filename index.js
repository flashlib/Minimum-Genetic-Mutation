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

	function oneStepMutation(a, b) {
		if (a === b) {
			return false;
		}

		var arr1 = a.split('');
		var arr2 = b.split('');

		var diffElements = 0;
		arr1.forEach( function(element, index) {
			if (arr2[index] !== element) {
				diffElements++;
				
				if (diffElements > 1) {
					return false;
				}
			}
		});

		return diffElements === 1;
	}

	function findMinMutation(start, end, bank) {
		if (bank.indexOf(end) === -1) {
			return [];
		}

		if (start === end) {
			return [end];
		}

		if (oneStepMutation(start, end)) {
			return [start, end];
		}

		var mutations = [];
		bank.forEach(function(element, index) {
			if (oneStepMutation(start, element)) {
				var subMuations = findMinMutation(element, end, bank.filter(function(item, i) {
					return i !== index;
				}));
				mutations.push([start].concat(subMuations));
			}
		});

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

	function stepsOfMutation (arr) {
		return arr.length - 1;
	}

	return stepsOfMutation(findMinMutation(start, end, bank));
};

module.exports = {
	minMutation: minMutation
};