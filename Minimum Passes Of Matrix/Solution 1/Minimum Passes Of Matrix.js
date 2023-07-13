function minimumPassesOfMatrix(matrix) {
  const numOfPasses = convertNegatives(matrix);
  return hasNoNegatives(matrix) ? numOfPasses - 1 : -1;
}


function convertNegatives(matrix) {
  const positivesQueue = findPositivePos(matrix);
  let passes = 0;
  
  while (positivesQueue.length) {
    let currPassSize = positivesQueue.length;
    
      while (currPassSize > 0) {
        const [ row, col ] = positivesQueue.shift();
        const neighbors = findNeighborPos(row, col, matrix);
        for (const neighbor of neighbors) {
          const [neighborRow, neighborCol] = neighbor;
          if (matrix[neighborRow][neighborCol] < 0) {
            matrix[neighborRow][neighborCol] *= -1;
            positivesQueue.push([neighborRow, neighborCol])
          } 
        }
        currPassSize--;
      }
      passes++;
    }
  return passes;
}


function findNeighborPos(row, col, matrix) {
  const neighborPos = [];
  
  const neighbors = [ [0, 1], [1, 0], [-1, 0], [0, -1] ];
  for (let neighbor of neighbors) {
    const [ neighborRow, neighborCol ] = neighbor;
    const newRow = neighborRow + row;
    const newCol = neighborCol + col;
    const rowInBounds = newRow >= 0 && newRow < matrix.length;
    const colInBounds = newCol >= 0 && newCol < matrix[0].length;
    if (rowInBounds && colInBounds) neighborPos.push( [newRow, newCol] );
  }
  return neighborPos;
}


function findPositivePos(matrix) {
  let array = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] > 0) array.push([row, col]);       
    }
  }
  return array;
}


function hasNoNegatives(matrix) {
  for (const row of matrix) {
    for (value of row) {
      if (value < 0) return false;
    }
  }
  return true;
} 


// Do not edit the line below.
exports.minimumPassesOfMatrix = minimumPassesOfMatrix;

