function zigzagTraverse(array) {
  let height = array.length - 1;
  let width = array[0].length - 1;
  let result = [];
  let row = 0;
  let col = 0;
  let goingDown = true;


  while (!isOutOfBounds(row, col, height, width)) {
    result.push(array[row][col]);
    if (goingDown) {
      if (col === 0 || row === height) {
        goingDown = false;
        if (row === height) col++;
        else row++;
      } else {
        row++;
        col--;
      }
    } else {
      if (col === width || row === 0) {
        goingDown = true;
        if (col === width) row++;
        else col++;
      } else {
        row--;
        col++
      }
    }
  }
  return result;
}


function isOutOfBounds(row, col, height, width) {
  return row < 0 || row > height || col < 0 || col > width;
}


// Do not edit the line below.
exports.zigzagTraverse = zigzagTraverse;

