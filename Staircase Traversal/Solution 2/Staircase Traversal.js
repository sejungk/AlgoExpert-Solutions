function staircaseTraversal(height, maxSteps) {
  // we want our array to be height+1 long because 
  // we need to include our base case of 0
  
  let steps = new Array(height+1).fill(0); 
  steps[0] = 1;
  steps[1] = 1;


  for (let currentHeight = 2; currentHeight < steps.length; currentHeight++) {
    let step = 1;
    while (step <= maxSteps && step <= currentHeight) {
      steps[currentHeight] = steps[currentHeight] + steps[currentHeight-step];
      step++;
    }
  }
  return steps[height];
}


// Do not edit the line below.
exports.staircaseTraversal = staircaseTraversal;

