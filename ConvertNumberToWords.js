var ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var ten2Teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eightteen', 'Nineteen'];
var tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
var dollarText = 'Dollars',
    million = 1000000,
    thousand = 1000,
    hundred = 100;

var convertToTens = function(n) {
  if (n < 10) {
    return ones[n];
  }  
  
  if (n>=10 && n<20) {
    return ten2Teens[n % 10];  
  }
  
  if (n >= 20 && n < 100) {
    return tens[Math.floor(n / 10)] + '' + ones[n % 10];
  }  
};

var convertToHundreds = function(n) {
 if (n >= hundred) {
   return ones[Math.floor(n / hundred)] + 'Hundred' + convertToTens(n % hundred); 
 }  else {
   return convertToTens(n);
 } 
};

var convertToThousands = function(n) {
  if (n >= thousand) {
    return convertToHundreds(Math.floor(n / thousand)) + 'Thousand' + convertToHundreds(n % thousand);
  } else {
    return convertToHundreds(n);
  }  
};

var convertToMillions = function(n) {
  if (n >= million) {
    return convertToMillions(Math.floor(n / million)) + 'Million' + convertToThousands(n % million); 
  } else {
    return convertToThousands(n); 
  }
};

var convertNumberToWords = function(n) {
  if (n === 0) {
    return 'Zero' + dollarText;
  }
  return (convertToMillions(n) + dollarText);
};

var input = 1234;
var output = convertNumberToWords(input);
console.log(output);