// function nonConstructibleChange(coins) {
//   let sorted = coins.sort((a, b) => a - b);
//   let largestCoin = sorted[sorted.length-1];
  
//   for (let i = 1; i < largestCoin; i++) {
//     let currentSum = i;
//     let left = 0;
//     let right = sorted.length-1;


//     while (left < right) {
//       if (sorted[left] + sorted[right] === currentSum) break;
//         left++;
//         right--;
//     }
//     if (sorted[left] + sorted[right] !== currentSum) return i;
//   }
// }
function nonConstructibleChange(coins) {
  let sorted = coins.sort((a, b) => a - b);
  let currentSum = 0;


  for (let coin of sorted) {
    if (coin > currentSum + 1) {
      return currentSum + 1;
    }
    currentSum += coin;
  }
  
  return currentSum + 1;
}


// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;

