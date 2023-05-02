const takeUntil = function(array, callback) {
  // ...
  let results = [];
  // needs to loop that stops when value of callback function is true
  for (let i of array) {
    if (callback(i)) {
      return results;
    } else {
      results.push(i);
    }
  }
  return results;
};

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

//console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);