  // i = 0, while i < array.length...
			// initilize currProduct var
			// check if any #s on the left and right of i
			// if yes, 
			// multiply it to the current product
			// once we iterate through all nums 
			// push into results array
			// increment i
			// if i = array.length return results
function arrayOfProducts(array) {
	let i = 0;
	let results = [];
	
	while (i < array.length) {
		let currProduct = 1;
		let left = i - 1;
		let right = i + 1;
		
		while (left >= 0) {
			currProduct *= array[left];
			left--;
		}
		while (right < array.length) {
			currProduct *= array[right];
			right++;
		}
		results.push(currProduct);
		i++
	}
	return results;
}


// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;

