var _ = require('../index.js');
var assert = require('assert');

describe('Minimum Genetic Mutation', function() {
	describe('-1 mutation', function() {
		it('no bank', function() {
			assert(_.minMutation('AACCGGTT', 'AACCGGTA') == -1);
		});

		it('not in bank 1 step', function() {
			assert(_.minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTC']) == -1);
		});

		it('not in bank 2 step', function() {
			assert(_.minMutation('AACCGGTT', 'AACCGGAA', ['AACCGGTC', 'AACCGGAA']) == -1);
		});
	});

	describe('1 mutation', function() {
		it('1 mutation', function() {
			assert(_.minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA']) == 1);
			assert(_.minMutation('AACCGGTT', 'AACCGATT', ['AACCGATT']) == 1);
		});
	});

	describe('2 mutation', function() {
		it('2 mutation', function() {
			assert(_.minMutation('AACCGGTT', 'AACCGGAA', ['AACCGGTA', 'AACCGGAA']) == 2);
			assert(_.minMutation('AACCGGTT', 'AACCGATA', ['AACCGGTA', 'AACCGATA']) == 2);
		});

		it('should find 2 mutation when there is a string same as start in bank', function () {
			assert(_.minMutation('AACCGGTT', 'AACCGATA', ['AACCGGTT', 'AACCGGTA', 'AACCGATA']) === 2);
		})
	});

	describe('3 mutation', function () {
		it('3 mutation', function () {
			assert(_.minMutation('AACCGGTT', 'AACCGAAA', ['AACCGGTA', 'AACCGGAA', 'AACCGAAA']) === 3);
		});
	});
});