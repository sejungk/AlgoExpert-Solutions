// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


exports.LinkedList = LinkedList;


function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;


  // this will not be an indefinite loop because by the time we looped twice,
  // if there is not intersection, we will end up at null values at the same time
  // since we iterated through same # of node, this will break the loop
  // since both nodes will be equal to null
  
  while (nodeOne !== nodeTwo) {
    if (nodeOne === null) nodeOne = linkedListTwo;
    else nodeOne = nodeOne.next;


    if (nodeTwo === null) nodeTwo = linkedListOne;
    else nodeTwo = nodeTwo.next;
  }
  return nodeOne;
}


// Do not edit the line below.
exports.mergingLinkedLists = mergingLinkedLists;


// // This is an input class. Do not edit.
// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }


// exports.LinkedList = LinkedList;


// function mergingLinkedLists(linkedListOne, linkedListTwo) {
//   let listOneNodes = new Set();