function getPermutations(array) {
  const permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations;
}


function permutationsHelper(i, array, permutations) {
  if (i === array.length-1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      permutationsHelper(i+1, array, permutations);
      swap(i, j, array);
    }
  }
}


function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


// Do not edit the line below.
exports.getPermutations = getPermutations;

