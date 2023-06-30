// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


function validateBst(tree) {
	return checkBst(tree, -Infinity, Infinity);
}


function checkBst(tree, minValue, maxValue) {
	if (tree === null) return true;
	if (tree.value < minValue || tree.value >= maxValue) return false;
		let leftIsValid = checkBst(tree.left, minValue, tree.value);
		let rightIsValid = checkBst(tree.right, tree.value, maxValue);
	// why do we return this?
		return leftIsValid && rightIsValid;
	}


// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;

