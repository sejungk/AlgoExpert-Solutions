// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function nodeSwap(head) {
  const temp = new LinkedList(0);
  temp.next = head;
  let prev = temp;
  
  while (prev.next !== null && prev.next.next !== null) {
    const curr = prev.next;
    const next = curr.next;
    // prev -> curr -> next -> x
    
    curr.next = next.next;
    next.next = curr;
    prev.next = next;
    
    prev = curr;
  }
  return temp.next;
}
// Do not edit the lines below.
exports.nodeSwap = nodeSwap;
exports.LinkedList = LinkedList;

