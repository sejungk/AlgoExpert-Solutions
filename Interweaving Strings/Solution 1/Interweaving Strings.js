function interweavingStrings(one, two, three) {
  if (one.length + two.length !== three.length) return false;
  let cache = new Array(one.length + 1).fill(null).map(_ => new Array(two.length + 1).fill(null));
  return areInterwoven(one, two, three, 0, 0, cache);
}


function areInterwoven(one, two, three, i, j, cache) {
  if (cache[i][j] !== null) return cache[i][j];
 
  const k = i + j;
  // we've brought i and j to the end of their respective strings
  if (k === three.length) return true;


  if (i < one.length && one[i] === three[k]) {
    cache[i][j] = areInterwoven(one, two, three, i + 1, j, cache);
    if (cache[i][j]) return true;
  }


  if (j < two.length && two[j] === three[k]) {
    cache[i][j] = areInterwoven(one, two, three, i, j + 1, cache);
    return cache[i][j];
  }


  cache[i][j] = false;
  return cache[i][j];
}


// Do not edit the line below.
exports.interweavingStrings = interweavingStrings;

