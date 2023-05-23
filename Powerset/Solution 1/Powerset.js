function powerset(array) {
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


function findSubsets(subsets, array, i) {
  if (!array.length) subsets.push(array);


  for (let j = i; j < array.length; j++) {
    let removed = array.slice(0, i).concat(array.slice(i+1));
    
  }
}


// Do not edit the line below.
exports.powerset = powerset;

