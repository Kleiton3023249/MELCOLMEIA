const express = require('express')
const router = express.Router()
const UsuarioController = require('../controller/UsuarioController')



router.post('/Usuario', UsuarioController.criaUsuario)

router.delete('/Usuario/:id', UsuarioController.deletaUsuario)

router.post('/Usuario/login', UsuarioController.login)

router.post('/Usuario/atualiza', UsuarioController.atualizaDados)

//router.put('', UsuarioController)

module.exports = router