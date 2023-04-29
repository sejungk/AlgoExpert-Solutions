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
  let countOne = 0;
  while (currentNodeOne !== null) {
    countOne++;
    currentNodeOne = currentNodeOne.next;
  }


  let currentNodeTwo = linkedListTwo;
  let countTwo = 0;
  while (currentNodeTwo !== null) {
    countTwo++;
    currentNodeTwo = currentNodeTwo.next;
  }
  const difference = Math.abs(countTwo - countOne);
  let biggerCurrentNode = countOne > countTwo ? linkedListOne : linkedListTwo;
  let smallerCurrentNode = countOne > countTwo ? linkedListTwo : linkedListOne;
  
  for (let i = 0; i < difference; i++) {
    biggerCurrentNode = biggerCurrentNode.next;
  }


  while (biggerCurrentNode !== smallerCurrentNode) {
    biggerCurrentNode = biggerCurrentNode.next;
    smallerCurrentNode = smallerCurrentNode.next;
  }
  return biggerCurrentNode;
}


// Do not edit the line below.
exports.mergingLinkedLists = mergingLinkedLists;

