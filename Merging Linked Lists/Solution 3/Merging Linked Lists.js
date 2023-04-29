// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


exports.LinkedList = LinkedList;


function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let currentNodeOne = linkedListOne;
  let currentNodeTwo = linkedListTwo;


  while (currentNodeOne !== currentNodeTwo) {
    if (currentNodeOne === null) {
      currentNodeOne = linkedListTwo;
    } else {
      currentNodeOne = currentNodeOne.next;
    }


    if (currentNodeTwo === null) {
      currentNodeTwo = linkedListOne;
    } else {
      currentNodeTwo = currentNodeTwo.next;
    }
  }
  
  return currentNodeOne;
}


// Do not edit the line below.
exports.mergingLinkedLists = mergingLinkedLists;

