function nonAttackingQueens(n) {
  const colPositions = new Array(n).fill(0);
  return findQueenPositions(0, n, colPositions);
}


function findQueenPositions(row, boardSize, colPositions) {
  if (row === boardSize) return 1;
  
  let validPositions = 0;
  for (let col = 0; col < boardSize; col++) {
    if (isNonAttackingPosition(row, col, colPositions)) {
      colPositions[row] = col;
      validPositions += findQueenPositions(row + 1, boardSize, colPositions)
    }
  }
  return validPositions;
}


function isNonAttackingPosition(row, col, colPositions) {
  for (let prevRow = 0; prevRow < row; prevRow++) {
    const prevCol = colPositions[prevRow];
    const sameCol = prevCol === col;
    const isOnDiagonal = row - prevRow === Math.abs(prevCol - col);
    if (sameCol || isOnDiagonal) return false;
  }
  return true;
}


// Do not edit the line below.
exports.nonAttackingQueens = nonAttackingQueens;

