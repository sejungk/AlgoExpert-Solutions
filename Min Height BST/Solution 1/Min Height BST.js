function minHeightBst(array) {
  return constructBst(array, null, 0, array.length - 1);
}


function constructBst(array, tree, startIdx, endingIdx){
	if(startIdx > endingIdx) return;
	let middleIdx = Math.floor((startIdx + endingIdx) / 2);
	
	if (!tree) {
		tree = new BST(array[middleIdx]);
	} else {
		tree.insert(array[middleIdx]);
	}
	constructBst(array, tree, startIdx, middleIdx - 1);
	constructBst(array, tree, middleIdx + 1, endingIdx);
	return tree;
}


class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }


  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {