/* 
Array Iteration merupakan fungsi yang digunakan untuk meng-iterasi / perulangan

- .map
- .forEach
- .filter
- .reduce
- .reduceRight
- .every
- .some
- .indexOf
- .lastIndexOf
- .find
- .findIndex
- .from
- .keys
- .entries
- .includes
- array spread (...)

*/

// array .map()
const array1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]
const pengurang = 3
const map1 = array1.map(function (value, index) {
    const hasil = value * index - pengurang
    return hasil
})

// console.log(map1) // >>> aktifkan aja kalau ingin melihat hasil/output dari map1

const each1 = array1.forEach(function (value, index) {
    // fungsi pada .forEach merupakan fungsi asynchronous
    // setTimeout(function () {
    //     console.log(value, index, index * value) // aktifkan jika ingin melihat hasil dari .foreach
    // }, index * value * 1000)
})

// .filter
const filterResultGanjil1 = array1.filter(function (value) {
    const isGanjil = (value % 2 === 1)
    return isGanjil
})
const filterResultGenap1 = array1.filter(function (value) {
    const isGenap = (value % 2 === 0)
    return isGenap
})
console.log(filterResultGanjil1)
console.log(filterResultGenap1)
