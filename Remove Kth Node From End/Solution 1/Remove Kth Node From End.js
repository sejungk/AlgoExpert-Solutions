// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function removeKthNodeFromEnd(head, k) {
  let counter = 0;
  let node = head;
  while (node !== null) {
    counter++;
    node = node.next;
  }


  let position = counter - k;
  let removeNode = head;
  if (counter === k) {
    head.value = removeNode.next.value;
    head.next = removeNode.next.next;
    return;
  }
  for (let i = 0; i < position-1; i++) {
    removeNode = removeNode.next;
  }
  removeNode.next = removeNode.next.next
}


// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;

