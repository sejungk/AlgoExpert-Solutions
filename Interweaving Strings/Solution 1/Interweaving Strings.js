function interweavingStrings(one, two, three) {
  if (one.length + two.length !== three.length) return false;
  let matrix = new Array(one.length).fill(0).map(_ => new Array(two.length).fill(0));
  return areInterwoven(one, two, three, 0, 0, matrix);
}


function areInterwoven(one, two, three, i, j) {
  
  const k = i + j;
  // we've brought i and j to the end of their respective strings
  if (k === three.length) return true;


  if (i < one.length && one[i] === three[k]) {
    if (areInterwoven(one, two, three, i + 1, j)) return true;
  }


  if (j < two.length && two[j] === three[k]) {
    return areInterwoven(one, two, three, i, j + 1);
  }
  
  return false;
}


// Do not edit the line below.
exports.interweavingStrings = interweavingStrings;

