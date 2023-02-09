/*
* array biasanya didefinisikan menggunakan tanda [] atau class Array

contoh: 
const a1 = ["x", 1, 2, true, null, {}]
const a2 = new Array("x", 1, 2, true, null, {})

dari contoh diatas, menghasilkan value yang sama yaitu:
>>> ["x", 1, 2, true, null, {}]

metode assignment dalam variable array bisa menggunakan metode indexing
contoh:
diketahui variabel a3 = ["x", "y", "z"]
jika ingin merubah value "y" berarti cara mengubahnya spt dibawah ini
a3[1] = "y1"
jika di print akan berubah menjadi ["x", "y1", "z"]
>> menambahkan index pada array bisa menggunakan 2 cara/metode yaitu bisa menggunakan cara spt diatas, atau menggunakan .push()
contoh menggunakan .push()
jika menggunakan cara diatas, berarti spt berikut:
let y1 = ["a", "b", "c"]
y1[3] = "d"
console.log(y1) >>> ["a", "b", "c", "d"]

jika menggunakan .push() spt berikut:
let x1 = ["a", "b", "c"]
variabel diatas akan ditambahkan value "d" pada index 3
x1.push("d")
console.log(x1) >>> ["a", "b", "c", "d"]

*/

let a = ["a", "b", "c", "d"]
console.log('nilai a0', a, a.length)
delete a[1]
console.log('nilai a1', a, a.length)
