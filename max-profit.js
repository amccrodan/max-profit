// Brute Force

function maxProfit(inputArr) {
  return inputArr.reduce(function(a, element, index) {
    var maxDiff = -1;
    for (var i = index + 1; i <= inputArr.length; i++) {
      var diff = inputArr[i] - element;
      maxDiff = (diff > maxDiff) ? diff : maxDiff;
    }
    return Math.max(a, maxDiff);
  }, -1);
}

// Elegant solution?

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([1, 2, 3, 4, 55, 6, 2, 8, 9]));
console.log(maxProfit([45, 34, 30, 29, 28, 11, 4]));