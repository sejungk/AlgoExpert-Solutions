function mergeOverlappingIntervals(array) {
  let sortedArr = array.sort((a, b) => a[0] - b[0])
	let intervals = [];
	let currentIdx= 0;
	intervals.push(array[currentIdx]);
	
	while (currentIdx < array.length) {
		if (array[currentIdx][0] <= intervals[intervals.length - 1][1]) {
			let lowRange = Math.min(intervals[intervals.length - 1][0], array[currentIdx][0])
			let highRange = Math.max(intervals[intervals.length - 1][1], array[currentIdx][1])
			intervals[intervals.length - 1] = [lowRange, highRange];
		} else {
    		intervals.push(array[currentIdx]);
		}
		currentIdx++;
	}
	return intervals;
}


// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;

