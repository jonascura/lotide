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
      results[sentence[index]] = [Number(index)];
    } else {
      results[sentence[index]].push(Number(index)); // its adding the numbers together
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

const result1 = letterPositions("lighthouse in the house");
console.log(result1);
assertArraysEqual(result1["n"], [12]);