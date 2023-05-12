const letterPositions = function(sentence) {
  const results = {};
  for (let index in sentence) {
    if (!results[sentence[index]]) {
      results[sentence[index]] = [Number(index)];
    } else {
      results[sentence[index]].push(Number(index));
    }
  }
  return results;
};

module.exports = letterPositions;