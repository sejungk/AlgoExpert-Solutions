function blackjackProbability(target, startingHand) { 
  const memo = {};
  return parseFloat(calculateProbability(startingHand, target, memo)).toFixed(3)
}


function calculateProbability(currentHand, target, memo) {
  if (currentHand in memo) return memo[currentHand];
 
  // we've already busted bc we went past the target
  // we return 1 because the probability of busting is 100%
  if (currentHand > target) return 1;


  // we reached a stopping point, were at a stand and have a 0 percent of busting
  if (currentHand + 4 >= target) return 0;


  let totalProbability = 0;
  for (let card = 1; card <= 10; card++) {
    totalProbability += 0.1 * calculateProbability(currentHand + card, target, memo);
  }
  memo[currentHand] = totalProbability;
  return totalProbability;
}


// Do not edit the line below.
exports.blackjackProbability = blackjackProbability;

