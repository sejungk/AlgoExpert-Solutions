class createTrie {
  constructor(sentence) {
    this.root = {};
    this.endSymbol = '*';
    this.populateTrieWithLetters(sentence);
  }


  populateTrieWithLetters(sentence) {
    const words = sentence.split(" ");
    for (let word of words) {
      for (let i = 0; i < word.length; i++) {
        this.addNodesStartingAt(word, i);
      }
    }
  }


  addNodesStartingAt(word, i) {
    let node = this.root;
    for (let j = i; j < word.length; j++) {
      let letter = word[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
    // node[this.endSymbol] = true;
  }
  
  search(string) {
    let node = this.root;
    for (let letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    return true;
  }
}


function multiStringSearch(bigString, smallStrings) {
  const trie = new createTrie(bigString);
  const foundStrings = new Array(smallStrings.length).fill(false);
  
  for (let i = 0; i < smallStrings.length; i++) {
    let word = smallStrings[i];
    if (trie.search(word) === true) foundStrings[i] = true;
  }
  return foundStrings;
}


// Do not edit the line below.
exports.multiStringSearch = multiStringSearch;

