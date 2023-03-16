function longestPeak(array) {
	let counter = 0;
	for (let i = 1; i < array.length - 1; i++) {
		let tempCounter = 0;
		let left = i - 1;
		let right = i + 1;
		
		if (array[i - 1] < array[i] && array[i + 1] < array[i]) {
			tempCounter = 1;
			let leftPeak = i;
			let rightPeak = i;
			
			while (array[left] < array[leftPeak]) {
				tempCounter++;
				left--;
				leftPeak--;
			}
			
			while (array[right] < array[rightPeak]) {
				tempCounter++;
				right++;
				rightPeak++;
			}
			
			if (tempCounter > counter) {
				counter = tempCounter;
			}
		}
	}
  return counter;
}


// Do not edit the line below.
exports.longestPeak = longestPeak;

