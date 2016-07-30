/* 
 * simple_test.js
 */

var assert = require('chai').assert;

describe('mySum', function () {
    it('Should return sum of two integers', function () {
        assert.equal(4, mySum(2, 2));
    });
});

function mySum(x, y) {
    return x + y;
}
