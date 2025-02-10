// basic math objects
const { add, subtract, multiply, divide, sqrt, max } = require("./math");

// encapsulating tests in a describe function
describe("Testing JS math objects.", () => {
  // add
  test("test should return sum of two numbers", () => {
    expect(add(2, 2)).toBe(4);
  });
  // subtract
  test("test should return difference of two numbers", () => {
    expect(subtract(10, 3)).toBe(7);
  });
  // multiply
  test("test should return product of two numbers", () => {
    expect(multiply(3, 3)).toBe(9);
  });
  // divide
  test("test should return quotient of two numbers", () => {
    expect(divide(30, 2)).toBe(15);
  });
  // square root
  test("test should return square root of a number", () => {
    expect(sqrt(25)).toBe(5);
  });
  // max
  test("test should return the max of two numbers", () => {
    expect(max(54, 55)).toBe(55);
  });
});
