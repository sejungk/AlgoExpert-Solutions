function spiralTraverse(array) {
  let results = [];
  traverse(results, array, 0, array.length - 1, 0, array[0].length - 1);
  return results;
}


function traverse(results, array, startRow, endRow, startCol, endCol) {
  if (startRow > endRow || startCol > endCol) return;
  
    for (let col = startCol; col <= endCol; col++) {
      results.push(array[startRow][col]);
    }
  
    for (let row = startRow + 1; row <= endRow; row++) {
      results.push(array[row][endCol]);
    }
  
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      results.push(array[endRow][col]);
    }
  
    for (let row = endRow - 1; row >= startRow + 1; row--) {
      if (startCol === endCol) break;
      results.push(array[row][startCol]);
    }
 traverse(results, array, startRow + 1, endRow - 1, startCol + 1, endCol - 1);
}


exports.spiralTraverse = spiralTraverse;

