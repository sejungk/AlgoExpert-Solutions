function boggleBoard(board, words) {
  let trie = new Trie();
  for (let word of words) {
    trie.addString(word);
  }


  const wordsFound = {};
  // const visited = new Set();
  const visited = board.map(row => row.map(letter => false));
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      findWords(board, row, col, trie.root, wordsFound, visited);
    }
  }
  return Object.keys(wordsFound);
}


function findWords(board, row, col, node, wordsFound, visited) {
  // let key = row + ',' + col;
  // if (visited.has(key)) return;
  // visited.add(key);
  if (visited[row][col]) return;
  
  const letter = board[row][col];
  if (!(letter in node)) return;
  visited[row][col] = true;
  node = node[letter];
  if ('*' in node) wordsFound[node['*']] = true;
  const neighborPos = findNeighbors(row, col, board);
  for (let pos of neighborPos) {
    const [neighborRow, neighborCol] = pos;
    findWords(board, neighborRow, neighborCol, node, wordsFound, visited)
  }
  visited[row][col] = false;
}


function findNeighbors(row, col, board) {
  const neighbors = [ [0, 1], [1, 0], [-1, 0], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]];
  const neighborPos = [];
  for (let neighbor of neighbors) {
    const [neighborRow, neighborCol] = neighbor;
    const newRow = neighborRow + row;
    const newCol = neighborCol + col;
    const neighborKey = newRow + ',' + newCol;
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
  
  addString(string) {
    let node = this.root;
    for (let letter of string) {
      if (!(letter in node)) node[letter] = {};