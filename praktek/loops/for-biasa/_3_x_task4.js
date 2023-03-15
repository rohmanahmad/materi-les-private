const data = [1,2,3,4,5]
const x = 0
const y = data.length
const nilaiMax = 5
for (let i = x; i < y; i++) {
    const size = data[i]
    const star = '*'.repeat(size)
    const space = ' '.repeat(nilaiMax-size)
    const mirror = '*'.repeat(nilaiMax+1-size)
    console.log(space+star+'    '+mirror)
}

/* 
expected result:
    *    *****
   **    ****
  ***    ***
 ****    **
*****    *
*/