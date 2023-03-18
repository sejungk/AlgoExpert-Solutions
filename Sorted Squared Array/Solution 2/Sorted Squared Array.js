function sortedSquaredArray(array) {
  let left = 0; 
  let right = array.length - 1;
  let squared = new Array(array.length).fill(0)


  while (left <= right) {
    for (let i = array.length-1; i >= 0; i--) {
      if (Math.abs(array[left]) > Math.abs(array[right])) {
        squared[i] = array[left] * array[left];
        left++;
      }
      else {
        squared[i] = array[right] * array[right];
        right--;
      }
    }
  }
  return squared;
}


// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;

