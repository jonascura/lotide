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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
// console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);