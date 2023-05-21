// kerjakan sesuai dengan perintah
const strA = 'Hello World'

/* 
task:
- tampilkan hasil dari pengolahan variabel "strA" menjadi suatu object {}
>> output harus menampilkan spt dibawah ini:
{
  x1: 'Hello',
  x2: 'World'
}
*/
const spt = strA.split(' ')
const red = spt.reduce(function(result, item, index){
  result['x'+(index+1)] = item
  return result

},{})
console.log(red)

/* 
[
  'x1 Hello',
  'x2 World'
]
*/
