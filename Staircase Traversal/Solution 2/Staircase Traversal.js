function staircaseTraversal(height, maxSteps) {
  // we want our array to be height+1 long because 
  // we need to include our base case of 0
  let waysToTop = new Array(height+1).fill(0); 
  waysToTop[0] = 1;
  waysToTop[1] = 1;


  for (let currentHeight = 2; currentHeight < waysToTop.length; currentHeight++) {
    let step = 1;
    // go through all steps that are one step away from top 
    // ex. height 4, maxSteps = 2
    // waysToTop[currentHeight] = waysToTop[4] + waysToTop[3]
    // waysToTop[currentHeight] = waysToTop[4] + waysToTop[2]


    while (step <= maxSteps && step <= currentHeight) {
      waysToTop[currentHeight] = waysToTop[currentHeight] + waysToTop[currentHeight-step];
      step++;
    }
  }
  return waysToTop[height];
}


// Do not edit the line below.
exports.staircaseTraversal = staircaseTraversal;

