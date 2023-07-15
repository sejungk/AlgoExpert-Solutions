function largestIsland(matrix) {
  const islandSizes = [];
  let islandId = 2;
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        const countIslandAttempt = countIslandSize(row, col, matrix, islandId);
        islandSizes.push(countIslandAttempt);
        islandId++;
      }
    }
  }


  let maxSize = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] !== 1) continue;
      const neighbors = findNeighbors(row, col, matrix);
      let islandNeighbors = new Set();
        
      for (let neighbor of neighbors) {
        const [neighborRow, neighborCol] = neighbor;
        let neighborIslandId = matrix[neighborRow][neighborCol];
        islandNeighbors.add(neighborIslandId);
      }


      let size = 1;
      for (const island of islandNeighbors) {
        size += islandSizes[island - 2];
      }
      maxSize = Math.max(maxSize, size);
    }
  }
  return maxSize;
}