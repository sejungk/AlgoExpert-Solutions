function largestRange(array) {
  array.sort((a, b) => a - b);
  let totalRange = 0;
  let startRange = 0;
  let left = 0;


  if (array.length === 1) {
    return [array[0], array[0]]
  }


  console.log(array)
  while (left < array.length-1) {
    let currRange = 0;
    let currStart = Infinity;


    while (array[left + 1] === array[left] + 1 || array[left + 1] === array[left]) {
      currStart = Math.min(currStart, array[left]);
      if (array[left + 1] === array[left] + 1) currRange++;
      left++;
    }
    if (currRange > totalRange) {
      totalRange = currRange;
      startRange = currStart;
    }
    left++;
  }
  console.log(startRange, totalRange)
  return [startRange, startRange + totalRange];
}


// Do not edit the line below.
exports.largestRange = largestRange;

