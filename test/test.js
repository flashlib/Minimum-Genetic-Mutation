var _ = require('../index.js');
var assert = require('assert');

describe('Minimum Genetic Mutation', function() {
	describe('-1 mutation', function() {
		it('no bank', function() {
			assert(_.minMutation('AACCGGTT', 'AACCGGTA') == -1);
		});

		it('not in bank', function() {
			assert(_.minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTC']) == -1);
		});
	});

	describe('1 mutation', function() {
		it('1 mutation', function() {
			assert(_.minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA']) == 1);
			assert(_.minMutation('AACCGGTT', 'AACCGATT', ['AACCGATT']) == 1);
		});
	});
});