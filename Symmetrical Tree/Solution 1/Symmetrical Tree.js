// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


exports.BinaryTree = BinaryTree;


function symmetricalTree(tree) {
  return treesAreMirrored(tree.left, tree.right);
}


// function traverseTree(leftNode, rightNode) {
//   if (leftNode === null && rightNode === null) return true;
//   if (leftNode === null || rightNode === null) return false;
//   if (leftNode.value !== rightNode.value) return false;
  
//   return traverseTree(leftNode.left, rightNode.right) && traverseTree(rightNode.left, leftNode.right);
// }


// function traverseTree(leftNode, rightNode) {
//   if (leftNode === null && rightNode === null) return true;
//   if (!leftNode || !rightNode || leftNode.value !== rightNode.value) return false;
  
//   return traverseTree(leftNode.left, rightNode.right) && traverseTree(rightNode.left, leftNode.right);
// }


function treesAreMirrored(left, right) {
  if (left && right && left.value === right.value) {
    return treesAreMirrored(left.left, right.right) && treesAreMirrored(left.right, right.left);
  }
  return left === right;
 }


// Do not edit the line below.
exports.symmetricalTree = symmetricalTree;

