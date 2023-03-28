function apartmentHunting(blocks, reqs) {
  let furthestDist = Infinity;
  let bestBlockIdx;


  for (let i = 0; i < blocks.length; i++) {
    let currFurthestDist = -Infinity;
    
    for (const req of reqs) {
      let shortestDistOfReq = Infinity
      
      for (let currBlock = 0; currBlock < blocks.length; currBlock++) {
        let currBlockDist = Math.abs(currBlock - i);


        // if the currBlock has a req...
        if (blocks[currBlock][req]) {
         shortestDistOfReq = Math.min(currBlockDist, shortestDistOfReq);
        }
      }
      // if our curr requirement is further than others update
      if (shortestDistOfReq > currFurthestDist) {
        currFurthestDist = shortestDistOfReq;
        currBestBlockIdx = i;
      }
    }
    if (currFurthestDist < furthestDist) {
      furthestDist = currFurthestDist;
      bestBlockIdx = currBestBlockIdx;
    }
  }
  return bestBlockIdx;
}


// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;

