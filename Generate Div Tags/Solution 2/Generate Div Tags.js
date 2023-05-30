// Space/Time complexity: catalan number


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


  if (closingTagsNeeded === 0) {
    allDivTags.push(prefix);
    return allDivTags;
  }
}


// Do not edit the line below.
exports.generateDivTags = generateDivTags;

