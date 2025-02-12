// basic math methods
const add = (num1, num2) => {
  return num1 + num2;
};
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// advanced math methods
const sqrt = (num) => Math.sqrt(num);
const max = (num1, num2) => Math.max(num1, num2);


// exporting modules
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sqrt,
  max
};
