const mysql = require('mysql2')
const argv = process.argv
const keyId = argv[2].replace('--id=', '')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'punt3n123',
  database: 'ripple10'
})

connection.execute(
  `SELECT * FROM ripple_client_keyword where key_id = ?`,
  [ keyId ],
  function(err, results, fields) {
    console.log('=============== Pakai .execute')
    if (err) console.error(err)
    console.log('hello') // results contains rows returned by server
    // console.log(fields) // fields contains extra meta data about results, if available
  }
)

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)