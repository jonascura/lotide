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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // handle amount of keys in object
  if (Object.keys(object1).length === Object.keys(object2).length) {
    let isTrue = false
    // iterate through the keys and values
    for (let key1 of Object.keys(object1)) {
      console.log("the key we are checking is:", key1) // visualize current key
      // check if key is an array or primative
      if (Array.isArray(object1[key1])) {
        console.log("this key is an ARRAY!!"); // confirmation of array
        console.log("arrays are", object1[key1], object2[key1]); // visualize arrays
        if (!eqArrays(object1[key1], object2[key1])) { // if not true
          console.log("the arrays DO NOT match");
          return false; // return false and terminate function
        } else {
          console.log("the arrays match");
          isTrue = true; // can't use return because it terminates the function not allowing loop if needed, change isTrue value instead
        }
      } else if (object1[key1] === object2[key1]) {
        console.log("it's primative"); // confirm not array
        console.log("the values are:", object1[key1] + ',', object2[key1]); // visualize values
        console.log("primatives match"); // confirm match
        isTrue = true; // can't use return because it terminates the function not allowing loop if needed, change isTrue value instead
      } else {
          console.log("primatives DO NOT match"); // confirm not match
          return false; // terminate function once false
      }
    }
    return isTrue;
  } else {
    return false;
  }
};

console.log('same size and color >> true');
const multiColorShirtObject = {  colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
//eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

console.log();
console.log('same size wrong color >> false');
const aWrongMultiColorShirtObject = { size: "medium", colors: ["red", "green"] };
//eqObjects(multiColorShirtObject  , aWrongMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , aWrongMultiColorShirtObject), false);

console.log();
console.log('wrong size right color >> false');
const aWrongSizedMultiColorShirtObject = { size: "large", colors: ["red", "blue"] };
//eqObjects(multiColorShirtObject  , aWrongSizedMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , aWrongSizedMultiColorShirtObject), false);

console.log();
console.log("keys don't match >> false");
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
//eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);

console.log();
console.log("primative tests:");
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
//eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
//eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);