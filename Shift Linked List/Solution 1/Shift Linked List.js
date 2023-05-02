// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function shiftLinkedList(head, k) {
  let length = 0;
  let node = head;
  
  while (node !== null) {
    node = node.next;
    length++;
  }
  
  shiftPoint = k;
  if (Math.abs(k) > length) shiftPoint = k % length;
  if (shiftPoint < 0) shiftPoint = length + shiftPoint;
  shiftPoint = length - shiftPoint;


  let headNode = head;
  let prevNode = head;
  let currNode = head;


  if (shiftPoint === length || k === 0 || k === length) return head;
  
  for (let i = 1; i < shiftPoint; i++) {
    prevNode = prevNode.next;
  }
  let newHead = prevNode.next;


  for (let i = 1; i < length; i++) {
    currNode = currNode.next;
  }


  prevNode.next = null;
  currNode.next = headNode;
  return newHead;
}


// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.shiftLinkedList = shiftLinkedList;