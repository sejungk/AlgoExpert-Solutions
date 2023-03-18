function isMonotonic(array) {
  let monotonic = null;
  let prevNum = array[0];


  for (let i = 1; i < array.length; i++) {
    let currNum = array[i];
    if ((prevNum > currNum && monotonic === 1) || (prevNum < currNum && monotonic === -1)) {
      return false
    }


    if (!monotonic && prevNum > currNum) monotonic = -1;
    else if (!monotonic && prevNum < currNum) monotonic = 1;


    prevNum = currNum;
  }
  return true;
}


// Do not edit the line below.
exports.isMonotonic = isMonotonic;

