function isMonotonic(array) {
	let isNonDecreasing = true;
	let isNonIncreasing = true;
	
	for (let i = 0; i < array.length; i++) {
		if(array[i] < array[i+ 1]) isNonIncreasing = false;
		if (array[i] > array[i + 1]) isNonDecreasing = false;
	}
	return isNonDecreasing || isNonIncreasing;
}
// Do not edit the line below.
exports.isMonotonic = isMonotonic;

