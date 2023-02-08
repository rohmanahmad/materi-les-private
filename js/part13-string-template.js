/* 
String Template memungkinkan programmer lebih mudah dalam menyusun suatu text/template
dan tidak terbatas dengan line pada IDE nya

ciri2 string template adalah menggunakan tanda back-tick (`)

keunggulan menggunkan ini adalah:
- simple
- bebas menggunakan indent maupun baris tanpa penghubung string (+)
- support format
- dapat digabungkan dengan variable tanpa menggunakan pemisah/string-concatenation (+)
- cukup gunakan tanda ${} dan dimasukkan variabel yang akan dipanggil
    contoh:
        const name = 'jono'
        const x = `hello ${name}`
        console.log(x) // >> "hello jono"
*/

// contoh penggunaan

const recipes = 'Rohman'
const tanggal = '2021-01-01'
const lastDueDate = '2021-01-30'
const emailTemplate = `
    Hello ${recipes}
    Hari ini Pada tanggal ${tanggal} anda sudah menunggak cicilan motor yang ke 4.
    <br>
    Jika Pada tanggal ${lastDueDate} tidak melakukan pelunasan cicilan, maka kami akan cabut motor anda. 
`
console.log(emailTemplate)