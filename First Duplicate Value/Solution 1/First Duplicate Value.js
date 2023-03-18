function firstDuplicateValue(array) {
		const seen = {};
		for (let i = 0; i < array.length; i++) {
			let number = array[i];
			if (seen[number]) return number;
			seen[number] = true;
		}
  return -1;
}


// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;

