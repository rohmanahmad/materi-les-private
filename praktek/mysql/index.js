const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ripple10'
  })

  connection.query(
    'SELECT `key_id` as `key`, `key_name` as `name` FROM `ripple_client_keyword` where key_id 1',
    function(err, results, fields) {
        if(err) console.error(err)
        console.log(results); // results contains rows returned by server
        //console.log(fields); // fields contains extra meta data about results, if available
    }
  )