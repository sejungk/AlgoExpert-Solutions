function smallestDifference(arrayOne, arrayTwo) {
  arrayOne = arrayOne.sort((a, b) => a - b);
  arrayTwo = arrayTwo.sort((a, b) => a - b);
  let smallestDiff = Infinity;
  let result = [];
  let pointerOne = 0;
  let pointerTwo = 0;
  
  while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
    let currDiff = Math.abs(arrayOne[pointerOne] - arrayTwo[pointerTwo]);
    if (currDiff < smallestDiff) {
      smallestDiff = currDiff;
      result = [arrayOne[pointerOne], arrayTwo[pointerTwo]];
    } 
    if (currDiff === 0) return result;   


    else if (arrayOne[pointerOne] < arrayTwo[pointerTwo]) {
      pointerOne++;
    }
    else {
      pointerTwo++;
    }
  }
  console.log(result)
  return result;
}


// Do not edit the line below.
exports.smallestDifference = smallestDifference;

