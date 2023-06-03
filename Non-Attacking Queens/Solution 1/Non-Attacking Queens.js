function nonAttackingQueens(n) {
  let onDiagonalUp = new Set();
  let onDiagonalDown = new Set();
  let onSameCol = new Set();
  return findQueenPlacements(onDiagonalUp, onDiagonalDown, onSameCol, n, 0); 
}


function findQueenPlacements(onDiagonalUp, onDiagonalDown, onSameCol, boardSize, row) {
  if (row === boardSize) return 1;


  let numOfPositions = 0;
  for (let col = 0; col < boardSize; col++) {
    if (onNonAttackingSquare(onDiagonalUp, onDiagonalDown, onSameCol, row, col)) {
      placeQueen(onDiagonalUp, onDiagonalDown, onSameCol, row, col);
      numOfPositions += findQueenPlacements(onDiagonalUp, onDiagonalDown, onSameCol, boardSize, row + 1)
      removeQueen(onDiagonalUp, onDiagonalDown, onSameCol, row, col);
    }
  }
  return numOfPositions;
}


function onNonAttackingSquare(onDiagonalUp, onDiagonalDown, onSameCol, row, col) {
  if (onSameCol.has(col)) return false;
  if (onDiagonalDown.has(row - col)) return false;
  if (onDiagonalUp.has(row + col)) return false;
  return true;
}


function placeQueen(onDiagonalUp, onDiagonalDown, onSameCol, row, col) {
  onDiagonalUp.add(row + col);
  onDiagonalDown.add(row - col);
  onSameCol.add(col);
}


function removeQueen(onDiagonalUp, onDiagonalDown, onSameCol, row, col) {
  onDiagonalUp.delete(row + col);