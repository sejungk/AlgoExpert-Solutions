function apartmentHunting(blocks, reqs) {
  // use array to make it easier to keep track of idx 
  let maxDistancesAtBlocks = new Array(blocks.length).fill(-Infinity);


  for (let i = 0; i < blocks.length; i++) {
    for (const req of reqs) {
      //what is the distance of the closest req
      let closestReqDist = Infinity;
      for (let j = 0; j < blocks.length; j++) {
        // if req at block is true
        if (blocks[j][req]) {
          closestReqDist = Math.min(closestReqDist, Math.abs(i - j))
        }
      }
      maxDistancesAtBlocks[i] = Math.max(maxDistancesAtBlocks[i], closestReqDist)
    }
  }
  return getIdxAtMinValue(maxDistancesAtBlocks);
}


function getIdxAtMinValue(array) {
  let idxAtMinValue = 0;
  let minValue = Infinity;


  for (let i = 0; i < array.length; i++) {
    let currValue = array[i];
    if (currValue < minValue) {
      minValue = currValue;
      idxAtMinValue = i;
    }
  }
  return idxAtMinValue;
}


// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;

