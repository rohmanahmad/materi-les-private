const data = [1,2,3,4,5,4,3,2,1]
const x = 0
const y = data.length
const nilaiMax = 5
for (let i = x; i < y; i++) {
    const size = data[i]
    const bintang = '*'.repeat(size)
    const spasi = ' '.repeat(nilaiMax - size)
    console.log(spasi + bintang)
}

/* 
expected result:
    *
   **
  ***
 ****
*****
*/