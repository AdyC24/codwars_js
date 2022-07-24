/* 
----------------- INSTRUCTION -----------------
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]


----------------- SAMPLE TESTS -----------------
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    assert.deepEqual(digitize(0),[0]);
  });
});

*/

function digitize(n) {

    const String = n.toString() //Karena metode split hanya berlaku pada string, maka ubah parameter number menjadi string menggunakan metode toString()
    const split =String.split(''); //Ubah string menjadi array di dalam index, dalam bentuk per karakter
    const map = split.map(Number); //Buat array baru dengan identifikasi setiap array di dalam index adalah Number 
    const reverse = map.reverse(); //Putar balik urutan array didalam index dari A-Z menjadi Z-A.

    return reverse; //Inisiasikan
  }

//   COMPLETED