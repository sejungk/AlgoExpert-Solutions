function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length-1;
  
  while (left < right) {
    while (array[right] === toMove && left < right) right--;
    while (array[left] !== toMove && left < right) left++;
    
    let temp = array[right];
    array[right] = array[left];
    array[left] = temp;


  }
  return array
}


// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

