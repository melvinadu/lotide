// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = function(string) {
  const results = {}

  for (const letter of string) {
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

}



const result1 = countLetters("LHL");

assertEqual(result1, {
  l: 2,
  h: 1,
});