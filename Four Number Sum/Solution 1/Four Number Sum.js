function fourNumberSum(array, targetSum) {
  let pairSums = {};
  let quads = [];


  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let currSum = array[i] + array[j];
      let difference = targetSum - currSum;
      if (pairSums[difference]) {
        for (const pair of pairSums[difference]) {
          quads.push([...pair, array[i], array[j]]);
        }
      }
    }
    for (let k = 0; k < i; k++) {
      let currSum = array[i] + array[k];
      if (!(currSum in pairSums)) {
        pairSums[currSum] = [[array[k], array[i]]];
      } else {
        pairSums[currSum].push([array[k], array[i]]);
      }
    }
  }
  return quads;
}


exports.fourNumberSum = fourNumberSum;