const fs = require('fs')

const data = fs.readFileSync('../../data/response.json', {encoding: 'utf-8'})
const jsonData = JSON.parse(data)

console.log(jsonData['data'][0]['hashtags'][2])
