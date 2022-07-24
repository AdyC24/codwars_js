/* 
----------------- INSTRUCTION -----------------
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


----------------- SAMPLE TESTS -----------------
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", () =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(quarterOf(3), 1)
    assert.strictEqual(quarterOf(8), 3)
    assert.strictEqual(quarterOf(11), 4)
  });
});

*/

const quarterOf = (month) => {
    return Math.ceil(month / 3); //Membuat ataskan hasil perkalian parameter month dibagi 3
  }

//   COMPLETED