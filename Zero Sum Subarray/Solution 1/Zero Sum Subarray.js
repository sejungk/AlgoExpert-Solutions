function zeroSumSubarray(nums) {
  let totalSums = {0: true};
  let runningSum = 0;
  
  for (const num of nums) {
    runningSum += num;
    if (totalSums[runningSum]) return true;
    totalSums[runningSum] = true;
  }
  return false;
}


// Do not edit the line below.
exports.zeroSumSubarray = zeroSumSubarray;

