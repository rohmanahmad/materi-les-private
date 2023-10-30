const { tambah, kurang } = require('./komponen/kalkulator')
const komponen2 = require('./komponen/komponen2')

const n1 = 2
const n2 = 3

const hasil = tambah(n1, n2)
const hasil2 = kurang(hasil, 1)

console.log(hasil2)