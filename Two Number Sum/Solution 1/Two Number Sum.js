function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];
      if (sum === targetSum) return [array[i], array[j]];
    }
  }
  
  return [];
}






// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

