const data = {
    'f11': 10,
    'f12': 20,
    'f13': 30,
    'f14': 40,
    'f15': 50
}

const x = 0
const y = 5
for (let i = x+1; i <= y; i++) {
    const key = `f${i}`
    const val = data[key]
    console.log(val)
}

/* 
expected result:
10
20
...
50
*/