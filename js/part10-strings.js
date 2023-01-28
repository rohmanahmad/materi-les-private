/* 
String merupakan tipe data karakter
- dihimpit single quote('') / double quote("") / backquote (``)
*/

// contoh
const a = "ini string 1"
const b = 'ini string 2'
const c = `ini string 3`

// untuk mengamankan spesial karakter digunakan backslash pada masing2 karakter yang akan diamankan
// contoh

const d = "ini string 1\"'`"
const e = 'ini string 2\'\'"`'
const f = `ini string 3\`"'`

// build-in function / fungsi bawaan dari string
// .length
// .split
// .trim
// .toLowerCase
// .toUpperCase
// dll

// contoh
d.length // ini tipenya bukan function, jadi gak pakai ()
e.split()
f.toLowerCase()
