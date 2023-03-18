function threeNumberSum(array, targetSum) {
  array  = array.sort((a, b) => a - b);
  let results = [];
    
  for (let i = 0; i < array.length; i++) {
    let current = i;
    let right = array.length - 1;
    let left = i + 1;
    
    while (left < right) {
      let currentSum = array[current] + array[right] + array[left];
      if (currentSum === targetSum) {
        results.push([array[current], array[right], array[left]].sort((a, b) => a - b));
      }
      if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
    return results.sort((a, b) => a - b);
}


// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

