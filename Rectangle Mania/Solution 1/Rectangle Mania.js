function rectangleMania(coords) {
  const coordsTable = getCoordsTable(coords);
  return getRectangleCount(coords, coordsTable);
} 


// n^2 space for this func
// double for loop through all coords
function getCoordsTable(coords) {
  const coordsTable = {};
  
  for (const coord1 of coords) {
    const coord1Directions = {
      [UP]: [],
      [RIGHT] : [],
      [DOWN]: [],
      [LEFT]: []
    };
    for (const coord2 of coords) {
      // returns the direction of this coord2 in respect to coord1 
      // return up, down, right, left or null
      const coord2Direction = getCoordDirections(coord1, coord2);


      // if we found a valid direction, we store it in the correct direction array in our hash
      //ex. if coord2 is directly above coord1, store coord2 in UP array
      // we do this for every coord and store in hash
      if (coord2Direction in coord1Directions) coord1Directions[coord2Direction].push(coord2);
    }
    const coord1String = coordsToString(coord1);
    coordsTable[coord1String] = coord1Directions;
  }
  return coordsTable;
}


// checks based on the x, y values the direction of coord2 in relation to coord1
function getCoordDirections(coord1, coord2) {
  const [x1, y1] = coord1;
  const [x2, y2] = coord2;
  if (y2 == y1) {
    if (x2 > x1) {
      return RIGHT;
    } else if (x2 < x1) {
      return LEFT;
    }
  } else if (x2 === x1) {
    if (y2 > y1){
      return UP;
    } else if (y2 < y1) {
      return DOWN;
    }
  }
  // if we dont hit any directions: up, left, right, down, return empty string
  return null;
}


function getRectangleCount(coords, coordsTable) {
  let rectangleCount = 0;
  for (const coord of coords) {
    // get all rectangle with this coord as the bottom left coord
    rectangleCount += clockwiseCountRectangles(coord, coordsTable, UP, coord);
  }
  return rectangleCount;
}


function clockwiseCountRectangles(coord, coordsTable, direction, origin) {
  const coordString = coordsToString(coord);
  // base case when direction is left
  if (direction === LEFT) {
    // boolean
    const rectangleFound = coordsTable[coordString][LEFT].includes(origin);
    return rectangleFound ? 1 : 0;
  } else {
    let rectangleCount = 0;
    const nextDirection = getNextClockwiseDirection(direction);
    for (const nextCoord of coordsTable[coordString][direction]) {
      rectangleCount += clockwiseCountRectangles(nextCoord, coordsTable, nextDirection, origin);
    }
    return rectangleCount;
  }
}


function getNextClockwiseDirection(direction) {
  if (direction === UP) return RIGHT;
  if (direction === RIGHT) return DOWN;
  if (direction === DOWN) return LEFT;
  return null;
  // we already handle the case where the curr direction is left and we need to go up
}


function coordsToString(coord) {
  const [x, y] = coord;
  return `${x} - ${y}`;
}


const UP = 'up';
const RIGHT = 'right';
const DOWN = 'down';
const LEFT = 'left';


// Do not edit the line below.
exports.rectangleMania = rectangleMania;

