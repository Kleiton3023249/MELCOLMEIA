const express = require('express')
const app = express()
const UsuarioRoutes = require('./routes/UsuarioRoutes')

app.use(express.json())

app.use('/api', UsuarioRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
})

module.exports = app;
