// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function nodeSwap(head) {
  if (head === null || head.next === null) return head;


  const nextNode = head.next;
  head.next = nodeSwap(head.next.next);
  nextNode.next = head;
  return nextNode;
}


// Do not edit the lines below.
exports.nodeSwap = nodeSwap;
exports.LinkedList = LinkedList;

