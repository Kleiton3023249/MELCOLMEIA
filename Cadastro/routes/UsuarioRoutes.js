const express = require('express')
const router = express.Router()
const UsuarioController = require('../controller/UsuarioController')

router.post('/cad', UsuarioController.criaUsuario) // cadastra

router.delete('/del', UsuarioController.deletaUsuario) //deleta

router.post('/login', UsuarioController.login) //loga

router.put('/Usuario/atualiza', UsuarioController.atualizaDados) //atualiz (todos os dados)

// carrega dados dash (dados alimentam da tela inicial)
router.get('/dash', )
// consulta colmeia por id (ao clicar no card da colmeia)
router.get('/colmId', )
// consulta tarefas por colmeia
router.get('/tarColm', )

// atribuir task
// reatribuir task
// exclur task
// concluir task



module.exports = router