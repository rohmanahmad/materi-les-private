/* 
Data Type pada javascript terdiri dari 8 yaitu:
- string
- number
- bigint
- boolean
- undefined
- null
- symbol
- object
// type object sendiri masih terbagi menjadi 3 turunan yaitu:
    - object asli ({})
    - object array ([])
    - object class
    - object function
*/


const a = ''
const b = 0
const c = null
const d = undefined
const e = false

// semuanya jika di negasikan (!) akan bertipe Boolean (true)
// contoh

console.log(!a) // akan bernilai true
console.log(!b) // akan bernilai true
console.log(!c) // akan bernilai true
console.log(!d) // akan bernilai true
console.log(!e) // akan bernilai true

// pengecekan tipe data dari suatu variabel menggunakan perintah "typeof YOUR_VARIABLE"
// contoh
console.log(typeof a) // akan tampil "string"
console.log(typeof b) // akan tampil "number"
console.log(typeof c) // akan tampil "null"
console.log(typeof d) // akan tampil "undefined"
console.log(typeof e) // akan tampil "boolean"
console.log(typeof console.log) // akan tampil "function"