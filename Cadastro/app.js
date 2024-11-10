const express = require('express')
const UsuarioRoutes = require('./routes/UsuarioRoutes')

const app = express()

app.use(express.json())

app.use('/api', UsuarioRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
})

module.exports = app;
