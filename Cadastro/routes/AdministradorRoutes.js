const express = require('express')
const router = express.Router()
const controller = require('../controller/AdministradorController')

router.put('/dados', controller.addDados)

// atribuir task
router.post('/addTask', controller.atribuiTask)
// excluir task
router.delete('/delTask', controller.excluiTask)
// mudar status 
router.patch('/chgStatus', controller.mudarStatus)



module.exports = router