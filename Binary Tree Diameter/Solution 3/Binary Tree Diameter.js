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


  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);
  
  const longestPath = leftTreeInfo.height + rightTreeInfo.height;
  const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
  const newDiameter = Math.max(longestPath, maxDiameterSoFar);
  const newHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);


  return new TreeInfo(newDiameter, newHeight);
}


class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}
// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;

