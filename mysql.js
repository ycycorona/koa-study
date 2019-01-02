const { query } = require('./async-db')
async function selectAllData( ) {
  let sql = 'SELECT * FROM auth_user'
  let dataList = await query( sql ).catch((err) => {console.log(err)})
  return dataList
}

async function getData() {
  const res = await selectAllData()
  return res
}

getData()
.then((res) => {
  console.log(res)
})