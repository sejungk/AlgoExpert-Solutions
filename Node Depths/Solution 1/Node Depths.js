// function nodeDepths(root, depth = 0) {
//   if (!root) return 0;
//   return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
// }


function nodeDepths(root) {
  let totalDepth = 0;
  let stack = [{node: root, depth: 0}]
  
  while (stack.length) {
    let {node, depth} = stack.pop();
    if (!node) continue;
    totalDepth = totalDepth + depth;
    stack.push({node: node.left, depth: depth + 1});
    stack.push({node: node.right, depth: depth + 1});
  }
  return totalDepth;
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

