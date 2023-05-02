// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function shiftLinkedList(head, k) {
  let length = 1;
  let tailNode = head;
  
  while (tailNode.next !== null) {
    tailNode = tailNode.next;
    length++;
  }


  let shift = Math.abs(k) % length;
  let shiftPoint = k > 0 ? length - shift : shift;
  if (shiftPoint === 0 || shiftPoint === length) return head;
  
  let headNode = head;
  let prevNode = head;
  for (let i = 1; i < shiftPoint; i++) {
    prevNode = prevNode.next;
  }
  
  let newHead = prevNode.next;
  prevNode.next = null;
  tailNode.next = headNode;
  return newHead;
}


// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.shiftLinkedList = shiftLinkedList;