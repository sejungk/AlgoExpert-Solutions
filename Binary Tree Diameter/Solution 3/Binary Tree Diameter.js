// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter;
}


function getTreeInfo(tree) {
  if (tree === null) return new TreeInfo(0, 0);


  let leftBranch = getTreeInfo(tree.left);
  let rightBranch = getTreeInfo(tree.right);


  const longestPathThroughRoot = leftBranch.height + rightBranch.height;
  const maxDiameterSoFar = Math.max(leftBranch.diameter, rightBranch.diameter);
  const currDiameter = Math.max(maxDiameterSoFar, longestPathThroughRoot);
  const currHeight = 1 + Math.max(leftBranch.height, rightBranch.height);


  return new TreeInfo(currHeight, currDiameter)
}


class TreeInfo {
  constructor(height, diameter) {
    this.height = height;
    this.diameter = diameter;
  }
}


// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;

