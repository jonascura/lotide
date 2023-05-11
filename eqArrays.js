// FUNCTION IMPLEMENTATION
const eqArrays = function(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
};

module.exports = eqArrays;