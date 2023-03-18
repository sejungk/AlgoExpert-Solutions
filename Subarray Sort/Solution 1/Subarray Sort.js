function subarraySort(array) {
  let first = Infinity;
  let last = -Infinity;
  for (let i = 0; i < array.length-1; i++) {
    let currNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let traverse = array[j];
      if (traverse < currNum) {
        first = Math.min(first, i);
        last = Math.max(last, j);
      }
    }
  }
  if (first !== Infinity) return [first, last];
  return [-1, -1]
}


// Do not edit the line below.
exports.subarraySort = subarraySort;

