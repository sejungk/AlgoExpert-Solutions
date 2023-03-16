function isValidSubsequence(array, sequence) {
  let pointer = 0; 


  for (let i = 0; i < array.length; i++) {
    if (pointer === sequence.length) break;
    if (array[i] === sequence[pointer]) pointer++;
  }


  return pointer === sequence.length;
}


// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;

