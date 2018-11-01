var Javabuzz = function(){};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor == 0);
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Javabuzz.prototype.says = function(number) {
    if (this.isDivisibleByFifteen(number)) {
    return 'Javabuzz';
  } else if (this.isDivisibleByThree(number)) {
    return 'Java';
  } else if (this.isDivisibleByFive(number)) {
    return 'Buzz';
  } else {
    return number
  }
};

// Javabuzz.prototype.says = function(number) {
//   if (this.isDivisibleByFifteen(number)) {
//     return "Javabuzz";
//   }
//   if (this.isDivisibleByThree(number)) {
//     return "Java";
//   }
//   if (this.isDivisibleByFive(number)) {
//      return "Buzz";
//   }
//   return number;
// };


// var  Fizzbuzz = function() {
// }
//
// Fizzbuzz.prototype.play = function(num) {
//   for (i = 1; i <= num; i++) {
//     if (i % 3 == 0) {
//       return("fizz");
//     }
//     else if (i % 5 == 0) {
//       return("buzz");
//     }
//     else if (i % 3 == 0 && i % 5 == 0) {
//       return("fizzbuzz");
//     }
//   return(i);
//   }
// }
//
// // fizzbuzz.play(100)
