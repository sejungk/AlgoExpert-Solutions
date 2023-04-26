// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


exports.LinkedList = LinkedList;


function middleNode(linkedList) {
  let count = 0;
  let currNode = linkedList;
  
  while (currNode !== null ) {
    count++;
    currNode = currNode.next;
  }
  
  let middleNode = linkedList;
  for (let i = 0; i < Math.floor(count / 2); i++) {
    middleNode = middleNode.next;
  }
  return middleNode;
}


// Do not edit the line below.
exports.middleNode = middleNode;

