const express = require('express')
const UsuarioRoutes = require('./routes/UsuarioRoutes')
const ColmeiaRoutes = require('./routes/ColmeiaRoutes')
const AdmRoutes = require('./routes/AdministradorRoutes')
const TecRoutes = require('./routes/TecnicoRoutes')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/Usuario', UsuarioRoutes)
app.use('/Adm', AdmRoutes)
app.use('/Tec', TecRoutes)
app.use('/Colmeia', ColmeiaRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
})

module.exports = app;
