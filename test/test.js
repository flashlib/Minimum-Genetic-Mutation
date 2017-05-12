var _ = require('../index.js');
var assert = require('assert');

describe('Minimum Genetic Mutation', function() {
	describe('0 mutation', function() {
		it('not in bank', function() {
			assert(_.minMutation('AACCGGTT', 'AACCGGTA') == 0);
		});
	});

	describe('1 mutation', function() {
		it('1 mutation', function() {
			assert(_.minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA']) == 1);
		});
	});
});