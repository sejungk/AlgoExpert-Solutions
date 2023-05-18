// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class TreeInfo {
  constructor(height, isBalanced) {
    this.height = height;
    this.isBalanced = isBalanced;
  }
}


function heightBalancedBinaryTree(tree) {
  return checkTreeBalance(tree).isBalanced;
}


function checkTreeBalance(tree) {
  if (!tree) return new TreeInfo(-1, true);


  const leftSubtree = checkTreeBalance(tree.left);
  const rightSubtree = checkTreeBalance(tree.right);


  const isBalanced = leftSubtree.isBalanced &&
    rightSubtree.isBalanced &&
    Math.abs(leftSubtree.height - rightSubtree.height) <= 1;
  const height = Math.max(leftSubtree.height, rightSubtree.height) + 1


  return new TreeInfo(height, isBalanced);
}


// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.heightBalancedBinaryTree = heightBalancedBinaryTree;

