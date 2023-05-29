function solveSudoku(board) {
  solveBoard(board, 0, 0);
  return board;
}


function solveBoard(board, row, col) {
  if (col === board[row].length) {
    row++;
    col = 0;
    if (row === board.length) return true;
  }


  if (board[row][col] === 0) {
    return tryDigitsAtPosition(board, col, row);
  }
  return solveBoard(board, row, col + 1);
}


function tryDigitsAtPosition(board, col, row) {
  for (let digit = 1; digit < 10; digit++) {
    if (isDigitValid(board, row, col, digit)) {
      board[row][col] = digit;
      if (solveBoard(board, row, col + 1)) return true;
    }
  }
  board[row][col] = 0;
  return false;
}


function isDigitValid(board, row, col, digit) {
  const isRowValid = !board[row].includes(digit);
  const isColValid = !board.map(r => r[col]).includes(digit);


  if (!isRowValid || !isColValid) return false;


  const rowStartIdx = Math.floor(row / 3) * 3;
  const colStartIdx = Math.floor(col / 3) * 3;


  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const currRow = rowStartIdx + i;
      const currCol = colStartIdx + j;
      const currSquare = board[currRow][currCol];


      if (currSquare === digit) return false;  
    }
  }
  return true;
}


// Do not edit the line below.
exports.solveSudoku = solveSudoku;

