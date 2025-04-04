// 31/03/2025

const express = require('express')
const dotenv = require('dotenv')
dotenv.config();

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Pagina inicial de webapi')
})

// accesso a todas las rutas dentro de la api
app.use(require('./routes/routes.js'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
