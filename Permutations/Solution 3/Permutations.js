function getPermutations(array) {
  let results = [];
  permutationsHelper(0, array, results);
  return results;
}


function permutationsHelper(i, array, results) {
  if (i === array.length - 1) results.push(array.slice());
  else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      permutationsHelper(i + 1, array, results);
      swap(i, j, array);
    }
  }
}


function swap (i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


// Do not edit the line below.
exports.getPermutations = getPermutations;

