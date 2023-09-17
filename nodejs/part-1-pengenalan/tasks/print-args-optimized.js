/**
* node print-args.js --op=plus --n1=10 --n2=30
* ambil value dari arg --op, --n1 & --n2
* note: ambil hanya value saja, bukan sama key (op, n1, n2) yaitu >> plus, 10, 30
*/

const args = process.argv
const indexStart = 2
const paramsLength = args.length
const dataFixed = {}
for (let i = indexStart; i < paramsLength; i++) {
  const xParam = args[i].split('=') // ['--op', 'plus']
  const key = xParam[0].replace('--', '')
  const value = xParam[1]
  dataFixed[key] = value
}

let result = 0
switch (dataFixed.op) {
  case 'plus':
    result = Number(dataFixed.n1) + Number(dataFixed.n2)
    break
}

console.log('N1', dataFixed.n1)
console.log('N2', dataFixed.n2)
console.log('OP', dataFixed.op)
console.log('Result:', result)