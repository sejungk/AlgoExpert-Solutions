function cycleInGraph(edges) {
  let visited = new Set();
  
  for (let node in edges) {
    if (hasCycle(edges, node, visited, new Set())) return true;
  }
  return false;
}


function hasCycle(edges, node, visited, visiting) {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  visiting.add(node);


  for (let neighbor of edges[node]) {
    if (hasCycle(edges, neighbor, visited, visiting)) return true;
  }
  visiting.delete(node);
  visited.add(node);
  return false;
}


// Do not edit the line below.
exports.cycleInGraph = cycleInGraph;

