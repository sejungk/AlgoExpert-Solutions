// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}


// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }


  setHead(node) {…}


  setTail(node) {…}


  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.next = node;
    nodeToInsert.prev = node.prev;


    if (node === this.head) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }


  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.next = node.next;
    nodeToInsert.prev = node;
    
    if (this.tail === node) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }


  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let counter = 1;
    while (node !== null && counter !== position) {
      node = node.next;
      counter++;
    }
    if (node === null) {
      this.setTail(nodeToInsert);
    } else {
      this.insertBefore(node, nodeToInsert);
    }
  }


  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      let currNode = node;
      node = node.next;


      if (currNode.value === value) this.remove(currNode);
    }
  }


  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeBindings(node);
  }
  
  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) node = node.next;
    return node !== null;
  }


  removeBindings(node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}


// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;

