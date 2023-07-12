function riverSizes(matrix) {
  let sizes = [];
  let visited = new Set();
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      let size = getRiverSize(row, col, matrix, visited, sizes);
      if (size > 0) sizes.push(size);
    }
  }
  return sizes;
}


function getRiverSize(row, col, matrix, visited, sizes) {
  let key = row + ',' + col;
  if (visited.has(key)) return 0;
  visited.add(key);
  if (!inBounds(row, col, matrix) || matrix[row][col] === 0) return 0;
  let count = 1;
  let deltas =[ [0, 1], [1, 0], [-1, 0], [0, -1] ];
  for (let delta of deltas) {
    const [ deltaRow, deltaCol ] =  delta;
    count += getRiverSize(row + deltaRow, col + deltaCol, matrix, visited, sizes);
  }
  return count;
}


function inBounds(row, col, matrix) {
  const rowInBounds = row >= 0 && row < matrix.length;
  const colInBounds = col >= 0 && col < matrix[0].length;
  return rowInBounds && colInBounds;
}
// Do not edit the line below.
exports.riverSizes = riverSizes;

