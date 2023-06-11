// explore left
// curr top level nod
// explore right


// at any given node, you can either: call callback func or call callback func at a later time
// how do you determine whether or not you should call callback func? the previous node traversed will determine whether you call callback




function iterativeInOrderTraversal(tree, callback) {
  let prevNode = null;
  let currNode = tree;
  while (currNode !== null) {
    let nextNode; 
    // we're traversing down
    // if prevNode === null were at root node
    // if prevNode === currNode.parent => we came from the top and we must further explore down
    if (prevNode === null || prevNode === currNode.parent) {
      if (currNode.left !== null) nextNode = currNode.left; 
      else {
        // while traversing down, if curr node doesn't have left child, 
        // call callback on currNode  
        callback(currNode);
        // since left child doesn't exist, go to right child
        // if both left and right child don't exist, call callback on parent
        nextNode = currNode.right !== null ? currNode.right : currNode.parent;
      }
    } 


    // we're traversing up
    else if (prevNode === currNode.left) {
      callback(currNode);
      // we just check left child, now check right child if it exist
      nextNode = currNode.right !== null ? currNode.right : currNode.parent;
    } 
    