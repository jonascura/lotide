const without = function(source, itemsToRemove) {
  let list = [];
  for (let item of itemsToRemove) {
    //console.log("item is:", item)
    for (let index of source) {
      if (index !== item) {
        list.push(index);
        // console.log(index, "pushed")
      }
    }
  }
  return list;
};

module.exports = without;