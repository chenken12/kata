const sumLargestNumbers = function(data) {
  // Put your solution here
  let bigNum = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      let sum = data[i] + data[j];
      if (i !== j && bigNum < sum) {
        bigNum = sum;
      }
    }
  }
  return bigNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));