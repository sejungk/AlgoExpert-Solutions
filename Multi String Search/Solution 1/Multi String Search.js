function multiStringSearch(bigString, smallStrings) {
  const trie = new Trie();


  for (let word of smallStrings) {
    trie.insertString(word);
  }


  const foundStrings = {};
  for (let i = 0; i < bigString.length; i++) {
    findSmallStrings(bigString, i, trie, foundStrings)
  } 
  return smallStrings.map((word) => foundStrings[word] === true)
}


// we want to see if at the starting idx, is there a string contained in this trie
function findSmallStrings(bigString, startIdx, trie, foundStrings) {
  let currentNode = trie.root;
  for (let i = startIdx; i < bigString.length; i++) {
    let letter = bigString[i];
    if (!(letter in currentNode)) break;
    currentNode = currentNode[letter];
    if ("*" in currentNode) foundStrings[currentNode["*"]] = true;
  }
}




class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }


  insertString(string) {
    let node = this.root;
    for (const letter of string) {
      if (!(letter in node)) node[letter] = {};
      node = node[letter]
    }
    node[this.endSymbol] = string;
  }
}
// Do not edit the line below.
exports.multiStringSearch = multiStringSearch;

