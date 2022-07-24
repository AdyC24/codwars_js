References of JS methods:<br>
<br>
indexOf('param') => Mencari lokasi array didalam index dengan parameter isi array. <br>
map() => Membuat array baru dengan array lama sebagai parameternya.<br>
map(num => num \* -1) => Dengan metode map, mengambil semua data didalam array lalu dikalikan dengan -1.<br>
map(Number) => Membuat array baru dengan array lama sebagai parameternya dan ubah jenis setiap data didalamnya menjadi Number.<br>
new RegExp('T', 'g') => Membuat regular expression dengan pencarian karakter 'T' di dalam string dengan metode pencarian 'g' (general).<br>
parseInt(param) => Mengubah string yang terdapat didalam param menjadi number desimal bulat.<br>
reduce((prev,curr) => prev \_ curr, 1 ) => Menghitung beruntun dari runtutan array dari index[0] dan seterusnya. Kali ini dikalikan.<br>
replace(regex, 'U') => Mengubah string yang sesuai dengan pencarian param 'regex' menjadi huruf 'U'<br>.
reverse() => Membalikkan susunan array di dalam index dari A-Z menjadi Z-A.<br>
split('') => Menjadikan string menjadi array didalam index yang dipotong per karakter.<br>
split(' ') => Menjadikan string menjadi array didalam index yang dipotong per kata.<br>
toString() => Mengubah jenis data di dalam variable menjadi String.<br>
toUpperCase() => Mengubah string menjadi uppercase dengan metode toUpperCase().<br>
<br>
MATH
<br>
Math.ceil(month / 3) => Membuat ataskan hasil perkalian parameter month dibagi 3.<br>
Math.floor(multiply) => Menghasilkan nilai bulat bawah dari parameter 'multiply'.<br>
<br>
ARRAY<br>
Array.from({length: p - 1},(\_,index) => index + 1) => Buat array tersusun dari parameter p, jika p=5, maka console.log = [1,2,3,4]<br>
