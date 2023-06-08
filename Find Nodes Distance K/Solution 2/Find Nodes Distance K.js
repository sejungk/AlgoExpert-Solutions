

function findNodesDistanceK(tree, target, k) {
  const nodesDistanceK = [];
  findDistanceFromNodeToTarget(tree, target, k, nodesDistanceK);
  return nodesDistanceK;
}


function findDistanceFromNodeToTarget(node, target, k, nodesDistanceK) {
  // 4 recursive cases we want to consider: 
    // 1) target node is in left subtree
    // 2) target node is in right subtree
    // 3) curr node is target node
    // 4) target node is not in any of our subtrees


  // -1 represents that the target is not in this subtree
  if (node === null) return -1;


  // if we find target node return 1
  if (node.value === target) {
    addSubtreeNodeAtDistanceK(node, 0, k, nodesDistanceK);
    return 1;
  }
  const leftDistance = findDistanceFromNodeToTarget(node.left, target, k, nodesDistanceK);
  const rightDistance = findDistanceFromNodeToTarget(node.right, target, k, nodesDistanceK);


  if (leftDistance === k || rightDistance === k) nodesDistanceK.push(node.value);


  if (leftDistance !== -1) {
    addSubtreeNodeAtDistanceK(node.right, leftDistance + 1, k, nodesDistanceK);
    return leftDistance + 1;
  }


  if (rightDistance !== -1) {
    addSubtreeNodeAtDistanceK(node.left, rightDistance + 1, k, nodesDistanceK);
    return rightDistance + 1;
  }
  return -1
}


function addSubtreeNodeAtDistanceK(node, distance, k, nodesDistanceK) {
  if (node === null) return;
  if (distance === k) nodesDistanceK.push(node.value);
  else {
    addSubtreeNodeAtDistanceK(node.left, distance + 1, k, nodesDistanceK);
    addSubtreeNodeAtDistanceK(node.right, distance + 1, k, nodesDistanceK);
  }
}


// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findNodesDistanceK = findNodesDistanceK;

