function zigzagTraverse(array) {
  let traverseDown = true;
  let bottomRow = array.length - 1;
  let rightCol = array[0].length - 1;
  let currRow = 0;
  let currCol = 0;
  let results = [];


    // while (currRow <= bottomRow && currCol <= rightCol) {
  while (!isOutOfBounds(currRow, bottomRow, currCol, rightCol)) {
    results.push(array[currRow][currCol]);
    
    if (traverseDown) {
      if (currRow === bottomRow || currCol === 0) { 
        traverseDown = false;
        if (currRow === bottomRow) currCol++;
        else currRow++;
      } else {
        currRow++;
        currCol--;
      }
    } else {
      if (currRow === 0 || currCol === rightCol) {
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

