const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should FAIL
