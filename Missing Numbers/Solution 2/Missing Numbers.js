function missingNumbers(nums) {
  const sorted = nums.sort((a, b) => a - b); // Sort the input array
  const missingNums = [];


  let currNum = 1;
  for (let i = 0; i < sorted.length + 2; i++) {
    while (sorted[i] !== currNum && currNum <= sorted.length + 2) {
      missingNums.push(currNum);
      currNum++;
    }
    currNum++; // Update the expected number
  }


  return missingNums;
}


// Do not edit the line below.
exports.missingNumbers = missingNumbers;

