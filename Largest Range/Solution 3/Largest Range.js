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
      let currRange = 1;
      let left = num;
      let right = num;


      nums[num] = false;
      
      while (nums[left - 1]) {
        nums[left] = false;
        currRange++;
        startingIdx = left;
        left -= 1;
      }
      while (nums[right + 1]) {
        nums[right] = false;
        currRange++;
        endingIdx = right;
        right += 1;
      }


      if (currRange > range) {
        range = currRange;
        longestRange = [left, right]
      }
    }
  }
  return longestRange;
}


// Do not edit the line below.
exports.largestRange = largestRange;

