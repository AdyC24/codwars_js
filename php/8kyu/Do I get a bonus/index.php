<?php

/*
------------ INSTRUCTION ----------
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).



----------- SAMPLE TASKS ------------
class MyTestCases extends TestCase
{
    /**
     * @dataProvider basicProvider
     
    public function testBasic($salary, $bonus, $expected) {
        $this->assertSame($expected, bonusTime($salary, $bonus));
    }
    
    public function basicProvider()
    {
        return [
            [10000, true, '$100000'],
            [25000, true, '$250000'],
            [10000, false, '$10000'],
            [60000, false, '$60000'],
            [2, true, '$20'],
            [78, false, '$78'],
            [67890, true, '$678900'],
        ];
    }
}

------------------
INTISARI INSTRUKSI
Kalikan $salary dengan 10 jika hasil boolean $bonus adalah TRUE.

*/

/////////////////////////// CARA #1 ////////////////////////////////// 

function bonusTime($salary, $bonus) {
  
    if($bonus === TRUE){
      return "$".$salary*10;
    } else{
      return "$".$salary;
    }
  
  }

/*
METODE YANG DIGUNAKAN
- .     = operator concatenation
*/


/////////////////////////// CARA #2 ////////////////////////////////// 
function bonusTime($s, $b) {
    return "$" . $s * ($b ? 10 : 1);
  }


/////////////////////////// CARA #3 ////////////////////////////////// 
  function bonusTime($salary, $bonus) {
    return sprintf('$%s', $bonus ? $salary * 10 : $salary);
} 
?>