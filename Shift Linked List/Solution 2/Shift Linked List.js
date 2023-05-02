// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function shiftLinkedList(head, k) {
  let length = 1;
  let listTail = head;


  while (listTail.next !== null) {
    listTail = listTail.next;
    length++;
  }


  const offset = Math.abs(k) % length;
  if (offset === 0) return head;
  
  const newTailPosition = k > 0 ? length - offset : offset;
  let newTail = head;


  for (let i = 1; i < newTailPosition; i++) {
    newTail = newTail.next;
  }


  const newHead = newTail.next;
  newTail.next = null;
  listTail.next = head;
  return newHead;
}


// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.shiftLinkedList = shiftLinkedList;