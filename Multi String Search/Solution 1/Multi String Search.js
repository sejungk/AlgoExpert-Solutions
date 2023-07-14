// Time: O(bns)
function multiStringSearch(bigString, smallStrings) {
  const trie = new Trie();
  
  for (const string of smallStrings) {
    trie.insert(string);
  }
  
  const containedStrings = {};
  for (let i = 0; i < bigString.length; i++) {
    findSmallStringIn(bigString, i, trie, containedStrings);
  }
  return smallStrings.map(string => string in containedStrings);
}


function findSmallStringIn(string, startIdx, trie, containedStrings) {
  let currNode = trie.root;
  for (let i = startIdx; i < string.length; i++) {
    const currChar = string[i];
    if (!(currChar in currNode)) break;
    currNode = currNode[currChar];
    if (trie.endSymbol in currNode) containedStrings[currNode[trie.endSymbol]] = true;
  }
}


class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }


  insert(string) {
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      let letter = string[i];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
    node[this.endSymbol] = string;
  }
}


// Do not edit the line below.
exports.multiStringSearch = multiStringSearch;

