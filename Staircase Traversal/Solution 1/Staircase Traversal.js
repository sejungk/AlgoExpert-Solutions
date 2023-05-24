//   let numberOfWays = 0;
//   for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
//     numberOfWays += numberOfWaysToTop(height - step, maxSteps, memo);
//   }
//   memo[height] = numberOfWays;
  
//   return numberOfWays;
// }
























// function staircaseTraversal(height, maxSteps) {
//   return calcSteps(height, maxSteps);
// }


// function calcSteps(height, maxSteps) {
//   if (height <= 1) return 1;


//   let numberOfWays = 0;
//   for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
//     numberOfWays += calcSteps(height - step, maxSteps)
//   }
//   return numberOfWays;
// }




















function staircaseTraversal(height, maxSteps) {
  let currentNumberOfWays = 0;
  let waysToTop = [1];


  for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
    const startOfWindow = currentHeight - maxSteps - 1;
    const endOfWindow = currentHeight - 1;
    if (startOfWindow >= 0) currentNumberOfWays -= waysToTop[startOfWindow];


    currentNumberOfWays += waysToTop[endOfWindow];
    waysToTop.push(currentNumberOfWays);
  }
  return waysToTop[height]
}
// Do not edit the line below.
exports.staircaseTraversal = staircaseTraversal;

