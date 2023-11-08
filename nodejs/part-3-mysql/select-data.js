(async () => {
  const mysql = require('mysql2')
  const argv = process.argv
  const keyId = argv[2] ? argv[2].replace('--id=', '') : 1
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'punt3n123',
    database: 'praktek_nodejs'
  })

  function querySelect () {
    return new Promise((resolve, reject) => {
      connection.execute(
        `SELECT * FROM user where id = ?`,
        [ keyId ],
        function(err, results, fields) {
          if (err) return reject(err)
          return resolve(results)
        }
      )
    })
  }

  try {
    const dataSelect = await querySelect()
    console.log(dataSelect)
  } catch (error) {
    console.log(error)
  }

})()
