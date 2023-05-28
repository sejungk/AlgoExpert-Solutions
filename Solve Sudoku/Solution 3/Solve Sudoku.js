// time: O(1) || space: O(1)
function solveSudoku(board) {
  solvePartialSudoku(0, 0, board);
  return board;
}


// recursive func: 
// takes in row/col position and figures out the correct digit to place at position
// will backtrack when it can no longer place a digit in the position
function solvePartialSudoku(row, col, board) {
  // we will need to modify row/col and we don’t want to modify the input param
  let currRow = row;
  let currCol = col;


  // if we’re in the last col, we want to reset col to 0 and move down to next row
  if (currCol === board[currRow].length) {
    currRow++;
    currCol = 0;
    // if we've reached the last col and last row, we’ve solved the problem
    if (currRow === board.length) return true;
  }


  // check if the current position is an empty square (0)
  if (board[currRow][currCol] === 0) {
    // func that will try all possible digits (1-9) at this position
    return tryDigitsAtPosition(currRow, currCol, board);
  }
  // if were at a position that is not an empty square, 
  // move over to the next square (next col)
  return solvePartialSudoku(currRow, currCol + 1, board);
}


function tryDigitsAtPosition(row, col, board) {
  // loop through all digits 1 - 9
  for (let digit = 1; digit < 10; digit++) {
    // check if this digit we’re trying is valid at position
    if (isValidAtPosition(digit, row, col, board)) {
      // temporarily insert digit into position if digit is valid
      board[row][col] = digit;
      




      // continue to try to solve rest of board, and if the board was fully solved 
      // with the prev inserted digit, return true
      if (solvePartialSudoku(row, col + 1, board)) return true;
    }
  }
  // if board cannot be solved with our inserted values, we need to reset curr square
  // return false to indicate that we were not able to solve board with digit
  // backtrack to find mistake
  board[row][col] = 0;
  return false;
}


function isValidAtPosition(digit, row, col, board) {
  const rowIsValid = !board[row].includes(digit);
  const colIsValid = !board.map(r => r[col]).includes(digit);
  
  // check to see that digit is not found in row or col
  if (!rowIsValid || !colIsValid) return false;


  // check to see that digit is not found in subgrid
  // there will be 9 subgrids in each board. We need to calculate 
  // the start of our curr row and start of curr col
  // example row 4 is contained in subgrid row 3 - 6, so rowStart for row 4 is 3
  const subgridRowStart = Math.floor(row / 3) * 3;
  const subgridColStart = Math.floor(col / 3) * 3;
  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      
      // check all 9 squares in subgrid
      const rowToCheck = subgridRowStart + rowIdx;
      const colToCheck = subgridColStart + colIdx;
      const existingValue = board[rowToCheck][colToCheck];


      // if digit is in grid return false because digit is invalid
      if (existingValue === digit) return false;
    }
  }
  // digit is valid so return true
  return true;
}


// Do not edit the line below.
exports.solveSudoku = solveSudoku;

