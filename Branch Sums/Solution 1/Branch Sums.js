// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


function branchSums(root) {
  let sums = [];
  calcBranch(sums, root, 0)
  return sums;
}


function calcBranch(array, node, runningSum) {
  if (!node) return;
  const newRunningSum = runningSum + node.value;
  if (node.left === null && node.right === null) array.push(newRunningSum);


  calcBranch(array, node.left, newRunningSum);
  calcBranch(array, node.right, newRunningSum);
}


// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;

