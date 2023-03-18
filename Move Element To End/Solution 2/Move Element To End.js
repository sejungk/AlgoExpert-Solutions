function moveElementToEnd(array, toMove) {
  let left = 0;
	let right = array.length - 1;
	
	while (left < right) {
		while (left < right && array[right] === toMove) right--;
		if (array[left] === toMove) swap(left, right, array);
		left++;
	}
	return array
}


function swap (left, right, array) {
		let temp = array[left];
		array[left] = array[right];
		array[right] = temp;
}


// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

