// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}


function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  let descendantOneAncestors = [];


  while (descendantOne !== null) {
    descendantOneAncestors.push(descendantOne.name);
    descendantOne = descendantOne.ancestor;
  }


  while (descendantTwo !== null) {
    if (descendantOneAncestors.includes(descendantTwo.name)) return descendantTwo;
    descendantTwo = descendantTwo.ancestor;
  }
}


// Do not edit the lines below.
exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;

