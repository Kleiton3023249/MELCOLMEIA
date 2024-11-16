const express = require('express')
const router = express.Router()
const UsuarioController = require('../controller/UsuarioController')

router.post('/cad', UsuarioController.criaUsuario)

router.delete('/Usuario/:id', UsuarioController.deletaUsuario)

router.post('/Usuario/login', UsuarioController.login)

router.put('/Usuario/atualiza', UsuarioController.atualizaDados)

//router.put('', UsuarioController)

module.exports = router