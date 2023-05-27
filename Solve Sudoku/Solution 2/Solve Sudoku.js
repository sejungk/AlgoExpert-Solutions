function solveSudoku(board) {
  solvePartialSudoku(0, 0, board);
  return board;
}


// recursive func 
// takes in row/col position and figures out the correct digit to place at position
// will backtrack when it can no longer place a digit in the position
function solvePartialSudoku(row, col, board) {
  // we will need to modify row/col
  // we dont want to modify the input param
  let currRow = row;
  let currCol = col;


  // if the col is at the end board, 
  // we want to reset col to 0 and move down a row
  if (currCol === board[currRow].length) {
    currRow++;
    currCol = 0;
    // if we're at the last square, we have solved the problem
    if (currRow === board.length) return true;
  }


  // check if the current position is an empty square
  if (board[currRow][currCol] === 0) {
    // func that try all posible digits (1-9) at this position
    return tryDigitsAtPosition(currRow, currCol, board);
  }
  // if were at a position that is not an empty square, 
  // move over to the next square (next col)
  return solvePartialSudoku(currRow, currCol + 1, board);
}




function tryDigitsAtPosition(row, col, board) {
  // loop through all digits 1 - 9
  for (let digit = 1; digit < 10; digit++) {
    // check if this digit I'm trying is valid at position
    if (isValidAtPosition(digit, row, col, board)) {
      // temporarily insert digit into position if digit is valid
      board[row][col] = digit;
      // continue to solve rest of board, and if the board was solved 
      // with the prev inserted digit, return true
      if (solvePartialSudoku(row, col + 1, board)) return true;
    }
  }
  board[row][col] = 0;
  return false;
}


function isValidAtPosition(digit, row, col, board) {
  const rowIsValid = !board[row].includes(digit);
  const colIsValid = !board.map(r => r[col]).includes(digit);


  if (!rowIsValid || !colIsValid) return false;
  // check subgrid constraint
  // calculate where the start of our curr row would be
  // example row 4 is contained in row 3 - 6
  // so rowStart for row 4 would be 3
  const subgridRowStart = Math.floor(row / 3) * 3;
  const subgridColStart = Math.floor(col / 3) * 3;
  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      
      // check each row/col in our curr subgrid
      const rowToCheck = subgridRowStart + rowIdx;
      const colToCheck = subgridColStart + colIdx;
      const existingValue = board[rowToCheck][colToCheck];


      // if digit is not in grid return false
      if (existingValue === digit) return false;
    }
  }
  // digit is valid so return true
  return true;
}
// Do not edit the line below.
exports.solveSudoku = solveSudoku;

