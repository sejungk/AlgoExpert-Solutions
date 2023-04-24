function missingNumbers(nums) {
  let solutionXOR = 0;
  for (let i = 0; i < nums.length + 3; i++) {
    solutionXOR ^= i;
    if (i < nums.length) {
      solutionXOR ^= nums[i];
    }
  }


  const solution = [0, 0];
  const setBit = solutionXOR & -solutionXOR;
  for (let i = 0; i < nums.length + 3; i++) {
    if ((i & setBit) === 0) {
      solution[0] ^= i;
    } else {
      solution[1] ^= i;
    }


    if (i < nums.length) {
      if ((nums[i] & setBit) === 0) {
        solution[0] ^= nums[i];
      } else {
        solution[1] ^= nums[i]
      }
    }
  }
  
  solution.sort((a, b) => a - b);
  return solution;
}


// Do not edit the line below.
exports.missingNumbers = missingNumbers;

