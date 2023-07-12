function hasSingleCycle(array) {
  let visited = 0;
  let startIdx = 0;
  let i = 0;
  
  while (visited < array.length) {
    if (visited !== 0 && i === startIdx) return false;
    visited++;
    i = getNextIdx(i, array);
  }
  return i === startIdx;
}


function getNextIdx(i, array) {
  i = (i + array[i]) % array.length;
  if (i < 0) i = array.length + i;
  return i;
}


exports.hasSingleCycle = hasSingleCycle;

