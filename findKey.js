/*
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
*/

const findKey = function(object, callback) {
  
  let arrayOfValues = Object.values(object);
  
  let arrayOfKeys = Object.keys(object);
 

  for (let item in arrayOfValues) {
    
    if (callback(arrayOfValues[item])) {
      
      return arrayOfKeys[item];
    } 
    
  } 

  return undefined;

  /*if () {
    console.log("1")
    for (let item of arrayOfKeys) {
      console.log(item)
      return item;
    } 
  } else {
    return undefined;
  }

  return callback(object);*/
};

/*
console.log(findKey({
  "Blue Hill": { stars: 0 },
  "Akaleri":   { stars: 0 },
  "noma":      { stars: 0 },
  "elBulli":   { stars: 0 },
  "Ora":       { stars: 0 },
  "Akelarre":  { stars: 3 }
}, value => value.stars === 3)); // => "noma"

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))

*/

module.exports = findKey;