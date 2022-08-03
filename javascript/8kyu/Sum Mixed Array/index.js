/*
------------ INSTRUCTION ----------
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.


----------- SAMPLE TASKS ------------
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
    assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
    assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
  })
});


------------------
INTISARI INSTRUKSI
Diberikan array (daftar) yang terdiri dari angka berbentuk array dan string.
Tugasnya adalah tambahkan seluruh index, termasuk yang berbentuk array

*/

/////////////////////////// CARA #1 //////////////////////////////////
function sumMix(x){
    const map = x.map(a => parseInt(a)); //sanitasi index string menjadi number
    const reduce = map.reduce((a,b) => a + b); //jumlahkan seluruh index
    return reduce;
  }


/*
METODE YANG DIGUNAKAN
- map()         : Membuat array baru
- parseInt()    : Mengubah string menjadi number
- reduce()      : Menghubungkan operasi antara index sebelum dan sesudahnya
*/


/////////////////////////// CARA #2 //////////////////////////////////
function sumMix(x){
    const map = x.map(a => Number(a)); //sanitasi index string menjadi number
    const reduce = map.reduce((a,b) => a + b); //jumlahkan seluruh index
    return reduce;
  }

/*
METODE YANG DIGUNAKAN
- map()         : Membuat array baru
- Number()    : Mengubah string menjadi number
- reduce()      : Menghubungkan operasi antara index sebelum dan sesudahnya
*/


/////////////////////////// CARA #3 //////////////////////////////////
function sumMix(x){
    let sum = 0 //sebagai syarat looping, butuh variable yang akan disandingkan dengan looping array
    for (let a of x){ //loop dengan variable a sebagai rephrase satuan dari array x
        sum += Number(a); //jumlahkan seluruh satuan / variable a yang ditemukan
    }
    return sum;
}
/*
METODE YANG DIGUNAKAN
- for()       : Looping index didalam array
- Number()    : Mengubah string menjadi number
*/


/////////////////////////// CARA #4 //////////////////////////////////
function sumMix(x){
    var sum = 0;
    for (i = 0; i<x.length; i++) { //loop dengan mengambil setiap index[] dari array x
        sum += parseInt(x[i]);
    }
    return sum;
}
/*
METODE YANG DIGUNAKAN
- for()         : Looping index didalam array
- .length       : Menghitung pangjang dari sebuah array
- parseInt()    : Mengubah string menjadi number
*/
  