(async () => {
  const mysql = require('mysql2')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'punt3n123',
    database: 'praktek_nodejs'
  })

  function updateData (id, update) {
    return new Promise((resolve, reject) => {
      connection.execute(
        'UPDATE user SET email=?, password=? WHERE id = ?',
        [update.email, update.password, id],
        function (err, res) {
          if (err) return reject(err)
          return resolve(res)
        }
      )
    })
  }
  try {
    const dataInsert = await updateData(1, {email: 'rohman1@gmail.com', password: 'iniadalahpassword'})
    console.log(dataInsert)
  } catch (error) {
    console.log(error)
  }

})()