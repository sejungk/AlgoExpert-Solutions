// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }


  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }


  breadthFirstSearch(array) {
    let queue = [ this ]


    while (queue.length) {
      let node = queue.shift();
      array.push(node.name);
      
      for (let child of node.children) {
        queue.push(child);
      }
    }
    return array;
  }
}


// Do not edit the line below.
exports.Node = Node;

