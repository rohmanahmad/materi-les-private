/* 
contoh:
for (let i = x; i < y; i++) {
    // code here
}

wajib: x dan y diisi sebuah nilai berupa integer/number

syarat:
    let bisa diganti menggunakan "var"(lebih disarankan menggunakan "let"). akan error jika diganti "const"
    i++ digunakan untuk mendekatkan nilai i ke batas y
    i++ dipakai dengan syarat x < y
    i-- dipakai dengan syarat x > y
jika tidak mematuhi aturan diatas, maka akan terjadi infinite loop.

*/
const x = 10
const y = 1
for (let i = x; i >= y; i--) {
    console.log(i)
}

/* ketika di run hasilnya: */
/* 
$ node praktek/loops/for_biasa.js 
1
2
3
4
5
6
7
8
9
*/
