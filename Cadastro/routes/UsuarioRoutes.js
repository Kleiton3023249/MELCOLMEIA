const express = require('express')
const router = express.Router()
const UsuarioController = require('../controller/UsuarioController')

router.post('/cad', UsuarioController.criaUsuario) // cadastra

router.delete('/del', UsuarioController.deletaUsuario) //deleta

router.post('/login', UsuarioController.login) //loga

router.put('/Usuario/atualiza', UsuarioController.atualizaDados) //atualiz (todos os dados)


module.exports = router