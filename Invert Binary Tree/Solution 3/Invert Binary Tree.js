// function invertBinaryTree(tree) {
//   if (tree === null) return;
//   swap(tree);  
  
//   invertBinaryTree(tree.left);
//   invertBinaryTree(tree.right);
// }


// function swap(tree) {
//   let temp = tree.left;
//   tree.left = tree.right;
//   tree.right = temp;
// }


function invertBinaryTree(tree) {
  let queue = [tree];
  
  while (queue.length) {
    const node = queue.shift();
    if (node === null) continue;
    swap(node);
    queue.push(node.left);
    queue.push(node.right);
  }
}


function swap(tree) {
  let temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
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

