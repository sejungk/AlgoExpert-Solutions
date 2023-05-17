// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter
}


function getTreeInfo(root) {
  if (!root) return new TreeInfo(0, 0);


  let leftTreeInfo = getTreeInfo(root.left);
  let rightTreeInfo = getTreeInfo(root.right);


  const longestPath = leftTreeInfo.height + rightTreeInfo.height;
  const prevDiameter = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
  const diameter = Math.max(longestPath, prevDiameter);
  const height = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);


  return new TreeInfo(height, diameter);
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

