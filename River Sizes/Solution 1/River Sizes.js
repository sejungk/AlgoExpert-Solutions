function riverSizes(matrix) {
	let sizes = [];
	let visited = matrix.map(row => row.map(value => false));
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				if (visited[i][j]) continue;
			  traverseNode(sizes, visited, matrix, i, j)
			}
		}
	return sizes
	}




function traverseNode(sizes, visited, matrix, i , j) {
	let riverSize = 0;
	let nodesToExplore = [[i, j]];
	while (nodesToExplore.length) {
		const currNode = nodesToExplore.pop();
		i = currNode[0];
		j = currNode[1];
		if (visited[i][j]) continue;
		visited[i][j] = true;
		if (matrix[i][j] === 0) continue;
		riverSize++;
		const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
		for (const neighbor of unvisitedNeighbors) {
			nodesToExplore.push(neighbor)
		}
	}
	if (riverSize > 0) sizes.push(riverSize);
}


function getUnvisitedNeighbors(i, j, matrix, visited) {
	const unvisitedNeighbors = [];
	if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
	if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j]);
	if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);