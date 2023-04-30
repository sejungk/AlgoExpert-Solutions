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
  let nodeOne = linkedListOne;
  while (nodeOne !== null) {
    listOneNodes.add(nodeOne);
    nodeOne = nodeOne.next;
  }


  let nodeTwo = linkedListTwo;
  while (nodeTwo !== null) {
    if (listOneNodes.has(nodeTwo)) return nodeTwo;
    nodeTwo = nodeTwo.next;
  }
  return null;
}

