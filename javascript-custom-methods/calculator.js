/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x, y) {
    return x * x;
  },
  sumAll: function (numbers) {
    let total = 0;
    for (var i of numbers) {
      total += i;
    }
    return total;
  },
  getAverage: function (numbers) {
    let total = 0;
    for (var i of numbers) {
      var newTotal = total += i;
      var average = newTotal / numbers.length;
    } return average;
  }
};
