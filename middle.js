const middle = function(array) {
  let middle = [];
  if (array.length > 2) {
    if ((array.length % 2) !== 0) { //isOdd
      middle.push((array[Math.floor(array.length / 2)]));
    } else if ((array.length % 2) === 0) { //isEven
      middle.push(array[(array.length / 2) - 1]);
      middle.push(array[(array.length / 2)]);
    }
  }
  return middle;
};

module.exports = middle;