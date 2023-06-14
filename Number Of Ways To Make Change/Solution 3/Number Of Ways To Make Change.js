function numberOfWaysToMakeChange(n, denoms) {
  let waysToMakeChange = new Array(n + 1).fill(0);
  waysToMakeChange[0] = 1;
  
  for (let coin of denoms) {
    for (let amount = 1; amount <= n + 1; amount++) {
      if (coin <= amount) {
        waysToMakeChange[amount] += waysToMakeChange[amount - coin];
      }
    }
  }
  return waysToMakeChange[n];
}


// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;

