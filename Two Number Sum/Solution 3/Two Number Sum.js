function twoNumberSum(array, targetSum) {
  let hash = {};


  for (let i = 0; i < array.length; i++) {
    let difference = targetSum - array[i];


    if (hash[difference]) return [array[i], difference];
    else hash[array[i]] = true;
    console.log(hash);
  }
  return [];
}


// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

