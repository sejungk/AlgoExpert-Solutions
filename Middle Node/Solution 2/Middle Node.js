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
    // .next.next will not throw an error bc we know fastPointer.next is not null
    fastPointer = fastPointer.next.next;
  }


  return slowPointer;
}


// Do not edit the line below.
exports.middleNode = middleNode;

