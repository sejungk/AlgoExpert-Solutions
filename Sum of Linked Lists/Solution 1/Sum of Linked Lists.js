// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  
  let sum = new LinkedList(0);
  let currNode = sum;
  let carry = 0;
  
  while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
    let valueOne = nodeOne !== null ? nodeOne.value : 0;
    let valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
    let currSum = valueOne + valueTwo + carry;


    let newValue = currSum % 10;
    let newNode = new LinkedList(newValue);
    currNode.next = newNode;
    currNode = newNode;
    
    carry = Math.floor(currSum / 10);
    
    nodeOne = nodeOne !== null ? nodeOne.next : null;
    nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
  }
  return sum.next;
}


// Do not edit the lines below.
exports.LinkedList = LinkedList;