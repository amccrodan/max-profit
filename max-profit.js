// Brute Force Recursion

function maxProfit(inputArr) {
  if (inputArr.length === 1) {
    return -1;
  }

  var diffArray = inputArr.slice(1).map(function(element){
    return element - inputArr[0];
  });

  var maxDiff = Math.max.apply(null, diffArray);

  return Math.max(maxDiff, maxProfit(inputArr.slice(1)));
}

// Brute Force For-loops



console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([1, 2, 3, 4, 55, 6, 2, 8, 9]));
console.log(maxProfit([45, 34, 30, 29, 28, 11, 4]));