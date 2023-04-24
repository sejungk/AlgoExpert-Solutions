function missingNumbers(nums) {
  let includedNums = new Set(nums);
  let solution = [];
  
  for (let num = 1; num < nums.length + 3; num++) {
    if (!includedNums.has(num)) solution.push(num);
  }
  return solution;
}


// Do not edit the line below.
exports.missingNumbers = missingNumbers;

