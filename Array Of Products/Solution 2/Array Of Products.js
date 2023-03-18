function arrayOfProducts(array) {
	
	let products = [];
	let currProduct = 1;
	
  for (let i = 0; i < array.length; i++) {
		if (i > 0) currProduct *= array[i - 1];
		products.push(currProduct);
	}
	
	currProduct = 1;
	for (let j = array.length - 1; j >= 0; j--){
		if (j < array.length - 1) currProduct *= array[j + 1];
		products[j] *= currProduct;
	}
	return products;
}


// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;

