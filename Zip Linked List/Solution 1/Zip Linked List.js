// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function zipLinkedList(linkedList) {
  if (linkedList.next === null || linkedList.next.next === null) return linkedList;


  const firstHalfHead = linkedList;
  const secondHalfHead = splitLinkedList(linkedList);


  const reversedSecondHalfHead = reverse(secondHalfHead);


  return weaveLinkedLists(firstHalfHead, reversedSecondHalfHead);
}


function splitLinkedList(linkedList) {
  let slow = linkedList;
  let fast = linkedList;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }


  // set next pointer of first half's tail node to null to prevent cycles
  const secondHalfHead = slow.next;
  slow.next = null;
  return secondHalfHead
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


function weaveLinkedLists(listOne, listTwo) {
  let linkedListOne = listOne;
  let linkedListTwo = listTwo;


  while (linkedListOne !== null && linkedListTwo !== null) {
    const linkedListOneNext = linkedListOne.next;
    const linkedListTwoNext = linkedListTwo.next;
    linkedListOne.next = linkedListTwo;
    linkedListTwo.next = linkedListOneNext;
    linkedListOne = linkedListOneNext;
    linkedListTwo = linkedListTwoNext;
  }
  return listOne;
}
// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.zipLinkedList = zipLinkedList;

