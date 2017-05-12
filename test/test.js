var _ = require('../index.js');
var assert = require('assert');

describe('test', function () {
	it('case 1', function () {
		assert(_.minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA'])==1);
	});
});

