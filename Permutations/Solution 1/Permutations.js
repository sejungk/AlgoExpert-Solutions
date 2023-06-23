function getPermutations(array) {
  const permutations = [];
  permutationsBuilder(array, [], permutations);
  return permutations;
}


function permutationsBuilder(array, currPermutation, permutations) {
  if (!array.length && currPermutation.length) permutations.push(currPermutation);
  else {
    for (let i = 0; i < array.length; i++) {
      // native function slice is O(n) time
      let newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPerm = currPermutation.concat(array[i]);
      permutationsBuilder(newArray, newPerm, permutations);
    }
  }
}




// Do not edit the line below.
exports.getPermutations = getPermutations;

