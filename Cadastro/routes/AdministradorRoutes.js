const express = require('express')
const router = express.Router()
const controller = require('../controller/AdministradorController')

router.put('/dados', controller.addDados)

// atribuir task

router.post('', )
// concluir task
router.patch('', )
// excluir task
router.delete('', )

module.exports = router