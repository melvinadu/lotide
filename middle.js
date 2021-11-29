// FUNCTION IMPLEMENTATION

const middle = function(array) {
  let newArray = [];

  if (array.length < 3) {

    return newArray;

  } else if (array.length % 2 !== 0) {

    let j = (array.length / 2 - 0.5) + 1;

    newArray = [j];

    return newArray;

  } else if (array.length % 2 === 0) {

    let i = (array.length / 2);
    let p = i + 1;

    newArray = [i,p]

    return newArray;

  } 

}
/*
//TEST CODE
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
*/

module.exports = middle;