// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


exports.BinaryTree = BinaryTree;


function splitBinaryTree(tree) {
  const targetSum = calculateSum(tree, 0) / 2;
  const canBeSplit = trySubtrees(tree, targetSum)[1]
  return canBeSplit ? targetSum : 0;
}


function trySubtrees(tree, targetSum) {
  if (tree === null) return [0, false];


  const [leftSum, leftCanBeSplit] = trySubtrees(tree.left, targetSum);
  const [rightSum, rightCanBeSplit] = trySubtrees(tree.right, targetSum);


  const currentTreeSum = tree.value + leftSum + rightSum;
  const canBeSplit = leftCanBeSplit || rightCanBeSplit || currentTreeSum === targetSum;
  return [currentTreeSum, canBeSplit];
}


function calculateSum(tree) {
  if (tree === null) return 0;
  return tree.value + calculateSum(tree.left) + calculateSum(tree.right);
}




// Do not edit the line below.
exports.splitBinaryTree = splitBinaryTree;

