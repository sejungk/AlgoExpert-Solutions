function bestSeat(seats) {
  let mostSpace = 0;
  let bestSeatIdx;


  for (let i = 1; i < seats.length - 1; i++) {
    let currentSeat = seats[i];
    let currSpace = 0;
    let left = i;
    let right = i;


    if (currentSeat === 0) {
      currSpace++;
      while (seats[left - 1] === 0 && seats[right + 1] === 0 && right < seats.length && left >= 0) {
        currSpace += 2;
        left--;
        right++;
      }
      if (seats[left - 1] === 0) currSpace++;
      if (seats[right + 1] === 0) currSpace++;
    }
    
    if (currSpace > mostSpace) {
      mostSpace = currSpace;
      bestSeatIdx = i;
    }
  }
  
  if (mostSpace === 0) return -1
  return bestSeatIdx;
}


// Do not edit the line below.
exports.bestSeat = bestSeat;

