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
  let numberOfWays = [1];
  let currentNumberOfWays = 0;
  
  for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
    // step 1, step 2, step 3
    // idx 0,  idx 1,  idx 2
    // we subtract one to account for 0 based indexing
    //ex. currentHeight = 5, maxStep = 3, start of window should be step 2
    // step 2 would be located at idx 1
    const startOfWindow = currentHeight - maxSteps - 1;
    const endOfWindow = currentHeight - 1;
    if (startOfWindow >= 0) currentNumberOfWays -= numberOfWays[startOfWindow];
   
    currentNumberOfWays += numberOfWays[endOfWindow];
    numberOfWays.push(currentNumberOfWays)
  }
  return numberOfWays[height];
}
// Do not edit the line below.
exports.staircaseTraversal = staircaseTraversal;

