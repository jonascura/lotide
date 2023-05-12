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

module.exports = takeUntil;