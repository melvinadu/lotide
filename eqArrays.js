// FUNCTION IMPLEMENTATION
const eqArrays = function(firstArray, secondArray) {
  
  let longerArrayLength = 0;
  
  if (firstArray.length > secondArray.length) {
    longerArrayLength = firstArray.length;
  } else {
    longerArrayLength = secondArray.length;
  }
  
  for (let i = 0; i < longerArrayLength; i++) {
    
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
}


const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should FAIL

/*const array = [1, 2];
console.log(1 === 1);
console.log(array === array);
console.log(array === [1, 2]);*/