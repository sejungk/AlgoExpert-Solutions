function twoColorable(edges) {
  const colorAssignment = {};
  
  for (let node in edges) {
    if (!(node in colorAssignment)) {
      if (colorNodes(node, edges, true, colorAssignment) === false) return false;
    }
  }
  return true;
}


function colorNodes(startingNode, edges, startingColor, colorAssignment) {
  let stack = [ [startingNode, startingColor] ];


  while (stack.length) {
    let [ node, color ] = stack.pop();
    if (node in colorAssignment) {
      if (colorAssignment[node] !== color) return false;
      else continue;
    }
    colorAssignment[node] = color;
    for (let child of edges[node]) {
      stack.push([ child, !color ]);
    }
  }
  return true;
}




// Do not edit the line below.
exports.twoColorable = twoColorable;

