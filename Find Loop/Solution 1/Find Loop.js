// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function findLoop(head) {
  let set = new Set();
  let node = head;
  
  while (!set.has(node)) {
    set.add(node);
    node = node.next;
  }


  return node;
}


// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.findLoop = findLoop;

