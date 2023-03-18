function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
	for (let i =0; i < array.length; i++) {
		let currArrNum = array[i]
	if (seqIdx === sequence.length) break;
		if (sequence[seqIdx] === currArrNum) seqIdx++;
	}
	return seqIdx == sequence.length;
}


// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;

