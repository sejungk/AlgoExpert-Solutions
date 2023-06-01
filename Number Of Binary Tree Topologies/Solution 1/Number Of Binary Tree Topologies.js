// time: catalan number space: catalan number
// function numberOfBinaryTreeTopologies(n) {
//   if (n === 0) return 1;
//   let numberOfTrees = 0;
//   for (let leftTreeSize = 0; leftTreeSize < n; leftTreeSize++) {
//     const rightTreeSize = n - 1 - leftTreeSize;
//     const numberOfLeftTrees = numberOfBinaryTreeTopologies(leftTreeSize);
//     const numberOfRightTrees = numberOfBinaryTreeTopologies(rightTreeSize);
//     numberOfTrees += numberOfLeftTrees * numberOfRightTrees;
//   }
//   return numberOfTrees;
// }


function numberOfBinaryTreeTopologies(n, cache = {0: 1}) {
  if (n in cache) return cache[n];


  let numberOfTrees = 0;
  for (let left = 0; left < n; left++) {
    let right = n - left - 1;
    const numberOfLeftTrees = numberOfBinaryTreeTopologies(left, cache);
    const numberOfRightTrees = numberOfBinaryTreeTopologies(right, cache);
    numberOfTrees += numberOfLeftTrees * numberOfRightTrees;
  }
  cache[n] = numberOfTrees;
  return numberOfTrees;
}


// Do not edit the line below.
exports.numberOfBinaryTreeTopologies = numberOfBinaryTreeTopologies;

