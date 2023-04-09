/* 
expected result:
*********    *   
 *******    ***  
  *****    ***** 
   ***    *******
    *    *********
*/
const data = [1,2,3,4,5,6,7]
const x = 0
const y = data.length
const nilaiMax = 7
const map = data.map(o=>o)
const reversed = map.reverse()
for (let i = x; i < y; i++) {
    // code here
    size = reversed[i]
    size2 = data[i]
    const Star = '*'.repeat(size)
    const RevStar = '*'.repeat(y-size+1)
    const Space = ' '.repeat(nilaiMax-size)
    const RevSpace = ' '.repeat(y-size2)
    const Mirror = '*'.repeat(size-1)
    const RevMirror = '*'.repeat(y-size)
    const Segi31 = Space + Star + Mirror + Space
    const Segi32 = RevSpace + RevStar + RevMirror + RevSpace
    console.log(Segi31 + Segi32)
}