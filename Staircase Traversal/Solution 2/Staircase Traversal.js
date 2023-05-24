function staircaseTraversal(height, maxSteps) {
  return numberOfWaysToTop(height, maxSteps, {0: 1, 1: 1});
}


function numberOfWaysToTop(height, maxSteps, memo) {
  if (height in memo) return memo[height];


  let numberOfWays = 0;
  for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
    numberOfWays += numberOfWaysToTop(height - step, maxSteps, memo);
  }
  memo[height] = numberOfWays;
  
  return numberOfWays;
}


// Do not edit the line below.
exports.staircaseTraversal = staircaseTraversal;

