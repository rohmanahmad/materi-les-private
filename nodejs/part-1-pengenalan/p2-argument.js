/**
* node p2-argument.js argumen1 argumen2 argumenN
*/

const args = process.argv
console.log('typeof args is:', typeof args)
console.log('captured argument',  args[2])
console.log('captured argument', args[3])
console.log('captured argument', args[4])

const x = Number(args[3])
const y = Number(args[4])
console.log(x + y)
