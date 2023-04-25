const eqArrays = function(a, b) {
  return JSON.stringify(a) === JSON.stringify(b); // turns arrays into strings for comparison
};

const assertArraysEqual = function(a, b) {
  if (eqArrays(a, b) === true) {
    console.log("Assertion Passed:", a, "===", b);
  } else {
    console.log("Assertion Failed:", a, "!==", b);
  }
};

const middle = function(array) {
  let middle = [];
  if (array.length > 2) {
    if ((array.length % 2) !== 0) { //isOdd
      middle.push((array[Math.floor(array.length / 2)]));
    } else if ((array.length % 2) === 0) { //isEven
      middle.push(array[(array.length / 2) - 1]);
      middle.push(array[(array.length / 2) + 1]);
    }
  }
  console.log(middle);
};

// TEST CODE
middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]