function multiStringSearch(bigString, smallStrings) {
  let array = new Array(smallStrings.length).fill(false);
  const trie = new Trie(bigString);
  console.log(trie)
  for (let i = 0; i < smallStrings.length; i++) {
    const word = smallStrings[i];
    if (trie.contains(word)) array[i] = true;
  }
  return array;
}


class Trie {
  constructor(string) {
    this.root = {};
    this.insertString(string);
  }


  insertString(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(string, i);
    }
  }


  insertSubstringStartingAt(string, i) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }  
  }
  
  contains(string) {
    let node = this.root;
    for (const letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    return true;
  }
}


// Do not edit the line below.
exports.multiStringSearch = multiStringSearch;

