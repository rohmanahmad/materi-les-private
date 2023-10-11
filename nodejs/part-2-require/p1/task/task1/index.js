const tambah = require('./komponen/tambah')
const kurang = require('./komponen/kurang')
const kali = require('./komponen/kali')
const bagi = require('./komponen/tambah')

const a = 10
const b = 2
const hasilTambah = tambah(a, b)
const hasilKurang = kurang(a, b)
const hasilKali = kali(a, b)
const hasilBagi = bagi(a, b)


console.log('hasilTambah:', hasilTambah)
console.log('hasilKurang:', hasilKurang)
console.log('hasilKali:', hasilKali)
console.log('hasilBagi:', hasilBagi)