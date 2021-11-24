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

const assertArraysEqual = function(firstArray, secondArray) {
    
  if (firstArray.length !== secondArray.length) {
    console.log("The first array is NOT equal to the second array.");
    return false;
  } 
  
  for (let i = 0; i < firstArray.length; i++) {
    
    if (firstArray[i] !== secondArray[i]) {
      console.log("The first array is NOT equal to the second array.");
      return false;
    } 

  }
  
  console.log("The first array IS equal to the second array.");
  return true;
  
}

// FUNCTION IMPLEMENTATION

const without = function(source, itemsToRemove) {
  
  let longerArrayLength = 0;
  let newArray = [];


  for (let i = 0; i < source.length; i++) {
    
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    } 
  }
  console.log(newArray);
  return newArray;
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);