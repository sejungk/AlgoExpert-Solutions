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
  let branchSums = [];
  calculateBranchSums(root, branchSums, 0)
  return branchSums;
}


function calculateBranchSums(node, branchSums, currSum) {
  if (node === null) return;
  
  const newSum = currSum + node.value;


  if (!node.left && !node.right) branchSums.push(newSum);
  calculateBranchSums(node.left, branchSums, newSum);
  calculateBranchSums(node.right, branchSums, newSum);
}


// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;

