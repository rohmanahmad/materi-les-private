/* 
String Search merupakan function/utilities bawaan dari tipe data string itu sendiri.
merupakan satu kesatuan dengan String Methods, akan tetapi String search ini difokuskan untuk utilities searching dari String tsb.
*/

/* 
Macam-macam String Search antara lain:
- indexOf       >> mencari index pertama yang cocok dengan object yang dicari, mendukung skip index tp tidak support regex
- lastIndexOf   >> mencari index terakhir yang cocok dengan object yang dicari
- search        >> mirip dengan indexOf, support regex tp tidak support skipping index
- match         >> mencari kecocokan karakter pada kecocokan yang pertama (return array hanya 1)
- matchAll      >> mencari kecocokan karakter pada semua kecocokan yang ada (return array)
- includes      >> mirip dengan match akan tetapi tipe return dari includes adalah true(jika match) dan false(jika unmatch)
- startsWith    >> mencocokan apakah suatu objek string berawalan dengan parameter yang ditentukan(return true or false)
- endsWith      >> mencocokan apakah suatu objek string berakhiran dengan parameter yang ditentukan(return true or false)
*/

const string1 = "hello world"

// # indexOf(arg1, arg2)
const indexOfL = string1.indexOf('l', 0) // >>> mencari index dari karakter "l" dengan start pencarian pada index 0
const indexOfL2 = string1.indexOf('l', 4) // >>> mencari index dari karakter "l" dengan start pencarian pada index adalah index ke-4, berarti index 0,1,2,3 akan di skip dari scanning

console.log(indexOfL) // >>> 3
console.log(indexOfL2)// >>> 9

// # lastIndexOf(arg1)
const lastIndexOfL = string1.lastIndexOf('l')
