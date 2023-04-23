function bestSeat(seats) {
  let bestSeat = -1;
  let largestSpace = 0;


  let left = 0;
  while (left < seats.length) {
    let right = left + 1;
    while (right < seats.length && seats[right] === 0) {
      right++;
    }


    // here we offset by one because in our while loop we will increment one past the last 0 
    // our right pointer will end up at the first 1 after our 0s which is the condition that broke the loop
    let availableSpace = right - left -1;
    if (availableSpace > largestSpace) {
      bestSeat = Math.floor((left + right) / 2);
      largestSpace = availableSpace;
    }
    left = right;
  }
  return bestSeat;
}


// Do not edit the line below.
exports.bestSeat = bestSeat;

