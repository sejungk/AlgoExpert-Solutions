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

