function solveSudoku(board) {
  solveBoard(board, 0, 0);
  return board;
}


function solveBoard(board, row, col) {
  // check if were at end col
  if (col === board[row].length) {
    row++;
    col = 0;
    // check if were at last row / col
    if (row === board.length) return true;
  }


  // check if square is empty
  if (board[row][col] === 0) {
    return tryDigitsAtPosition(board, col, row);
  }
  
  // move to next square
  return solveBoard(board, row, col + 1);
}


// try all digits 1 - 9
function tryDigitsAtPosition(board, col, row) {
  for (let digit = 1; digit < 10; digit++) {
    // if digit is valid
    if (isDigitValid(board, row, col, digit)) {
      // insert digit into empty square
      board[row][col] = digit;
      // move on to next square and see if we can solve
      if (solveBoard(board, row, col + 1)) return true;
    }
  }
  // if we cant solve revert to empty square and end this recursive call
  board[row][col] = 0;
  return false;
}


// check if digit is valid in this square
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

