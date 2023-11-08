(async () => {
  const mysql = require('mysql2')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'punt3n123',
    database: 'praktek_nodejs'
  })

  function queryInsert(data) {
    return new Promise((resolve, reject) => {
      connection.execute(
        'INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES (NULL, ?, ?, ?)', 
        [data.name, data.email, data.password],
        function (err, res) {
          if (err) return reject(err)
          else resolve(res)
        })
    })
  }
  
  try {
    const dataInsert = await queryInsert({name: 'wildan', email: 'wildan@gmail.com', password: 'punt3n321'})
    console.log(dataInsert)
  } catch (error) {
    console.log(error)
  }

})()