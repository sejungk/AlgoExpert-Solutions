function numberOfWaysToMakeChange(n, denoms, memo = {}, idx = 0) {
  let key = n + ',' + idx;
  if (key in memo) return memo[key];
  if (n === 0) return 1;
  if (n < 0) return 0;


  let numOfWays = 0;
  let coin = denoms[idx];
  for (let qty = 0; (coin * qty) <= n; qty++) {
    let currNum = numberOfWaysToMakeChange(n - (coin * qty), denoms, memo, idx + 1);
    numOfWays += currNum;
  }
  memo[key] = numOfWays;
  return numOfWays;
}


// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;

