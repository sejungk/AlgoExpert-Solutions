// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function linkedListPalindrome(head) {
  let fast = head;
  let slow = head;


  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }


  let reversedStart = reverseLinkedList(slow);
  let start = head;


  while (reversedStart !== null) {
    if (start.value !== reversedStart.value) return false;
    reversedStart = reversedStart.next;
    start = start.next;
  }
  return true;
}


function reverseLinkedList(curr) {
  let prev = null;


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
exports.linkedListPalindrome = linkedListPalindrome;

