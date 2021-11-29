// FUNCTION IMPLEMENTATION

const tail = function(array) {

  let newArray = array.slice(1);
  return newArray;

};

/* TEST CODE

console.log(tail(["Hello", "Lighthouse", "Labs"]));
console.log(tail(["Hello"]));
console.log(tail([]));
*/

module.exports = tail;