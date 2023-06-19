// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class TreeInfo {
  constructor(isBalanced, height) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}


function heightBalancedBinaryTree(tree) {
  return calculateHeight(tree).isBalanced;
}


function calculateHeight(tree) {
  if (tree === null) return new TreeInfo(true, -1);
  
  let leftBranch = calculateHeight(tree.left);
  let rightBranch = calculateHeight(tree.right);


  const isBalanced = leftBranch.isBalanced && 
    rightBranch.isBalanced && 
    Math.abs(leftBranch.height - rightBranch.height) <= 1;


  const height = Math.max(leftBranch.height, rightBranch.height) + 1;
  return new TreeInfo(isBalanced, height);
}




// Do not edit the lines below.