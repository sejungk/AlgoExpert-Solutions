<pre>function powerset(array) {
let subsets = [[]];
for (const elem of array) {
const length = subsets.length;
for (let i = 0; i < length; i++) {
const currentSubset = subsets[i];
subsets.push(currentSubset.concat(elem))
}
}
return subsets;
}

// Do not edit the line below.
exports.powerset = powerset;
</pre>