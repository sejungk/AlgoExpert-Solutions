function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
    let currNum = Math.abs(array[i]);
    if (array[currNum-1] < 0) return currNum;
    else array[currNum-1] = array[currNum-1] * -1;
  }
  return -1;
}


// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;

