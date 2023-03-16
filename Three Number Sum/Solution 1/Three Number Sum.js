function threeNumberSum(array, targetSum) {
 	array.sort((a, b) => a - b);
	const triplets = [];
	for (let i = 0; i < array.length - 2; i++) {
		let left = i + 1;
		let right = array.length - 1;
		
		while (left < right) {
			let possibleSum = array[i] + array[left] + array[right];
			if (possibleSum === targetSum) {
				triplets.push([array[i], array[left], array[right]])
				left++;
				right--;
			}
			else if (possibleSum < targetSum) {
				left++;
			}
			else if(possibleSum > targetSum) {
				right--;
			}
		}
	}
	return triplets
}






// sort the array
// array =[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 4
// [[-5, 2, 3] [,5, 0, 5], ...]
// Initialize empty tripet array
// create placeholder variable = array[0] = -5
// add two pointers, 
// let left = 1 => array[left] = array[1]
// let right = array.length-1 => array[right] => array[10]
// Ask, is left + right + placeholder > or < targetSum