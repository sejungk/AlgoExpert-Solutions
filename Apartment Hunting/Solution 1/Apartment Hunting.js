function apartmentHunting(blocks, reqs) {
  let furthestDistanceAtEachBlock = new Array(blocks.length).fill(-Infinity);


  for (let i = 0; i < blocks.length; i++) {
    for (const req of reqs) {
      let shortestDistOfReq = Infinity


      for (let currBlock = 0; currBlock < blocks.length; currBlock++) {
        // if the currBlock has a req...
        if (blocks[currBlock][req]) {
         shortestDistOfReq = Math.min(shortestDistOfReq, Math.abs(currBlock - i));
        }
      }
      // if our curr requirement is further than others update
      // furthestReqDistance = Math.max(furthestReqDistance, shortestDistOfReq);
      furthestDistanceAtEachBlock[i] = Math.max(furthestDistanceAtEachBlock[i], shortestDistOfReq)
    }
  }
  return findMin(furthestDistanceAtEachBlock);
}




function findMin(array) {
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

