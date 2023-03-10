const data = {
    'f1': 10,
    'f2': 20,
    'f3': 30,
    'f4': 40,
    'f5': 50
}

const x = 0
const y = 5
for (let i = x; i <= y; i++) {
    const key = `f${i}`
    const val = data[key]
    console.log(val)
}