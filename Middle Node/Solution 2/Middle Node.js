// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


exports.LinkedList = LinkedList;


function middleNode(linkedList) {
  let slowPointer = linkedList;
  let fastPointer = linkedList;
    
  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }


  return slowPointer;
}


// Do not edit the line below.
exports.middleNode = middleNode;

