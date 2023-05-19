// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


exports.BinaryTree = BinaryTree;


function mergeBinaryTrees(tree1, tree2) {
  if (!tree1) return tree2;


  let stack1 = [tree1];
  let stack2 = [tree2];


  while (stack1.length) {
    let currNode1 = stack1.pop();
    let currNode2 = stack2.pop();
    
    if (currNode2 === null) continue;


    currNode1.value += currNode2.value;


    if (!currNode1.left) currNode1.left = currNode2.left;
    else {
      stack1.push(currNode1.left);
      stack2.push(currNode2.left);
    }


    if (!currNode1.right) currNode1.right = currNode2.right;
    else {
      stack1.push(currNode1.right);
      stack2.push(currNode2.right);
    }    
  }  
  return tree1;
}


// Do not edit the line below.
exports.mergeBinaryTrees = mergeBinaryTrees;

