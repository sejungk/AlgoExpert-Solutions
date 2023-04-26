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
  
  while (currNode.next !== null ) {
    count++;
    currNode = currNode.next;
  }
  
  let halfPoint = Math.ceil(count/2);
  let idx = 0;
  let findMid = linkedList;
  
  while (idx < halfPoint) {
    idx++;
    findMid = findMid.next;
  }
  
  return findMid;
}


// Do not edit the line below.
exports.middleNode = middleNode;

