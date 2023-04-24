function countSquares(points) {
  const pointsSet = new Set();
  for (const point of points) {
    pointsSet.add(pointToString(point));
  }


  let count = 0;
  for (const pointA of points) {
    for (const pointB of points) {
      if (pointA === pointB) continue;


      const midpoint = [(pointA[0] + pointB[0]) / 2, (pointA[1] + pointB[1]) / 2];
      const xDistanceFromMid = pointA[0] - midpoint[0];
      const yDistanceFromMid = pointA[1] - midpoint[1];


      const pointC = [midpoint[0] + yDistanceFromMid, midpoint[1] - xDistanceFromMid];
      const pointD = [midpoint[0] - yDistanceFromMid, midpoint[1] + xDistanceFromMid];      


      if (pointsSet.has(pointToString(pointC)) && pointsSet.has(pointToString(pointD))) {
        count++
      }
    }
  }
  return count / 4;
}


function pointToString(point) {
  return point.join(',');
}


// Do not edit the line below.
exports.countSquares = countSquares;

