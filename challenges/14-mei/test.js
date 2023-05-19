const data = [1,2,5,3,5,6,7,8,9,1,2]
/* 
[
  'a1',
  'a2',
  'a5',
  'a3',
  'a5',
  'a6',
  'a7',
  'a8',
  'a9',
  'a1',
  'a2'
]
hanya boleh menggunakan .map()
*/

const dataMap = data.map(function (val) {
  const hasil = 'a' + val
  return hasil
})

console.log(dataMap)