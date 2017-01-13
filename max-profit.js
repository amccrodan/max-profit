// Brute Force

function maxProfit(inputArr) {
  var maxProfit = 0;

  for (var i = 0; i <= inputArr.length - 1; i++) {
    maxProfit = checkRestOfArray(inputArr, i) > maxProfit ? checkRestOfArray(inputArr, i) : maxProfit;
  }

  if (maxProfit === 0) {
    return -1;
  }

  return maxProfit;
}

function checkRestOfArray(inputArr, index) {
  var startVal = inputArr[index];
  var maxDiff = 0;

  for (var i = index + 1; i <= inputArr.length; i++) {
    var diff = inputArr[i] - startVal;
    maxDiff = diff > maxDiff ? diff : maxDiff;
  }
  return maxDiff;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([1, 2, 3, 4, 55, 6, 2, 8, 9]));
console.log(maxProfit([45, 34, 30, 29, 28, 11, 4]));