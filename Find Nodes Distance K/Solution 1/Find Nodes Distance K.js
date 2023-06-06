// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// 1) create object that maps node values to parent node obj
// 2) use dfs to populate obj and map each node value to parent obj
// 3) locate actual target node object
// 4) start bfs starting from target node
    // use queue to store (node obj, dist from target node)




// perform breadth first search and find all nodes that are at distance k


function findNodesDistanceK(tree, target, k) {
  // map node values to parent node object
  // {curr node value : parent node object}
  // parents = {1: null, 2: 1, 3: 1, 4: 2, 5: 2, 6: 3, 7: 6, 8: 6}
  const nodesToParents = {}; 
  
  // recurive dfs func that will map each node value to parent node
  populateNodesToParents(tree, nodesToParents); 


  // get the actual target node 
  const targetNode = getNodeFromValue(target, tree, nodesToParents);
  
  // start bfs starting from target node (fifo)
  return breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents, k);
}


function breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents, k) {
  const queue = [[targetNode, 0]];
  // make sure we dont enter an infinite loop by checking if we've already seen a node