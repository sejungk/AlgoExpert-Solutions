function multiStringSearch(bigString, smallStrings) {
  const suffixTrie = new createTrie(bigString);
  return smallStrings.map(string => suffixTrie.contains(string));
}


class createTrie {
  constructor(string) {
    this.root = {};
    this.populateTrieWithLetters(string);
  }


  populateTrieWithLetters(string) {
    for (let i = 0; i < string.length; i++) {
      this.addSubstringStartingAt(string, i);
    }
  }


  addSubstringStartingAt(string, i) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      let letter = string[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
  }
  
  contains(string) {
    let node = this.root;
    for (let letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    return true;
  }
}




// Do not edit the line below.
exports.multiStringSearch = multiStringSearch;

