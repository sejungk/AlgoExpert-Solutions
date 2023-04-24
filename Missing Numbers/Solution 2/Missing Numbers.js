function missingNumbers(nums) {
  let total = sum(arrayFromAToB(1, nums.length + 3));
  for (const num of nums) {
    total -= num;
  }


  const averageMissingValue = Math.floor(total / 2);
  let foundFirstHalf = 0;
  let foundSecondHalf = 0;


  for (const num of nums) {
    // determine which half the number is in and add to sum
    if (num <= averageMissingValue) {
      foundFirstHalf += num;
    } else {
      foundSecondHalf += num;
    }
  }


  // sum up all nums from 1 to the halfway point inclusive (+ 1)
  const expectedFirstHalf = sum(arrayFromAToB(1, averageMissingValue + 1));
  
  // sum up from the halfway point inclusive (+ 1) to end of nums inclusive (+2 +1)
  const expectedSecondHalf = sum(arrayFromAToB(averageMissingValue + 1, nums.length + 3));
  return [expectedFirstHalf - foundFirstHalf, expectedSecondHalf - foundSecondHalf];
}


const arrayFromAToB = (a, b) => {
  const array = [];
  for (let num = a; num < b; num++) {
    array.push(num);
  }
  return array;
};


const sum = array => array.reduce((a, b) => a + b);


// Do not edit the line below.
exports.missingNumbers = missingNumbers;

