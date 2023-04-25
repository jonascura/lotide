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

const without = function(source, itemsToRemove) {
  let list = [];
  for (let item of itemsToRemove) {
    //console.log("item is:", item)
    for (let index of source) {
      if (index !== item) {
        list.push(index);
        // console.log(index, "pushed")
      }
    }
  }
  return list;
};

// TEST CODE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [2, 1]), [1, 2, 3]); // doesn't work correctly with multiple items to remove
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(without(["1", "2", "3"], ["1"]), ["1", "2", "3"]);