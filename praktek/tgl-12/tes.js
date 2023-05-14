/* 
========= 1
const statement = 'apa kabar,'
const name = 'wildan'

>>> perintah:
- buat sebuah kalimat dari variabel diatas menggunakan operator "+" sehingga menjadi sebuah kalimat "apa kabar, wildan?"
- rancang kalimat dari kedua variabel diatas menjadi spt poin 1 akan tetapi menggunakan string template (lihat part13 untuk contohnya)

========= 2
const a = 'H'
const b = 'E'
const c = 'L'
const d = 'L'
const e = 'O'

>>> perintah:
- gabungkan variabel diatas menjadi array spt berikut:
['H','E','L','L','O']
- transform / ubah hasil dari poin 1 menjadi tipe Data String menggunakan method .join sehingga menjadi 'HELLO'
- transform / ubah hasil dari poin 1 menjadi tipe Data String menggunakan method .join sehingga menjadi 'H E L L O'

*/

const statement = 'apa kabar,'
const name = 'wildan'
console.log(statement +name)

const wordTamplate = `Hallo, ${name} ${statement}?
${statement} keluarga mu ${name}`
console.log(wordTamplate)

const a = 'H'
const b = 'E'
const c = 'L'
const d = 'L'
const e = 'O'
const arr = []
arr.push(a,b,c,d,e)
console.log(arr)

const rep = arr.join("")
const rep2 = arr.join(" ")
console.log(rep)
console.log(rep2)
