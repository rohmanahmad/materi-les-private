/* 
FOR LOOP 
- for ()
- for (in)
- for (of)

WHILE LOOP
- while () 
- do{}while()

*/

const dataFromDB = [
    {
        kelas: 'I',
        nama_wali_kelas: 'Pak Edwin .Sos',
        nama_ketua_kelas: 'Mr. Danny',
        nama_anggota_kelas: [
            'Aarav',
            'Abian',
            'Abraham',
            'Aciel',
            'Adam',
            'Adelard',
            'Adelio',
            'Aditya',
            'Adnan',
        ]
    },
    {
        kelas: 'II',
        nama_wali_kelas: 'Pak Dharmendra .SI',
        nama_ketua_kelas: 'Mr. Denver',
        nama_anggota_kelas: [
            'Adrian',
            'Adya',
            'Agam',
            'Aileen',
            'Aldari',
            'Alexi',
            'Ansel',
            'Arsenio',
            'Arlo',
            'Axel',
            'Aziel',
        ]
    }
]
const a = function () {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })
}
const length = dataFromDB.length
console.log('array size(dataFromDB):', length)

for (let i = 0; i < length; i++) {
    // const eachItemOfDataFromDB = dataFromDB[i]
    // console.log({i, item: eachItemOfDataFromDB})
    // console.log('>>>', new Date().getTime())
}

for (const indexItem in dataFromDB) {
    console.log(dataFromDB[indexItem])
}

// cari methode menggunakan for (of)