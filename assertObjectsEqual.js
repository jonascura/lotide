const eqArrays = function(a, b) {
  return JSON.stringify(a) === JSON.stringify(b); // turns arrays into strings for comparison
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  // handle amount of keys in object
  if (Object.keys(object1).length === Object.keys(object2).length) {
    let isTrue = false;
    // iterate through the keys and values
    for (let key1 of Object.keys(object1)) {
      // check if key is an array or primative
      if (Array.isArray(object1[key1])) {
        if (!eqArrays(object1[key1], object2[key1])) { // if not true
          return false; // return false and terminate function
        } else {
          isTrue = true; // can't use return because it terminates the function not allowing loop if needed, change isTrue value instead
        }
      } else if (object1[key1] === object2[key1]) {
        isTrue = true; // can't use return because it terminates the function not allowing loop if needed, change isTrue value instead
      } else {
        return false; // terminate function once false
      }
    }
    return isTrue;
  } else {
    return false;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};


const multiColorShirtObject = {  colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
//eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
//assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);


const aWrongMultiColorShirtObject = { size: "medium", colors: ["red", "green"] };
//eqObjects(multiColorShirtObject  , aWrongMultiColorShirtObject); // => false
//assertEqual(eqObjects(multiColorShirtObject  , aWrongMultiColorShirtObject), false);
assertObjectsEqual(multiColorShirtObject  , aWrongMultiColorShirtObject);

const aWrongSizedMultiColorShirtObject = { size: "large", colors: ["red", "blue"] };
//eqObjects(multiColorShirtObject  , aWrongSizedMultiColorShirtObject); // => false
//assertEqual(eqObjects(multiColorShirtObject  , aWrongSizedMultiColorShirtObject), false);
assertObjectsEqual(multiColorShirtObject  , aWrongSizedMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
//eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
//assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject);

console.log();
console.log("primative tests:");
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
//eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
//assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertObjectsEqual(shirtObject , anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
//eqObjects(shirtObject , longSleeveShirtObject); // => false
//assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
assertObjectsEqual(shirtObject , longSleeveShirtObject);