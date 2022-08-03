/*
------------ INSTRUCTION ----------
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]


----------- SAMPLE TASKS ------------
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests",function(){
  it("Testing for fixed tests", () => {
    assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
    assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")
  });
});


------------------
INTISARI INSTRUKSI
Buat array baru berdasarkan parameter x dan n.
isi arraynya adalah FPB dari parameter.

*/

function countBy(x, n) {
    let z = []; //bikin array
    const limit = x * n; //buat batasan arraynya

    for(let i = 1; i <= limit; i++){ //tes tiap angkanya dari x sampai n,
        if(i % x === 0){ //jika hasilnya bisa dibagi dengan x
            z.push(i); //maka masukkan hasilnya kedalam array
        }
    } 
    return z;
  }

  