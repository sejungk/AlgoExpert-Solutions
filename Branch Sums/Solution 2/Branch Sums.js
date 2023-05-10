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
  let allSums = [];
	calculateSums(root, allSums, 0);
	return allSums;
}


function calculateSums(currentNode, allSums, currentSum) {
	if (!currentNode) return;


	let newCurrentSum = currentSum + currentNode.value;
	if (!currentNode.left && !currentNode.right) {
		allSums.push(newCurrentSum);
		return;
	}
	calculateSums(currentNode.left, allSums, newCurrentSum);
	calculateSums(currentNode.right, allSums, newCurrentSum);
}


// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;

