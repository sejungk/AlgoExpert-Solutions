function multiStringSearch(bigString, smallStrings) {
  return smallStrings.map(smallStrings => isInBigString(bigString, smallStrings))
}


function isInBigString(bigString, smallString) {
  for (let i = 0; i < bigString.length; i++) {
    if (i + smallString.length > bigString.length) break;
    if (isInBigStringHelper(bigString, smallString, i)) return true;
  }
  return false;
}


function isInBigStringHelper(bigString, smallString, startIdx) {
  let leftBigIdx = startIdx;
  let rightBigIdx = startIdx + smallString.length - 1;
  let leftSmallIdx = 0;
  let rightSmallIdx = smallString.length - 1;
  while (leftBigIdx <= rightBigIdx) {
    if (bigString[leftBigIdx] != smallString[leftSmallIdx] || bigString[rightBigIdx] != smallString[rightSmallIdx]) {
      return false;
    }
    leftBigIdx++;
    leftSmallIdx++;
    rightBigIdx--;
    rightSmallIdx--;
  }
  return true;
}


// Do not edit the line below.
exports.multiStringSearch = multiStringSearch;

