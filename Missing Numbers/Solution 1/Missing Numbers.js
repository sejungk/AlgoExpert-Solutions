function missingNumbers(nums) {
  let foundNums = {};
  let missingNums = [];
  
  for (let i = 1; i <= nums.length + 2; i++) {
    foundNums[i] = false;
  }
  
  for (const num of nums) {
    if (!foundNums[num]) foundNums[num] = true; 
  }


  for (const [key, value] of Object.entries(foundNums)) {
    if (!value) missingNums.push(Number(key));
  }
  
  return missingNums;
}


// Do not edit the line below.
exports.missingNumbers = missingNumbers;

