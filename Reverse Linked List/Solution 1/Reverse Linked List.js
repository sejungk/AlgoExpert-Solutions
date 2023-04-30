// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function reverseLinkedList(head) {
  let prevNode = null;
  let currNode = head;


  while (currNode !== null) {
    const nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
}


// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.reverseLinkedList = reverseLinkedList;

