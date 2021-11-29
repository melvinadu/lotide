// FUNCTION IMPLEMENTATION
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



/*const array = [1, 2];
console.log(1 === 1);
console.log(array === array);
console.log(array === [1, 2]);*/

module.exports = assertArraysEqual;