// iterative solutions are better than recursive one from a space complexity point of view
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
	// Average: O(Log(n)) time | 0(1) space
	// Worst: O(n) time | O(1) space 
  insert(value) {
    let currentNode = this;
		// do this forever until break statement
		while (true) {
			// Left subtree value
			if (value < currentNode.value) {
				// check if left node is a bst or if were at the end of a branch
				// In the case we are at the end of a branch
				if (currentNode.left === null) {
					currentNode.left = new BST(value);
					break;
				} else { //if we still have the left subtree to explore
					currentNode = currentNode.left;
				}
			} else { // Right subtree value
				if(currentNode.right === null) {
					currentNode.right = new BST(value);
					break;
				} else {
					currentNode = currentNode.right;
				}
			}
		}
    return this;
  }
	
	// Average: O(Log(n)) time | 0(1) space