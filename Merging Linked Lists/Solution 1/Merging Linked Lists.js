// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


exports.LinkedList = LinkedList;


function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let listOneNodes = new Set();
  let currentNodeOne = linkedListOne;
  while (currentNodeOne !== null) {
    listOneNodes.add(currentNodeOne);
    currentNodeOne = currentNodeOne.next;
  }


  let currentNodeTwo = linkedListTwo
  while (currentNodeTwo !== null) {
    if (listOneNodes.has(currentNodeTwo)) return currentNodeTwo;
    currentNodeTwo = currentNodeTwo.next;
  }
  return null;
}


// Do not edit the line below.
exports.mergingLinkedLists = mergingLinkedLists;

