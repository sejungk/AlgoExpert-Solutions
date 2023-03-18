function longestPeak(array) {
  let greatestPeak = 0;


  for (let i = 1; i < array.length-1; i++) {
    let left = i - 1;
    let right = i + 1;
    let currentPeak = 0;
    
    if (array[left] < array[i] && array[i] > array[right]) {
      currentPeak = 3;
      while (array[left-1] < array[left] && left > 0) {
        currentPeak++;
        left--;
      }
      while (array[right+1] < array[right] && right < array.length-1) {
        currentPeak++;
        right++;
      }
      greatestPeak = Math.max(currentPeak, greatestPeak);
    }
  }
  return greatestPeak;
}


// Do not edit the line below.
exports.longestPeak = longestPeak;

