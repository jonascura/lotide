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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let index in sentence) { // Catches letters in sentence
    if (!results[sentence[index]]) { // if sentence[index] (or letter) has not been captured yet
      results[sentence[index]] = index
    } else {
      results[sentence[index]] += ', ' + index
    }
  }
  return results;
};

const result = countLetters("HELLO");
console.log(result);
assertEqual(result["H"], 1);

const result1 = letterPositions("lighthouse in the house");
console.log(result1);
assertEqual(result1["l"], 0);