function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  let i = 0;
  console.log(array);
  
  while (i < array.length-1) {
    console.log(array[i])
      let currPair = array[i];
      let nextPair = array[i + 1];
  
      if (currPair[1] >= nextPair[0]) {
        array[i] = [currPair[0], Math.max(nextPair[1], currPair[1])];
        array.splice(i+1, 1);
      } else {
        i++;
      }
  }
  return array;
}


// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;

