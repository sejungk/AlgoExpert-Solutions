function twoColorable(edges) {
  // same thing as new Array(edges.length).fill(null);
  let colors = edges.map(_ => null);
  colors[0] = true;
  let stack = [ 0 ];
  
  while (stack.length) {
    const node = stack.pop();
    for (let neighbor of edges[node]) {
      if (colors[neighbor] === null) {
        colors[neighbor] = !colors[node];
        stack.push(neighbor);
      } else if (colors[neighbor] === colors[node]) return false;
    }
  }
  return true;
}


// Do not edit the line below.
exports.twoColorable = twoColorable;

