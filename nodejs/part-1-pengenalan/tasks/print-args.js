/**
* node print-args.js --op=plus --n1=10 --n2=30
* ambil value dari arg --op, --n1 & --n2
* note: ambil hanya value saja, bukan sama key (op, n1, n2) yaitu >> plus, 10, 30
*/

const args = process.argv
const cari1 = args.find(x => x.includes('--op'))
const cari2 = args.find(x => x.includes('--n1'))
const cari3 = args.find(x => x.includes('--n2'))
const pisah1 = cari1.split('=')
const pisah2 = cari2.split('=')
const pisah3 = cari3.split('=')
const x = Number(pisah2[1])
const y = Number(pisah3[1])
console.log('--op=', pisah1[1])
console.log('--n1=', pisah2[1])
console.log('--n2=', pisah3[1])
console.log(x+y)