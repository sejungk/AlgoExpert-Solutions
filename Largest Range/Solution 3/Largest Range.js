function largestRange(array) {
  let nums = {};
  let longestRange = [];
  let range = 0;
  
  for (const num of array) {
    nums[num] = true;
  }


  for (const num of array) {
    let startingIdx = num;
    let endingIdx = num;
    
    if (nums[num] === true) {
      nums[num] = false;
      let currLength = 1;
      let left = num-1;
      let right = num+1;
      
      while (left in nums) {
        nums[left] = false;
        currLength++;
        startingIdx = left;
        left -= 1;
      }
      while (nums[right]) {
        nums[right] = false;
        currLength++;
        endingIdx = right;
        right += 1;
      }


      if (currLength > range) {
        range = currLength;
        longestRange = [left+1, right-1]
      }
    }
  }
  return longestRange;
}


// Do not edit the line below.
exports.largestRange = largestRange;

