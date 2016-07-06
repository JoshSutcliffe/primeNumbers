console.log("connected");

var isPrime = function(num) {
  if(num < 2) { return false };
  for (var i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    } else {
      return true;
    };
  };
};

// this for loop checks numbers 100
var numberSelect = function(num) {
  var toPrint = [];
  for(var i = 0; toPrint.length < num; i++) {
    if(isPrime(i)) {
      // isPrime function only returns if its true
      toPrint.push(i);
    };
  };
  console.log(toPrint);
};

numberSelect(10002);
