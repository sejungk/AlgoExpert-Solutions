<pre>function getPermutations(array, output = []) {
const permutations = [];
permutationsHelper(array, [], permutations);
return permutations;
}

function permutationsHelper(array, currentPermutation, permutations) {
if (!array.length && currentPermutation.length) {
permutations.push(currentPermutation);
} else {
for (let i = 0; i < array.length; i++) {
// this removes the current index bc slice is not inclusive of 2nd param
// and we add slice i+1 tp exclude curr num at idx i
const newArray = array.slice(0, i).concat(array.slice(i + 1));
const newPermutation = currentPermutation.concat([array[i]]);
permutationsHelper(newArray, newPermutation, permutations);
}
}
}

// Do not edit the line below.
exports.getPermutations = getPermutations;
</pre>