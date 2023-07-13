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