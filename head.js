// FUNCTION IMPLEMENTATION
const head = function(array) {

  return array[0];

};

// TEST CODE

console.log(head([5,6,7]));
console.log(head([]));


const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([5]), 5);
assertEqual(head([""]), "Hello");