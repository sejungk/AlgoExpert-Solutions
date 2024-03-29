// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }


  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(i, string);
    }
  }


  insertSubstringStartingAt(i, string) {
    let node = this.root;


    for (let j = i; j < string.length; j++) {
      let letter = string[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
    node[this.endSymbol] = true;
  }


  contains(string) {
    let node = this.root;
    for (let letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    // return node[this.endSymbol] === true;
    return this.endSymbol in node;
  }
}


// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;

