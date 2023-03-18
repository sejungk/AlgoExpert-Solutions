function firstDuplicateValue(array) {
	for (let i = 0; i < array.length; i++) {
		let number = Math.abs(array[i]); //abs value because this value might be neg
		if(array[number - 1] < 0) {
			return number;
		}
		array[number - 1] *= -1;
	}
	return -1;
}


// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;

