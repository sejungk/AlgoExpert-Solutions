<pre>const [WHITE, GREY, BLACK] = [0, 1, 2];

function cycleInGraph(edges) {
// intialize array same length as number of node and set all to white
const colors = new Array(edges.length).fill(WHITE);

// iterate through all nodes as starting nodes
for (let node in edges) {
// if node is black it has already been checked so continue
if (colors[node] === BLACK) continue;
if (hasCycle(node, edges, colors)) return true;
}
return false;
}

function hasCycle(node, edges, colors) {
// first check if node has already been checked previously by different iteration
// then check if node is currently being checked in this iteration, which indicates cycle
if (colors[node] === BLACK) return false;
if (colors[node] === GREY) return true;
colors[node] = GREY;

// if any neighbors return true, we want to pass that true up and return it
for (let neighbor of edges[node]) {
if (hasCycle(neighbor, edges, colors)) return true;
}

// change node to black since we finished checking all neighbors and no cycle was found
colors[node] = BLACK;
return false;
}</pre>