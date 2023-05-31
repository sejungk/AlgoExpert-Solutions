// time: O(low * high * n) || space: O(low * high)
// we need to reduce to be both negative values before we return a value
// for every recursive call we need to check every cup
// we may need to consider every single combination of low and high range values


function ambiguousMeasurements(measuringCups, low, high) {
  const memo = {};
  return canMeasureInRange(measuringCups, low, high, memo)
}






function canMeasureInRange(measuringCups, low, high, memo) {
  // create unique key for low/high value range
  const memoKey = createHashableKey(low, high);
  // if we've already made a function call with the same low/high values
  // already made calculation for this range, return memoKey
  if (memoKey in memo) return memo[memoKey];


  // if we haven't already made this calculation before, check base case
  // base case: if our low/high values are negative
  if (low < 0 && high < 0) return false;


  // start of recursive case
  let canMeasure = false;
  // loop through all measuring cups so we can try each one
  for (const cup of measuringCups) {
    const [cupLow, cupHigh] = cup;


    // check if measuring cup range (low and high cup values) is within the range we are trying to measure
    // this cup is in between or equal to range we're trying to measure
    if (low <= cupLow && cupHigh <= high) {
      // we can use this cup and break out of loop bc we know we can solve this problem
      canMeasure = true;
      break;
    }


    // in this case both low/high values are not negative and this cup is not within the range