var rnd = require("nem-random-mwc");

var dice = module.exports = function(options) {
  var defaultOptions = {
    amount: 1,
    numCount: 6
  };

  options = options || defaultOptions;

  dice.throwOne = function() {
    return Math.floor(rnd() * options.numCount) + 1;
  };

  dice.throwMany = function() {
    var dices = [];
    for (var d = 0; d < options.amount; d++) {
      dices.push(dice.throwOne());
    }
    return dices;
  }

  return dice;
};