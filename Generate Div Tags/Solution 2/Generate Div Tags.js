// Space/Time complexity: catalan number


function generateDivTags(numberOfTags) {
  let output = [];
  generatePartialTags("", numberOfTags, numberOfTags, output);
  return output;
}


function generatePartialTags(prefix, opening, closing, output) {
  if (opening > 0) {
    generatePartialTags(prefix + "<div>", opening - 1, closing, output);
  }


  if (closing > opening) {
    generatePartialTags(prefix + "</div>", opening, closing - 1, output);
  }


  if (closing === 0) {
    output.push(prefix);
    return output;
  }
}


// Do not edit the line below.
exports.generateDivTags = generateDivTags;

