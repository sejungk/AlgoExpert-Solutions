// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}


function findSuccessor(tree, node) {
  // we don't specify the value of order, so an empty array will be passed as default
  const inOrderTraversalOrder = inOrderTraverse(tree);


  for (let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
    const currNode = inOrderTraversalOrder[idx];
    if (currNode !== node) continue;


    if (idx === inOrderTraversalOrder.length - 1) return null;
    return inOrderTraversalOrder[idx + 1];
  }
}




function inOrderTraverse(node, order = []) {
  if (!node) return order;


  inOrderTraverse(node.left, order);
  order.push(node);
  inOrderTraverse(node.right, order);


  return order;
  
  if (tree === node) {
    if (tree.right) {
      inOrderTraverse(tree.right);
      while (tree.left && tree.left.left !== null) inOrderTraverse(tree.left);
    }
    while (tree.left) {
      inOrderTraverse(tree.left);
    }


  }
    
  inOrderTraverse(tree.left);
  console.log(tree.value);
  inOrderTraverse(tree.right);
}


// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;

