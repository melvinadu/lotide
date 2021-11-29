// FUNCTION IMPLEMENTATION

const middle = function(array) {
  let newArray = [];

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

module.exports = middle;