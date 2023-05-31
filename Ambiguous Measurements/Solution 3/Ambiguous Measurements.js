function ambiguousMeasurements(measuringCups, low, high) {
  let failedCombinations = {};
  return isMeasureable(measuringCups, low, high, failedCombinations);
}
function isMeasureable(measuringCups, low, high, failedCombinations) {
  const memoKey = createHashKey(low, high);
  if (memoKey in failedCombinations) return false;
  
  if (low < 0 && high < 0) {
    failedCombinations[memoKey] = false;
    return false;
  }
  
  for (const cup of measuringCups) {
    const [cupLow, cupHigh] = cup;
    if (low <= cupLow && cupHigh <= high) return true;
    if (isMeasureable(measuringCups, low - cupLow, high - cupHigh, failedCombinations)) return true;
  }
  
  failedCombinations[memoKey] = false;
  return false;
}


function createHashKey(low, high) {
  return low.toString() + ":" + high.toString();
}


// Do not edit the line below.
exports.ambiguousMeasurements = ambiguousMeasurements;

