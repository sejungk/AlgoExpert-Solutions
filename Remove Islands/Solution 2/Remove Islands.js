function removeIslands(matrix) {
  const removedIslands = new Array(matrix.length).fill(0).map((row) => new Array(matrix[0].length).fill(0));
  
  for (let row = 0; row < matrix.length; row++) {
    explore(row, 0, matrix, removedIslands);
    explore(row, matrix[0].length - 1, matrix, removedIslands);
  }


  for (let col = 0; col < matrix[0].length; col++) {
    explore(0, col, matrix, removedIslands);
    explore(matrix.length - 1, col, matrix, removedIslands);
  }
  
  return removedIslands;
}


function explore(row, col, matrix, removedIslands) {
  if (!inBounds(row, col, matrix) || matrix[row][col] === 0) return;
  removedIslands[row][col] = 1;
  matrix[row][col] = 0;


  const deltas = [ [0, 1], [1, 0], [-1, 0], [0, -1] ];
  for (let delta of deltas) {
    const [deltaRow, deltaCol] = delta;
    explore(row + deltaRow, col + deltaCol, matrix, removedIslands);
  }
}


function inBounds(row, col, matrix) {
  const rowInBounds = row >= 0 && row < matrix.length;
  const colInBounds = col >= 0 && col < matrix[0].length;
  return rowInBounds && colInBounds;
}


// Do not edit the line below.
exports.removeIslands = removeIslands;

