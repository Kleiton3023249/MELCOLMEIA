const ColmeiaControler = require('../controller/ColmeiaController')
const express = require('express')
const Router = express.Router()

Router.post('/', ColmeiaControler.cadastraColmeia)



module.exports = Router