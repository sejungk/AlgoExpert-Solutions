function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
  let idxOne = 0;
	let idxTwo = 0;
	let smallestDiff = Infinity;
	let currentDiff =  Infinity;
	let smallestPair = [];
	
	while (idxOne < arrayOne.length && idxTwo < arrayTwo.length ) {
		let firstNum = arrayOne[idxOne];
		let secondNum = arrayTwo[idxTwo];
		if (firstNum < secondNum) {
			currentDiff = secondNum - firstNum; //subtract the smaller num from larger num to prevent negative sums
			idxOne++; //increment smaller num idx to bring closer to second num
		}
		else if (firstNum > secondNum) {
				currentDiff = firstNum - secondNum;
				idxTwo++;
		} else { // if firstNum === secondNum return immediately because 0 is the smallest possible diff
			return [firstNum, secondNum];
		}
		if (smallestDiff > currentDiff) {
			smallestDiff = currentDiff;
			smallestPair = [firstNum, secondNum];
		}
	}
	return smallestPair;
}


// Do not edit the line below.
exports.smallestDifference = smallestDifference;



