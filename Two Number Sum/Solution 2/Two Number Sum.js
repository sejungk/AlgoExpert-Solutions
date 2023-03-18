function twoNumberSum(array, targetSum) {
  let sorted = array.sort((a, b) => a - b);
  let left = 0;
  let right = sorted.length-1;


  while (left < right) {
    let sum = array[left] + array[right];


    if (sum === targetSum) return [array[left], array[right]];
    else if (sum < targetSum) left++;
    else if (sum > targetSum) right--;
  }
  return [];
}


// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

