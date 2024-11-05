const express = require('express')
const router = express.Router()
const UsuarioController = require('../controller/UsuarioController')

router.post('/Usuario', UsuarioController.criaUsuario)

router.delete('/Usuario/:id', UsuarioController.deletaUsuario)

module.exports = router