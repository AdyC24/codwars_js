/* 
----------------- INSTRUCTION -----------------
Write a function which converts the input string to uppercase.


----------------- SAMPLE TESTS -----------------
describe("Basic Tests", function(){
  it("should pass the basic tests", function(){
    Test.assertEquals(makeUpperCase("hello"), "HELLO");
  });
});

*/

function makeUpperCase(str) {
    return str.toUpperCase(); //Mengubah string menjadi uppercase dengan metode toUpperCase()
  }

//   COMPLETED