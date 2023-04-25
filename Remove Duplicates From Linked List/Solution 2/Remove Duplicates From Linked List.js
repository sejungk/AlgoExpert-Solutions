// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function removeDuplicatesFromLinkedList(linkedList) {
  let node = linkedList;
  
  while (node !== null) {
    let next = node.next;
    while (next !== null && node.value === next.value) {
    // this line below doesnt work because we could get a null reference error
    // while (node.value === next.value && next !== null) {
       next = next.next;
    }
    node.next = next;
    node = next;
  }
  return linkedList;
}


// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;

