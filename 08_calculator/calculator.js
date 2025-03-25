const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numArray) {
  if (!numArray.length) return 0;
	return numArray.reduce((total, current) => total + current);
};

const multiply = function(numArray) {
  if (!numArray.length) return 0;
  return numArray.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
