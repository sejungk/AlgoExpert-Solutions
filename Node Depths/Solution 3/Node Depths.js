// function nodeDepths(root, depth = 0) {
//   if (root === null) return 0;
//   return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
// }


function nodeDepths(root) {
  let stack = [{node: root, depth: 0}];
  let depthSum = 0;
  
  while (stack.length) {
    let {node, depth} = stack.pop();
    depthSum += depth;
    
    if (node.left) stack.push({node: node.left, depth: depth+ 1});
    if (node.right) stack.push({node: node.right, depth: depth + 1});
  }
  return depthSum;
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
exports.nodeDepths = nodeDepths;

