// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


function findKthLargestValueInBst(tree, k) {
	const sortedNodes = [];
  inorderTraverse(tree, sortedNodes);
	return sortedNodes[sortedNodes.length - k];
}


function inorderTraverse(currentNode, sortedNodes) {
	
	if(currentNode === null) return;
		
		inorderTraverse(currentNode.left, sortedNodes);
		sortedNodes.push(currentNode.value);
		inorderTraverse(currentNode.right, sortedNodes);
}


// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;

