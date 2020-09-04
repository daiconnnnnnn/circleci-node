const add = require("../add.js");
const assert = require("assert");

describe("The add function", () => {
  it("adds two numbers (PLUS)", () => {
    const actual = add("PLUS", 1,3);
    const expected = 4;
    assert.equal(actual, expected);
  });
  
  it("adds two numbers (MINUS)", () => {
    const actual = add("MINUS", 1,4);
    const expected = -3;
    assert.equal(actual, expected);
  });

  it("adds two numbers (OTHER)", () => {
    const actual = add("OTHER", 1,4);
    const expected = 0;
    assert.equal(actual, expected);
  });
});

