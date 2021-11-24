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

let newArray = [];

const middle = function(array) {
  
  if (array.length < 3) {

    console.log(newArray);

    return newArray;

  } else if (array.length % 2 !== 0) {

    let j = (array.length / 2 - 0.5) + 1;

    newArray = [j];

    console.log(newArray);

    return newArray;

  } else if (array.length % 2 === 0) {

    let i = (array.length / 2);
    let p = i + 1;

    newArray = [i,p]

    console.log(newArray);

    return newArray;

  } 
}

//TEST CODE
middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]