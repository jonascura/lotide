// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // Has to check all values of original array
  // Compares itemsToCount to allItems
  // if item is there, return all values of item repetition
  
  // check itemsToCount
  for (item in itemsToCount) {
    count = 0
    //console.log(item) // Name value
    //console.log(itemsToCount[item]) // Truthy or falsey
    if (itemsToCount[item] === true) {
      for (index in allItems) {
        // console.log(index) // Number index
        // console.log(allItems[index]) // name value
        if (item === allItems[index]) {
          // console.log('They match here')
          count += 1
        }
      }
    }
    console.log(item + ':', count)
  }
}




const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });