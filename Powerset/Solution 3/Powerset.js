function powerset(array, idx = null) {
  if (idx === null) idx = array.length - 1;
  if (idx < 0) return [[]];


  let elem = array[idx];
  let subsets = powerset(array, idx - 1);
  let length = subsets.length
  
  for (let i = 0; i < length; i++) {
    const currSubset = subsets[i]
    subsets.push(currSubset.concat(elem))
  }
 return subsets;
}


// Do not edit the line below.
exports.powerset = powerset;

