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

const flatten = function(array) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 0) {
      for (let j = 0; j < array[i].length; j++) {
        flattened.push(array[i][j]);
      }
    } else {
      flattened.push(array[i]);
    }
  }
  console.log(flattened);
};

// TEST CODE
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]