const express = require('express')
const router = express.Router()
const UsuarioController = require('../controller/UsuarioController')

router.post('/Usuario', UsuarioController.criaUsuario)

module.exports = router