/* 
String methods: method2 yang secara default mengikuti suatu tipe data string.
("").method >> "method" disamping diganti dengan method2 yang tersedia
example: "hello".trim() >>> method trim merupakan salah satu dari default method bawaan dari tipe data "string"

macam2 method string yang wajib diketahui oleh pemula:
- .length           >> digunakan untuk mengetahui panjang karakter dari suatu "string"
- .substr()         >> digunakan untuk memotong karakter dengan parameter (index start/mulai pemotongan, length/panjang karakter yg akan dipotong)
- .replace()        >> digunakan untuk mengganti/replace suatu karakter dengan karakter lainnya(pengganti)
- .toUpperCase()    >> digunakan untuk mengganti karakter menjadi kapital
- .toLowerCase()    >> digunakan untuk mengganti karakter menjadi lowercase/kecil
- .trim()           >> digunakan untuk menghilangkan spasi pada awal dan akhir karakater
- .split()          >> digunakan untuk memisahkan karakter dengan menggunakan karakter pemisah / delimiter

*/

// contoh ".length"

const str1 = " hello world "
const lengthStr1 = str1.length
console.log(lengthStr1)     // >> 11

// contoh ".substr(indexStart, length)"
const potongan = str1.substr(2, 3)
console.log(potongan)       // >> ell

// contoh ".replace(match, stringReplace)"
const replaceResult = str1.replace('world', 'guys')
console.log(replaceResult)  // >> hello guys

// contoh ".toUpperCase()" >> tanpa adanya parameter
const capitalStr = str1.toUpperCase()
console.log(capitalStr)    // >> HELLO WORLD

// contoh ".toLowerCase()" >> tanpa adanya parameter
const lowerStr = str1.toLowerCase()
console.log(lowerStr)     // >> hello world

// contoh ".trim()"
const trimStr = str1.trim()
console.log(trimStr)      // >> hello world >> tanpa adanya spasi didepan dan belakang karakter

// contoh ".split(delimiter)"

const arrStr1 = str1.split(' ')
console.log(arrStr1)    // >> ["", "hello", "world", ""]
