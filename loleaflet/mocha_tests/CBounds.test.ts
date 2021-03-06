/// <reference path="../src/layer/vector/CPoint.ts" />
/// <reference path="../src/layer/vector/CBounds.ts" />

var assert = require('assert').strict;

describe('CBounds parse() tests', function () {

	describe('CBounds.parse() call with an empty string argument', function () {
		it('should return undefined', function () {
			assert.equal(CBounds.parse(''), undefined);
		});
	});

	describe('CBounds.parse() call with an string argument with 3 numbers', function () {
		it('should return undefined', function () {
			assert.equal(CBounds.parse('10 20 30'), undefined);
		});
	});

	describe('CBounds.parse() call with an string argument with 4 numbers', function () {
		var bounds = CBounds.parse('10 20 30 40');
		it('should return a valid CBounds', function () {
			assert.ok(bounds instanceof CBounds);
			assert.ok(bounds.isValid());
		});

		it('and the CBounds should be correct in position and size', function () {
			assert.ok(bounds.equals(new CBounds(new CPoint(10, 20), new CPoint(40, 60))));
		});
	});
});
