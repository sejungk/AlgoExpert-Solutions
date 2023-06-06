  }
}


function findNodesDistanceK(tree, target, k) {
  const nodesToParentNodes = {};
  mapChildToParentNodes(nodesToParentNodes, tree);
  const targetNode = findTargetNode(tree, target, nodesToParentNodes);
  return nodesKDistance = findNodesKDistance(targetNode, nodesToParentNodes, k);
}


function mapChildToParentNodes(nodesToParentNodes, node, parent = null) {
  if (node !== null) {
    nodesToParentNodes[node.value] = parent;
    mapChildToParentNodes(nodesToParentNodes, node.left, node);
    mapChildToParentNodes(nodesToParentNodes, node.right, node);
  }
}


function findTargetNode(node, target, nodesToParentNodes) {
  if (node.value === target) return node;
  
  let targetNodeParent = nodesToParentNodes[target];
  if (targetNodeParent.left !== null && targetNodeParent.left.value === target) return targetNodeParent.left;
  else return targetNodeParent.right;
}


function findNodesKDistance(tree, nodesToParentNodes, k) {
  const queue = [[tree, 0]];
  const seen = new Set([tree.value]);
  
  while (queue.length) {
    const [node, distance] = queue.shift();


    if (k === distance) {
      const nodesKDistance = queue.map(node => node[0].value);
      nodesKDistance.push(node.value);
      return nodesKDistance;
    } 


    const connectedNodes = [node.left, node.right, nodesToParentNodes[node.value]];
    for (const currNode of connectedNodes) {
      if (currNode === null || seen.has(currNode.value)) continue;
      seen.add(currNode.value);
      queue.push([currNode, distance + 1]);
    }
  }
  return [];
}
// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findNodesDistanceK = findNodesDistanceK;

