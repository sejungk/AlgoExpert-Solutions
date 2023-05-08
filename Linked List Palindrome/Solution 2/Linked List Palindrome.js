// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function linkedListPalindrome(head) {
  const isPalindromeResults = isPalindrome(head, head);
  return isPalindromeResults.outerNodesAreEqual;
}


function isPalindrome(leftNode, rightNode) {
  if (rightNode === null) return new LinkedListInfo(true, leftNode);


  const recursiveCallResults = isPalindrome(leftNode, rightNode.next);
  const {leftNodeToCompare, outerNodesAreEqual} = recursiveCallResults;
  
  const recursiveIsEqual = outerNodesAreEqual && leftNodeToCompare.value === rightNode.value;
  const nextLeftNodeToCompare = leftNodeToCompare.next;


  return new LinkedListInfo(recursiveIsEqual, nextLeftNodeToCompare);
}


class LinkedListInfo {
  constructor(outerNodesAreEqual, leftNodeToCompare) {
    this.outerNodesAreEqual = outerNodesAreEqual;
    this.leftNodeToCompare = leftNodeToCompare;
  }
}


// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.linkedListPalindrome = linkedListPalindrome;

