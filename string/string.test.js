// the goal is to have your code fail first so you can go in and write your code to pass

const { uppercase } = require("./string");
const { lowercase } = require("./string");

// encapsulate your test function
describe("Testing the string module.", () => {
  test("test should uppercase a string input", () => {
    // results should produce bob ==> BOB
    expect(uppercase("bob")).toBe("BOB");
  });

  // another test
  test("test should lowercase a string input", () => {
    expect(lowercase("FULL Sail")).toBe("full sail");
  });
});

/* casing guide...

what won't work:
toUppercase
touppercase

what WILL work:
toUpperCase

all beginning letters of each word in a function name need to be capitalized 
*/
