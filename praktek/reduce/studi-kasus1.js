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

/* 
[
    'Aarav kelas I',
    'Abian kelas I',
    'Abraham kelas I',
    'Aciel kelas I',
    'Adam kelas I',
    'Adelard kelas I',
    'Adelio kelas I',
    'Aditya kelas I',
    'Adnan kelas I',
    'Adrian kelas II',
    'Adya kelas II',
    'Agam kelas II',
    'Aileen kelas II',
    'Aldari kelas II',
    'Alexi kelas II',
    'Ansel kelas II',
    'Arsenio kelas II',
    'Arlo kelas II',
    'Axel kelas II',
    'Aziel kelas II',
]
*/

// reduce, concat, map(optional)
const reduce1 = dataFromDB.reduce(function (result, item) {
    const kelas = item.kelas
    const arrayNamaAnggota = item.nama_anggota_kelas
    const arrayNamaAnggotaMap = arrayNamaAnggota.map(function (namaAnggota) {
        const statement = namaAnggota + ' kelas ' + kelas
        return statement
    })
    result = result.concat(arrayNamaAnggotaMap)
    return result
}, [])
// console.log(reduce1)

/* 
{
    Alexi: 'II',
    Ansel: 'II',
    Arsenio: 'II',
    Arlo: 'II',
    Axel: 'II',
    Aziel: 'II'
}
*/
const reduce2 = dataFromDB.reduce(function (result, item) {
    const kelas = item.kelas
    const arrayNamaAnggota = item.nama_anggota_kelas
    const objAnggota = arrayNamaAnggota.reduce(function (res, item) {
        res[item] = kelas
        return res
    }, {})
    result = Object.assign(result, objAnggota) // Object.assign(a, b) >> menggabungkan object "b" kedalam object "a" :: keyword google "js Object.assign"
    return result
}, {})
console.log(reduce2)