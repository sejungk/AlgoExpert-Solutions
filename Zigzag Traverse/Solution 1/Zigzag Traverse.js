function zigzagTraverse(array) {
  let traverseDown = true;
  let bottomRow = array.length - 1;
  let rightCol = array[0].length - 1;
  let currRow = 0;
  let currCol = 0;
  let results = [];


  while (!isOutOfBounds(currRow, bottomRow, currCol, rightCol)) {
    results.push(array[currRow][currCol]);
    
    if (traverseDown) {
      if (currCol === 0 || currRow === bottomRow) {
        traverseDown = false;
        if (currRow === bottomRow) currCol++;
        else currRow++;
      } else {
        currRow++;
        currCol--;
      }
    } else {
      if (currCol === rightCol || currRow === 0) {
        traverseDown = true;
        if (currCol === rightCol) currRow++;
        else currCol++;
      } else {
        currRow--;
        currCol++;
      }
    }
  }
  return results;
}


function isOutOfBounds(row, height, col, width) {
  return row < 0 || row > height || col < 0 || col > width;
}


 
// Do not edit the line below.
exports.zigzagTraverse = zigzagTraverse;

