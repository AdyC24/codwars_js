/* 
----------------- INSTRUCTION -----------------
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


----------------- SAMPLE TESTS -----------------
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for basic tests", () => {
    assert.strictEqual(boolToWord(true), 'Yes')
    assert.strictEqual(boolToWord(false), 'No')
    });
  });

*/

function boolToWord( bool ){
    if(bool){ //Jika boolean bernilai true, maka hasilkan string "Yes", sebaliknya "No"
        return "Yes";
    } else {
        return "No";
    }
  }

// COMPLETED