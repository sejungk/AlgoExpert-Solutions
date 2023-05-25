//   if (height <= 1) return 1;


//   let numberOfWays = 0;
//   for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
//     numberOfWays += calcSteps(height - step, maxSteps)
//   }
//   return numberOfWays;
// }




















// function staircaseTraversal(height, maxSteps) {
//   let currentNumberOfWays = 0;
//   let waysToTop = [1];


//   for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
//     const startOfWindow = currentHeight - maxSteps - 1;
//     const endOfWindow = currentHeight - 1;
//     if (startOfWindow >= 0) currentNumberOfWays -= waysToTop[startOfWindow];


//     currentNumberOfWays += waysToTop[endOfWindow];
//     waysToTop.push(currentNumberOfWays);
//   }
//   return waysToTop[height]
// }












function staircaseTraversal(height, maxSteps) {
  return findWaysToTop(height, maxSteps, {0: 1, 1: 1});
}


function findWaysToTop(height, maxSteps, steps) {
  if (height in steps) return steps[height];


  let waysToTop = 0;
  for (let i = 1; i < Math.min(height, maxSteps) + 1; i++) {
    waysToTop += findWaysToTop(height - i, maxSteps, steps);
  }
  steps[height] = waysToTop;
  return waysToTop;
}
// Do not edit the line below.
exports.staircaseTraversal = staircaseTraversal;

