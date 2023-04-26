// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  const count = {};

  for (let letter of word) {
    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }
  return count;
};

const result = countLetters("HELLO");
console.log(result);
assertEqual(result["H"], 1);