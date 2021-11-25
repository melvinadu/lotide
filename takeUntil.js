
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


const data1 = [0, 0, 1, 0, 2, 1];

const takeUntil = function(array, callback) {
  return callback(array);
}

const callback = function(array) {
  let newArray = [];

  for (let item of array) {
    if (!item){
      newArray.push(item);
    } else {
      break;
    }
    
  }
  return newArray;
}


const results1 = takeUntil(data1, callback)

console.log(results1);
assertArraysEqual(results1, [0, 0, 0, 0]); // => should PASS
