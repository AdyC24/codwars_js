/*
------------------ INSTRUCTION ------------------ 
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59


------------------ SAMPLE TESTS ------------------
describe("Fixed Tests", () => {
  it("Tests", () => {
    Test.assertEquals(past(0,1,1),61000)
    Test.assertEquals(past(1,1,1),3661000)
    Test.assertEquals(past(0,0,0),0)
    Test.assertEquals(past(1,0,1),3601000)
    Test.assertEquals(past(1,0,0),3600000)
  });
});
*/

function past(h, m, s){
    
    const hours = h * 3600000; //Kalikan per jam dengan 3600000
    const minutes = m * 60000; //Kalikan per menit dengan 60000
    const seconds = s * 1000; //Kalikan per detik dengan 1000

    const count = hours + minutes + seconds; //Jumlahkan semua jam, menit, dan detik

return count; //inisiasikan
}

// COMPLETED