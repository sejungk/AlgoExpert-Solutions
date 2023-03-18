function subarraySort(array) {
  let smallest = Infinity;
  let greatest = -Infinity;
  let left = 0;
  let right = array.length-1;
  
  for (let i = 0; i < array.length; i++) {
    let prev = array[i-1];
    let curr = array[i];
    let next = array[i+1];
    
    if (prev > curr || curr > next) {
      smallest = Math.min(smallest, curr);
      greatest = Math.max(greatest, curr);
    }
  }
  if (smallest === Infinity) return [-1, -1];


  while (array[left] <= smallest) {
    left++;
  }
  while (array[right] >= greatest) {
    right--;
  } 
  return [left, right];
}


// Do not edit the line below.
exports.subarraySort = subarraySort;

