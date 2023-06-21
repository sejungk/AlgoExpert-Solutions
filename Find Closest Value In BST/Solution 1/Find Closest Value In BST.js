// AVERAGE TIME: O(log n) || AVERAGE SPACE: O(log n)
// WORST TIME: O(n) || WORST SPACE: O(n)


function findClosestValueInBst(tree, target) {
  let closest = Infinity;
  return bstHelper(tree, target, closest);
}




function bstHelper(tree, target, closest) {
  if (tree === null) return closest;


  let currDiff = Math.abs(target - tree.value);
  let prevDiff = Math.abs(target - closest);
  if (currDiff < prevDiff) closest = tree.value;


  if (tree.value === target) return tree.value;
  else if (tree.value < target) return bstHelper(tree.right, target, closest);
  else if (tree.value > target) return bstHelper(tree.left, target, closest);
}


// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

