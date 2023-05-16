// function nodeDepths(root, depth = 0) {
//   if (!root) return 0;
//   return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
// }


function nodeDepths(root) {
  let stack = [{node: root, depth: 0}];
  let totalDepth = 0;
  
  while (stack.length) {
    // let {node, depth} = stack.pop();
    let node = stack.pop();
    if (!node.node) continue;
    totalDepth += node.depth;
    stack.push({node: node.node.left, depth: node.depth + 1})
    stack.push({node: node.node.right, depth: node.depth + 1})
  }
  return totalDepth
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

