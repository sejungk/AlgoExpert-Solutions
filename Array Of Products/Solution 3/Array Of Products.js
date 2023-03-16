function arrayOfProducts(array) {
  let product =  new Array(array.length).fill(1);
  
  let forwardRunningProd = 1;
  for (let i = 0; i < array.length-1; i++) {
    forwardRunningProd = forwardRunningProd * array[i];
    product[i+1] = forwardRunningProd;
  }


  let reverseRunningProd = 1;
  for (let j = array.length-1; j >= 0; j--) {
    reverseRunningProd = reverseRunningProd * array[j];
    product[j-1] = product[j-1] * reverseRunningProd;
  }
  return product;
}


// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;

