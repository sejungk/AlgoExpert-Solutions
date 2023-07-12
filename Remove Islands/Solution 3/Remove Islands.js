function removeIslands(matrix) {
  const landOnBorder = new Array(matrix.length).fill(false).map((row) => new Array(matrix[0].length).fill(false));


  // dfs traverse row borders
  for (let row = 0; row < matrix.length; row++) {
    findBorderLand(row, 0, matrix, landOnBorder);
    findBorderLand(row, matrix[0].length - 1, matrix, landOnBorder);
  }


  // dfs traverse col borders
  for (let col = 0; col < matrix[0].length; col++) {
    findBorderLand(0, col, matrix, landOnBorder);
    findBorderLand(matrix.length - 1, col, matrix, landOnBorder);
  }


  // traverse everything but border
  for (let row = 1; row < matrix.length - 1; row++) {
    for (let col = 1; col < matrix[0].length - 1; col++) {
      if (landOnBorder[row][col]) continue;
      matrix[row][col] = 0;
    }
  }
  return matrix;
}


function findBorderLand(row, col, matrix, landOnBorder) {
  if (matrix[row][col] === 0 || landOnBorder[row][col]) return;


  let stack = [ [row, col] ];
  while (stack.length) {
    const [currRow, currCol] = stack.pop();
    if (landOnBorder[currRow][currCol] === true) continue
    landOnBorder[currRow][currCol] = true;
    const neighbors = [ [0, 1], [1, 0], [-1, 0], [0, -1] ];
    for (let neighbor of neighbors) {
      let [neighborRow, neighborCol] = neighbor;
      const newRow = neighborRow + currRow;
      const newCol = neighborCol + currCol;
      if (inBounds(newRow, newCol, matrix) && matrix[newRow][newCol] === 1) stack.push([newRow, newCol]);
    }
  }
}


function inBounds(row, col, matrix) {
  const rowInBounds = row >= 0 && row < matrix.length;
  const colInBounds = col >= 0 && col < matrix[0].length;
  return rowInBounds && colInBounds;
}
// Do not edit the line below.
exports.removeIslands = removeIslands;

