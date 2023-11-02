(async () => {
  const mysql = require('mysql2')
  const argv = process.argv
  const keyId = argv[2].replace('--id=', '')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'punt3n123',
    database: 'ripple10'
  })
  
  function query () {
    return new Promise((resolve, reject) => {
      connection.execute(
        `SELECT * FROM ripple_client_keyword where key_id = ?`,
        [ keyId ],
        function(err, results, fields) {
          if (err) return reject(err)
          return resolve(results)
        }
      )
    })
  }

  try {
    const data = await query()
    console.log(data)
  } catch (error) {
    console.log(error)
  }


})()
