function semordnilap(words) {
  let array = [];
  
  for (word of words) {
    const reverse = word.split("").reverse().join("");
    if (words.includes(reverse) && reverse !== word) array.push([reverse, word]);
    words = [...words.slice(0, words.indexOf(word)), ...words.slice(words.indexOf(word) + 1) ]
  }
  
  return array;
}


// Do not edit the line below.
exports.semordnilap = semordnilap;

