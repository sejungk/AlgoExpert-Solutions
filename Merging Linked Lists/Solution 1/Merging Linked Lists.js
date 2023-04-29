// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


exports.LinkedList = LinkedList;


function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let set = new Set();
  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;


  while (nodeOne !== null) {
    set.add(nodeOne.value); 
    nodeOne = nodeOne.next;
  }


  while (nodeTwo !== null) {
    if (set.has(nodeTwo.value)) return nodeTwo;
    nodeTwo = nodeTwo.next;
  }
  return null;
}


// Do not edit the line below.
exports.mergingLinkedLists = mergingLinkedLists;


// // This is an input class. Do not edit.
// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }