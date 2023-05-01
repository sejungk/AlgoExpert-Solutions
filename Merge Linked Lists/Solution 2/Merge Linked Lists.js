// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function mergeLinkedLists(headOne, headTwo) {
  mergeLinkedList(null, headOne, headTwo);
  return headOne.value < headTwo.value ? headOne : headTwo;
}


function mergeLinkedList(prev, p1, p2) {
  if (p1 === null) {
    prev.next = p2;
    return;
  }
  if (p2 === null) return;
  
  if (p1.value < p2.value) {
    mergeLinkedList(p1, p1.next, p2);
  } else {
    if (prev !== null) prev.next = p2;
    const temp = p2.next;
    p2.next = p1;      
    mergeLinkedList(p2, p1, temp);
  }
}


// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.mergeLinkedLists = mergeLinkedLists;

