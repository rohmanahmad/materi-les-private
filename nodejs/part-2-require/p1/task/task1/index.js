const tambah = require('./komponen/tambah')
const kurang = require('./komponen/kurang')
const kali = require('./komponen/kali')
const bagi = require('./komponen/bagi')
const util = require('./komponen/utility')

const a = 10
const b = 2
const hasilTambah = tambah(a, b)
const hasilKurang = kurang(a, b)
const hasilKali = kali(a, b)
const hasilBagi = bagi(a, b)
const hasilRandom = util.random(a)

console.log('hasilTambah:', hasilTambah)
console.log('hasilKurang:', hasilKurang)
console.log('hasilKali:', hasilKali)
console.log('hasilBagi:', hasilBagi)
console.log('hasilRandom:',hasilRandom)