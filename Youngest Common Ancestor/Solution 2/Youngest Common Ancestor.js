// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}


function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  let descendantOneDepth = calculateDepth(topAncestor, descendantOne);
  let descendantTwoDepth = calculateDepth(topAncestor, descendantTwo);
  const depthDifference = Math.abs(descendantOneDepth - descendantTwoDepth)
  let lowerDescendant = descendantOneDepth > descendantTwoDepth ? descendantOne : descendantTwo;
  let higherDescendant = descendantOneDepth > descendantTwoDepth ? descendantTwo : descendantOne;
  
  for (let i = 0; i < depthDifference; i++) {
    lowerDescendant = lowerDescendant.ancestor;
  }


  while (lowerDescendant !== null) {
    if (lowerDescendant === higherDescendant) return lowerDescendant;
    lowerDescendant = lowerDescendant.ancestor;
    higherDescendant = higherDescendant.ancestor;
  }
  
}


function calculateDepth(root, node) {
  let count = 0;


  while (node !== root) {
    count++;
    node = node.ancestor;
  }
  return count;
}


// Do not edit the lines below.
exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;

