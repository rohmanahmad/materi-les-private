/* 
Array Iteration merupakan fungsi yang digunakan untuk meng-iterasi / perulangan

- .map >> mempunyai return
- .forEach >> (void) tidak mempunyai return
- .filter >> mempunyai return
- .reduce >> mempunyai return
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
// console.log(filterResultGanjil1)
// console.log(filterResultGenap1)

// .reduce
const array2 = [
    {key: 'a', value: 'AA', count: 1, group: 1},
    {key: 'b', value: 'BB', count: 3, group: 2},
    {key: 'c', value: 'CC', count: 2, group: 1},
    {key: 'd', value: 'DD', count: 4, group: 1}
]
// variabel result = {a: 'AA', b: 'BB', dst}
// (1) value dari field "key" akan menjadi key dari "result(variable)"
// (2) value dari field "value" akan menjadi value dari poin 1
const reduce1 = array2.reduce(function (result, item) {
    const k = item.key
    const v = item.value
    result[k] = v
    return result
}, {})
console.log('reduce1', reduce1) // >>> { a: 'AA', b: 'BB', c: 'CC', d: 'DD' }
const reduce2 = array2.reduce(function (result, item){
    const k = item.group
    const v = item.count
    if (result[k]) result[k] += v
    else result[k] = v
    return result
}, {})
console.log('reduce2', reduce2) // >> { '1': 7, '2': 3 }

const reduce3 = array2.reduce(function (result, item) {
    result += item.value
    return result
}, '')
console.log('reduce3', reduce3) // >> AABBCCDD

const reduce4 = array2.reduce(function (result, item){
    const arrValues = [item.key, item.value, item.count]
    const k = item.group
    if (!result[k]) result[k] = []
    result[k].push(arrValues)
    return result
}, {})
console.log(reduce4) 
/* 
result4:
{
  '1': [ [ 'a', 'AA', 1 ], [ 'c', 'CC', 2 ], [ 'd', 'DD', 4 ] ],
  '2': [ [ 'b', 'BB', 3 ] ]
}
*/

// let result = {}
// for (const item of array2) {
//     const k = item.key
//     const v = item.value
//     result[k] = v
// }
// console.log('for-loop', result)