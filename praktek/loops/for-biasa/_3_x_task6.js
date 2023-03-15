/* 
expected result:
    *         *
   ***       ***
  *****     *****   
 *******   *******
********* *********   
*/
const data = [1,2,3,4,5,6,7]
const x = 0
const y = data.length
const nilaiMax = 7
for (let i = x; i < y; i++) {
    const size = data[i]
    const star = '*'.repeat(size)
    const space = '.'.repeat(nilaiMax - size)
    const mirror = '*'.repeat(size-1)
    const leftTri = space + star + mirror + space
    console.log(leftTri + ' '+ leftTri)
}