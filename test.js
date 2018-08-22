var assert = require('assert');

function square(a) {
  return a * a;
}

assert(square(4))
assert.equal(square(4), 16); //<co id="callout-testing-travis-test-1" />
