const [WHITE, GREY, BLACK] = [0, 1, 2];


function cycleInGraph(edges) {
  const colors = new Array(edges.length).fill(WHITE);


  for (let node in edges) {
    if (colors[node] === BLACK) continue;
    if (hasCycle(node, edges, colors)) return true;
  }
  return false;
}


function hasCycle(node, edges, colors) {
  if (colors[node] === BLACK) return false;
  if (colors[node] === GREY) return true;
  colors[node] = GREY;
  
  for (let neighbor of edges[node]) {
    if (hasCycle(neighbor, edges, colors)) return true;
  }
  
  colors[node] = BLACK;
  return false;
}


// Do not edit the line below.
exports.cycleInGraph = cycleInGraph;

