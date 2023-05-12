const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

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

module.exports = eqObjects;