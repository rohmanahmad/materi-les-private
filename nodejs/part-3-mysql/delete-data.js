(async () => {
  const mysql = require('mysql2')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'punt3n123',
    database: 'praktek_nodejs'
  })

  function deleteData (id) {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM user WHERE id = ?',
        [id],
        function (err, res) {
          if (err) return reject(err)
          return resolve(res)
        }
      )
    })
  }

  try {
    const dataDelete = await deleteData(1)
    console.log(dataDelete)
  } catch (error) {
    console.log(error)
  }

})()