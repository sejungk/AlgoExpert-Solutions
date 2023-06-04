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
  let leftStack = [tree.left];
  let rightStack = [tree.right];


  while (leftStack.length) {    
    let right = rightStack.pop();
    let left = leftStack.pop();


    if (left === null && right === null) continue;


    if (left === null || right === null || left.value !== right.value) return false;


    leftStack.push(left.left);
    leftStack.push(left.right);
    rightStack.push(right.right);
    rightStack.push(right.left);
  }
  if (rightStack.length || leftStack.length) return false;
  return true;
}


// Do not edit the line below.
exports.symmetricalTree = symmetricalTree;

