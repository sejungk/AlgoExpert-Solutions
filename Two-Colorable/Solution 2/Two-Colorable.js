function twoColorable(edges) {
  const colorAssignment = {};
  
  for (let node in edges) {
    if (!(node in colorAssignment)) {
      if (colorNodes(node, edges, true, colorAssignment) === false) return false;
    }
  }
  return true;
}


function colorNodes(node, edges, color, colorAssignment) {
  if (node in colorAssignment) {
    if (colorAssignment[node] !== color) return false;
    else return true;
  }
  colorAssignment[node] = color;
  
  for (let child of edges[node]) {
    if (colorNodes(child, edges, !color, colorAssignment) === false) return false;
  }
  
  return true;
}


// Do not edit the line below.
exports.twoColorable = twoColorable;

