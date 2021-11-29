/*
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



const words = ["ground", "control", "to", "major", "tom"];
*/

let map = function (array, callback) {

  let results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
}
/*
const results1 = map(words, word => word[0]);
console.log(results1);


// TEST CODE
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // => should PASS
*/

module.exports = map;