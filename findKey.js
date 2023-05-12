const findKey = function(object, callback) {
  for (let index in object) {
    if (callback(object[index])) {
      return index;
    }
  }
};

module.exports = findKey;