function hasSingleCycle(array) {
  let visited = new Set();
  let startingPosition = 0;
  let i = 0;
  
  while (visited.size !== array.length) {
    if (array[i] === 0 || visited.has(i)) return false;
    visited.add(i);
    i = getNextPosition(i, array);
  }
  return i === startingPosition;
}


function getNextPosition(i, array) {
  i = (i + array[i]) % array.length;
  if (i < 0) i = array.length + i;
  return i;
}


exports.hasSingleCycle = hasSingleCycle;

