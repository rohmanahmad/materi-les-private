const data = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
]

// bagaimana caranya untuk mencetak data perbagian diatas?

const x = 0
const y = data.length // >>> 10
for (let i = y-1; i >= x; i--) {
    console.log((data[i]))
}