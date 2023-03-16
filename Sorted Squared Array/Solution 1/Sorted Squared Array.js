function sortedSquaredArray(array) {
  let squared = []
  for (let i = 0; i < array.length; i++) {
    squared.push(array[i] * array[i]);
  }
  return squared.sort((a, b) => a - b);
}


// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;

