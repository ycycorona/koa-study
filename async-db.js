const mysql = require('mysql')
const pool = mysql.createPool({
  host     : '47.105.46.120',   // 数据库地址
  user     : 'python',    // 数据库用户
  password : 'ycy6323892',   // 数据库密码
  database : 'python'  // 选中数据库
})

let query = function( sql, values ) {
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = { query }