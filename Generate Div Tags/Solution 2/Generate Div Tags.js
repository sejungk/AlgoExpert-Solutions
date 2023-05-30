// This kind of question is designed to test how you can implement a solution
// It's not designed to test a candidates ability to analyze space/time complexity
// Space/Time complexity: Catalan Number
// space: O((2n)!/((n!((n + 1)!)))) time: O((2n)!/((n!((n + 1)!))))


function generateDivTags(numberOfTags) {
  let allDivTags = [];
  createDivs("", numberOfTags, numberOfTags, allDivTags);
  return allDivTags;
}


function createDivs(prefix, openingTagsNeeded, closingTagsNeeded, allDivTags) {
  if (openingTagsNeeded > 0) {
    createDivs(prefix + "<div>", openingTagsNeeded - 1, closingTagsNeeded, allDivTags);
  }


  if (closingTagsNeeded > openingTagsNeeded) {
    createDivs(prefix + "</div>", openingTagsNeeded, closingTagsNeeded - 1, allDivTags);
  }


  if (closingTagsNeeded === 0) allDivTags.push(prefix);
}


// Do not edit the line below.
exports.generateDivTags = generateDivTags;

