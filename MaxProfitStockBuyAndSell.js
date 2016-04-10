// Calculate Max Profit of a given Buy and Sell of a stock (Where Buy occurs before Sell)

// Input string = space delimited string
var inputStr = "12 12 -4 7 -3 -10 4 2 8 -2 4 -5 -6";

// Other test inputs;
//var inputStr = "10 7 -3 -10 4 2 8 -2 4 -5 -6";
//var inputStr = "8 -4 -5 20 5 4 6 -10 -2";
//var inputStr = "4 -2 -3 10 -3";
//var inputStr = "4 -2 -3 -10 -3";

// Convert input string to an integer-array
var inputArr = inputStr.split(' ').map(Number);

// Remove first element from the array; 1st element = # of elements in the array
var n = inputArr.shift();

// Function to find the max profit for the given sequence
var maxProfitBuySellStock = function(inputArr) {
  
  var seedDailyPrice = 100001,  
      runningSum = 0;
  
  // Daily price array helps to  compare daily min price and max profit
  var dailyPriceArr = inputArr.map(function(currVal, idx, a) {
        runningSum += currVal;
        return seedDailyPrice + runningSum;
      });

  // Set default price on day[0] that relates to the profit or loss on day[1] 
  dailyPriceArr.unshift(seedDailyPrice);
  //console.log(dailyPriceArr);

  var minPriceSoFar = Number.MAX_VALUE, 
      maxProfit = 0, 
      maxProfitSellToday = 0, 
      dailyPrice = 0;
  
  for (var i = 0; i <= (dailyPriceArr.length - 1); i++ ) {
    dailyPrice = dailyPriceArr[i];
    maxProfitSellToday = (dailyPrice - minPriceSoFar);
    maxProfit = (maxProfit > maxProfitSellToday ? maxProfit: maxProfitSellToday);
    minPriceSoFar = (dailyPrice < minPriceSoFar ? dailyPrice : minPriceSoFar);
  }
  
  return (maxProfit > 0 ? maxProfit: 0);
};

var maxProfit = maxProfitBuySellStock(inputArr);
console.log(maxProfit);
