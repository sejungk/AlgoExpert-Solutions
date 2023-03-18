function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [array[0]];
  
  for (let i = 1; i < array.length; i++) {
    const currPair = array[i];
    const lastPair = mergedIntervals[mergedIntervals.length - 1];


    if (currPair[0] <= lastPair[1]) {
      lastPair[1] = Math.max(lastPair[1], currPair[1]);
    } else {
      mergedIntervals.push(currPair);
    }
  }
  return mergedIntervals;
}


// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;

