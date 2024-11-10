const express = require('express')
const UsuarioRoutes = require('./routes/UsuarioRoutes')
const parse = require('body-parser')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api', UsuarioRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
})

module.exports = app;
