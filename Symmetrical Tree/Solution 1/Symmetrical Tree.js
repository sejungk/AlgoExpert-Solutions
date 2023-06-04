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
  return traverseTree(tree.left, tree.right);
}


// function traverseTree(leftNode, rightNode) {
//   if (leftNode === null && rightNode === null) return true;
//   if (leftNode === null || rightNode === null) return false;
//   if (leftNode.value !== rightNode.value) return false;
  
//   return traverseTree(leftNode.left, rightNode.right) && traverseTree(rightNode.left, leftNode.right);
// }


function traverseTree(leftNode, rightNode) {
  if (leftNode === null && rightNode === null) return true;
  if (!leftNode || !rightNode || leftNode.value !== rightNode.value) return false;
  
  return traverseTree(leftNode.left, rightNode.right) && traverseTree(rightNode.left, leftNode.right);
}


// Do not edit the line below.
exports.symmetricalTree = symmetricalTree;

