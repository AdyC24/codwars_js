/* 
----------------- INSTRUCTION -----------------
Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7


----------------- SAMPLE TESTS -----------------
describe( "stringToNumber", function(){
  it( "should work for the examples" , function(){
    Test.assertEquals(stringToNumber("1234"),1234)
    Test.assertEquals(stringToNumber("605"), 605)
    Test.assertEquals(stringToNumber("1405"),1405)
    Test.assertEquals(stringToNumber("-7"),  -7)
  });
});

*/

const stringToNumber = function(str){
    return parseInt(str) ; //Ubah string didalam parameter menjadi number menggunakan parseInt (berbentuk desimal bulat)
    //JIKA YANG DIINIASIKAN ADALAH SEBUAH FUNCTION, MAKA YANG DIINIT ADALAH PARAMETER YG TERDAPAT DIDALAM FUNCTION
  }

//   COMPLETED

