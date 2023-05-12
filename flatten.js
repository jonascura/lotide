const flatten = function(array) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 0) {
      for (let j = 0; j < array[i].length; j++) {
        flattened.push(array[i][j]);
      }
    } else {
      flattened.push(array[i]);
    }
  }
  console.log(flattened);
};

module.exports = flatten;