// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function rearrangeLinkedList(head, k) {
  let smallerHead = null;
  let smallerTail = null;
  let equalHead = null;
  let equalTail = null;
  let greaterHead = null;
  let greaterTail = null;


  let node = head;


  while (node !== null) {
    if (node.value < k) {
      [smallerHead, smallerTail] = addNode(smallerHead, smallerTail, node);
    }
    else if (node.value === k) {
      [equalHead, equalTail] = addNode(equalHead, equalTail, node);
    } 
    else {
      [greaterHead, greaterTail] = addNode(greaterHead, greaterTail, node);
    }


    let prev = node;
    node = node.next;
    prev.next = null;
  }


  const [firstHead, firstTail] = mergeLists(smallerHead, smallerTail, equalHead, equalTail);
  const [finalHead, finalTail] = mergeLists(firstHead, firstTail, greaterHead, greaterTail);
  return finalHead;
}


function addNode(head, tail, nodeToAdd) {
  let newHead = head;
  let newTail = nodeToAdd;
  
  if (newHead === null) newHead = nodeToAdd;
  if (tail !== null) tail.next = nodeToAdd;
  
  return [newHead, newTail];
}


function mergeLists(headOne, tailOne, headTwo, tailTwo) {
  const mergedHead = headOne !== null ? headOne : headTwo;
  const mergedTail = tailTwo !== null ? tailTwo : tailOne;


  if (tailOne !== null) tailOne.next = headTwo;
  return [mergedHead, mergedTail];
}


// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.rearrangeLinkedList = rearrangeLinkedList;

