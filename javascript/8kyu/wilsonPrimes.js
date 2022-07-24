/* 
----------------- INSTRUCTION -----------------
Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.


----------------- SAMPLE TESTS -----------------
const chai = require("chai");
const assert = chai.assert;

describe("Tests", function() {
  it("Fixed tests", function() {
     assert.strictEqual(amIWilson(5), true)
     assert.strictEqual(amIWilson(9), false)
     assert.strictEqual(amIWilson(6), false)
  });
});

*/

function amIWilson(p) {
    // Test Matematika menggunakan Code,
    // Buat dulu faktorial dari parameter p yang dikurangi 1 :: (p-1)!
    const from = Array.from({length: p - 1},(_,index) => index + 1); //buat array tersusun dari parameter p, jika p=5, maka console.log = [1,2,3,4]
    const reduce = from.reduce((prev,curr) => prev * curr, 1 ); //menghitung beruntun dari runtutan array dari index[0] seterusnya. Kali ini dikalikan.
    
    const rules = (reduce + 1) / (p * p) % 1 == 0; //Jalankan rule Wilson Prime Number, diakhiri dengan modulus 1 untuk hasilkan nilai boolean
    
    return rules ;
    }

// FAILED

