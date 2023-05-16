// function invertBinaryTree(tree) {
//   if (!tree) return;


//   let temp = tree.right;
//   tree.right = tree.left;
//   tree.left = temp;


//   invertBinaryTree(tree.right);
//   invertBinaryTree(tree.left);
// }


// function invertBinaryTree(tree) {
//   if (!tree) return;


//   let temp = tree.right;
//   tree.right = tree.left;
//   tree.left = temp;


//   invertBinaryTree(tree.right);
//   invertBinaryTree(tree.left);
// }


function invertBinaryTree(tree) {
  let queue = [tree];
  
  while (queue.length) {
    let node = queue.pop();
    if (!node) continue;
    
    invert(node);
    queue.push(node.left);
    queue.push(node.right);
  }
  return tree;
}


function invert(node) {
  let temp = node.right;
  node.right = node.left;
  node.left = temp;
} 


// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;

