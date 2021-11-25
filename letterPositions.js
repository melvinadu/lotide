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

const letterPositions = function(sentence) {
  
    const results = {}
  
    for (const position of sentence) {
      // inside the loop, 
      // increment the counter for each item:
      //   set a property with that string key to:
      //     the value that was already there (or zero if nothing there) with 1 added to it.
      
     
        if (results[letter]) {
          results[letter] += 1;
        } else {
          results[letter] = 1;
        }
      
      console.log(letter);
    }
  
    console.log(results);
    return results;
  
};

//TEST CODE
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2]);
assertArraysEqual(letterPositions("hello").o, [4]);
