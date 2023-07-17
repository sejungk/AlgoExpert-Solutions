function largestIsland(matrix) {
  let islandId = 2;
  const islandSizes = {1: 0};
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      let countAttempt = explore(row, col, matrix, islandId);
      if (countAttempt > 0) {
        islandSizes[islandId] = countAttempt;
        islandId++;
      }
    }
  }


  let max = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[row][col] !== 1) continue;


      const neighborIslands = new Set();
      const neighbors = getNeighbors(row, col, matrix);
      for (let neighbor of neighbors) {
        const [neighborRow, neighborCol] = neighbor;
        neighborIslands.add(matrix[neighborRow][neighborCol]);
      }


      let currCount = 1;
      for (let island of neighborIslands) {
        currCount += islandSizes[island];
      }


      max = Math.max(currCount, max);
    }
  }
  return max;
}


function explore(row, col, matrix, islandId) {
  if (!inBounds(row, col, matrix) || matrix[row][col] !== 0) return 0;


  matrix[row][col] = islandId;
  let count = 1;
  const neighbors = getNeighbors(row, col, matrix);
  for (let neighbor of neighbors) {
    const [neighborRow, neighborCol] = neighbor;
    count += explore(neighborRow, neighborCol, matrix, islandId);
  }
  return count;
}


function getNeighbors(row, col, matrix) {
  const neighbors = [ [0, 1], [1, 0], [-1, 0], [0, -1] ];
  const validNeighbors = [];
  
  for (let neighbor of neighbors) {
    const [neighborRow, neighborCol] = neighbor;
    const newRow = neighborRow + row;
    const newCol = neighborCol + col;
    if (inBounds(newRow, newCol, matrix)) validNeighbors.push([newRow, newCol]);
  }
  return validNeighbors;
}


function inBounds(row, col, matrix) {
  const rowInBounds = row >= 0 && row < matrix.length;
  const colInBounds = col >= 0 && col < matrix[0].length;
  return rowInBounds && colInBounds;
}
// Do not edit the line below.
exports.largestIsland = largestIsland;

