function bestSeat(seats) {
  let left = 0;
  let bestSeat = -1;
  let largestSpace = 0;


  while (left < seats.length) {
    let right = left + 1;
    let availableSpace = 0;
    while (right < seats.length && seats[right] === 0) {
      availableSpace = right - left;
      right++;
    }
    if (availableSpace > largestSpace) {
      bestSeat = Math.ceil(left + (availableSpace / 2));
      largestSpace = availableSpace;
    }
    left = right;
  }
  return bestSeat;
}


// Do not edit the line below.
exports.bestSeat = bestSeat;

