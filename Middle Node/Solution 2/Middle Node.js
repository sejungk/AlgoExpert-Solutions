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


  // we must check for fastPointer.next !== null to prevent null errors
  // we could get an error is fastPointer.next is null and we try to check the next value of null which will throw an error
  while (fastPointer !== null && fastPointer.next !== null) {
    // fastPointer will move twice as fast or double as slow pointer
    // so for each one node slowPointer moves, fastPointer will move double which is 2 nodes
    slowPointer = slowPointer.next;
    // .next.next will not throw an error bc we know fastPointer.next is not null
    fastPointer = fastPointer.next.next;
  }


  return slowPointer;
}


// Do not edit the line below.
exports.middleNode = middleNode;

