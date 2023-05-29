function generateDivTags(numberOfTags) {
  let matchedDivTags = [];
  generateDivTagsFromPrefix(numberOfTags, numberOfTags, '', matchedDivTags);
  return matchedDivTags;
}


function generateDivTagsFromPrefix(openingTagsNeeded, closingTagsNeeded, prefix, result) {
  if (openingTagsNeeded > 0) {
    const newPrefix = prefix + '<div>';
    generateDivTagsFromPrefix(openingTagsNeeded - 1, closingTagsNeeded, newPrefix, result);
  }


  if (openingTagsNeeded < closingTagsNeeded) {
    const newPrefix = prefix + '</div>';
    generateDivTagsFromPrefix(openingTagsNeeded, closingTagsNeeded - 1, newPrefix, result);
  }


  if (closingTagsNeeded === 0) result.push(prefix);
}


// Do not edit the line below.
exports.generateDivTags = generateDivTags;

