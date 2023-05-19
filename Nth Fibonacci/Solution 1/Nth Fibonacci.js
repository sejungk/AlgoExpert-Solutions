// function getNthFib(n) {
//   if (n === 1) return 0;
//   if (n === 2) return 1;


//   return getNthFib(n-1) + getNthFib(n-2);
// }


// function getNthFib(n, memo = {1: 0, 2: 1}) {
//   // we need to use n in memo and not memo[n] because...
//   // memo[1] = 0 which will return false
//   if (n in memo) return memo[n];
//   else {
//     memo[n] = getNthFib(n-1, memo) + getNthFib(n-2, memo);
//     return memo[n];
//   }
// }


function getNthFib(n, memo = {1: 0, 2: 1}) {
  let prev2Nums = [0, 1];


  if (n === 1) return 0;
  if (n === 2) return 1;
  
  let currNum = 3;
  
  while (currNum <= n) {
    let newSum = prev2Nums[0] + prev2Nums[1];
    prev2Nums[0] = prev2Nums[1];
    prev2Nums[1] = newSum;
    currNum++;
  }
  return prev2Nums[1];
}
// Do not edit the line below.
exports.getNthFib = getNthFib;

