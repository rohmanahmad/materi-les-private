const express = require('express')

const app = express()

app.get('/', function (req, res) {
    res.send(new Date())
})

app.listen(4000)