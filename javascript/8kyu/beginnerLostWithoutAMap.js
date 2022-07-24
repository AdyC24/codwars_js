/* 
----------------- INSTRUCTION -----------------
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]


----------------- SAMPLE TESTS -----------------
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", ()=>{
  it("Fixed tests", () => {
    assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
    assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
    assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 
  });
});

*/

function maps(x){
    return x.map(num => num * 2); //dengan metode map(), setiap index dikalikan 2
}

// COMPLETED