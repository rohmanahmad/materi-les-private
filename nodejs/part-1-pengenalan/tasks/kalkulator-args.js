const args= process.argv
const indexStart = 2
const paramLength = args.length 
const dataFixed = {}
for (let i = indexStart; i< paramLength; i++) {
    const xParam = args[i].split('=')
    const key = xParam[0].replace('--', '')
    const value = xParam[1]
    dataFixed[key] = value
}

let result = 0
switch (dataFixed.op) {
    case 'tambah':
        result = Number(dataFixed.n1) + Number(dataFixed.n2)
        break
    case 'kurang':
        result = Number(dataFixed.n1) - Number(dataFixed.n2)
        break
    case 'kali':
        result = Number(dataFixed.n1) * Number(dataFixed.n2)
        break
    case 'bagi':
        result = Number(dataFixed.n1) / Number(dataFixed.n2)
        break
    case 'akar':
        // result = Math.pow(Number(dataFixed.n1), 1/Number(dataFixed.n2))
        result = Number(dataFixed.n1) ** (1/Number(dataFixed.n2))
        break 
    case 'sin':
        result = Math.sin(Number(dataFixed.n1)) 
        break
    case 'cos':
        result = Math.cos(Number(dataFixed.n1))
        break
    
}

console.log('N1', dataFixed.n1)
console.log('N2', dataFixed.n2)
console.log('OP', dataFixed.op)
console.log('Result:', result)