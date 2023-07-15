function boggleBoard(board, words) {
  const trie = new Trie();
  const foundWords = new Set();
  
  for (let word of words) {
    trie.insertWord(word);
  }


  let currNode = trie.root;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      explore(row, col, board, new Set(), currNode, foundWords);
    }
  }
  return Array.from(foundWords);
}


function explore(row, col, board, visited, currNode, foundWords) {
  let key = row + ',' + col;
  if (visited.has(key)) return;


  const letter = board[row][col];
  if (!(letter in currNode)) return;
  visited.add(key);


  currNode = currNode[letter];
  if ('*' in currNode) foundWords.add(currNode['*']);


  const neighborPos = findNeighbors(row, col, board);
  for (let pos of neighborPos) {
    const [neighborRow, neighborCol] = pos;
    explore(neighborRow, neighborCol, board, visited, currNode, foundWords);
  }
  visited.delete(key);
}


function findNeighbors(row, col, board) {
  const neighborPos = [];
  let neighbors = [ [0, 1], [1, 0], [-1, 0], [0, -1], [-1, -1], [-1, 1], [1, -1], [1, 1] ];
  
  for (let neighbor of neighbors) {
    const [neighborRow, neighborCol] = neighbor;
    const newRow = neighborRow + row;
    const newCol = neighborCol + col;
    if (inBounds(newRow, newCol, board)) neighborPos.push([newRow, newCol]);
  }
  return neighborPos;
}


function inBounds(row, col, board) {
  const rowInBounds = row >= 0 && row < board.length;
  const colInBounds = col >= 0 && col < board[0].length;
  return rowInBounds && colInBounds;
}


class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }


  insertWord(string) {
    let node = this.root;
    for (let letter of string) {
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
    node[this.endSymbol] = string;
  }
}


// Do not edit the line below.
exports.boggleBoard = boggleBoard;

