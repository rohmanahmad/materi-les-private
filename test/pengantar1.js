// String .split()
const strA = 'hello world'
console.log(strA.split()) // [ 'hello world' ]
console.log(strA.split('')) // [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
console.log(strA.split(' ')) // [ 'hello', 'world' ]
console.log(strA.split(' ')[1]) // 'world'

// object assignment

const a = {}
a['x1'] = 'hello'
a['x2'] = 'world'
console.log(a) // { x1: 'hello', x2: 'world' }