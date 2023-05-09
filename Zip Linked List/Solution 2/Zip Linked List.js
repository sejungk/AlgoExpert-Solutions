// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}




function zipLinkedList(linkedList) {
  // find midpoint
  let slow = linkedList;
  let fast = linkedList;


  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  let secondHalf = slow.next;
  slow.next = null;


  // identify head nodes
  // set temp variables for next values
  let startOfList = linkedList;
  let middleOfList = reverse(secondHalf);


  while (middleOfList !== null) {
    let startOfListNext = startOfList.next;
    let middleOfListNext = middleOfList.next;
    middleOfList.next = startOfListNext;
    startOfList.next = middleOfList;
    startOfList = startOfListNext;
    middleOfList = middleOfListNext;
  }


  return linkedList;
}


function reverse(head) {
  let prev = null;
  let curr = head;
  
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}




// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.zipLinkedList = zipLinkedList;

