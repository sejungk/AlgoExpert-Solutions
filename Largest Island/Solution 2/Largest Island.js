function largestIsland(matrix) {


  let largestIslandCount = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) {
        matrix[row][col] = 0;
        const landCount = countPotentialLand(row, col, matrix, new Set());
        largestIslandCount = Math.max(landCount, largestIslandCount);
        matrix[row][col] = 1;
      }
    }
  }
  return largestIslandCount;
}


function countPotentialLand(row, col, matrix, visited) {
  const key = row + ',' + col;
  if (visited.has(key)) return 0;
  visited.add(key);
  if (!inBounds(row, col, matrix) || matrix[row][col] === 1) return 0;


  let count = 1;
  const neighbors = findNeighbors(row, col, matrix);
  for (const neighbor of neighbors) {
    const [neighborRow, neighborCol]  = neighbor;
    count += countPotentialLand(neighborRow, neighborCol, matrix, visited);
  }
  return count; 
}


function findNeighbors(row, col, matrix) {
  const validNeighborPos = [];
  const neighbors = [ [0, 1], [1, 0], [-1, 0], [0, -1] ];
  for (let neighbor of neighbors){
    const [neighborRow, neighborCol] = neighbor;
    const newRow = neighborRow + row;
    const newCol = neighborCol + col;
    if (inBounds(newRow, newCol, matrix)) validNeighborPos.push([newRow, newCol]);
  }
  return validNeighborPos;
}


function inBounds(row, col, matrix) {
  const rowInBounds = row >= 0 && row < matrix.length;
  const colInBounds = col >= 0 && col < matrix[0].length;
  return rowInBounds && colInBounds;
}
// Do not edit the line below.
exports.largestIsland = largestIsland;

