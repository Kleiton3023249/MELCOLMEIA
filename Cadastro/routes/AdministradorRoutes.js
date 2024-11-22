const express = require('express')
const router = express.Router()
const controller = require('../controller/AdministradorController')

router.put('/dados', controller.addDados)

module.exports = router