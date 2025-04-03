// 31/03/2025

const express = require('express')
const pg = require('pg')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Pagina inicial de webapi')
})

app.get('/destinations', (req, res) => {
  const Pool = pg.Pool;

  const pool = new Pool({
      user: 'api_user',
      host: 'localhost',
      database: 'adventures_db1',
      password: 'admin-user',
      port: 5432
  })

  pool.query('SELECT * FROM destinations', (error, results) => {
    if (error)
    throw error
    destinations = results.rows
    res.json({destinations})
  })

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
