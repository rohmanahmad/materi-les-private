const array2 = [
    {key: 'a', value: 'AA', count: 1, group: 1},
    {key: 'b', value: 'BB', count: 3, group: 2},
    {key: 'c', value: 'CC', count: 2, group: 1},
    {key: 'd', value: 'DD', count: 4, group: 1}
]

const reduce = array2.reduce(function (result, item) {
    const v = item.value
    const k = item.key
    const c = item.count
    result[v] = k+c
    return result
}, {})

console.log('reduce', reduce)

const reduce2 = array2.reduce(function (result, item) {
    const v = item.value
    const k = item.key
    const t = item.count + item.group
    result[v] = k + t
    return result
}, {})

console.log('reduce2', reduce2)