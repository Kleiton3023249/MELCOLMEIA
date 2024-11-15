const ColmeiaControler = require('../controller/ColmeiaController')
const express = require('express')
const Router = express.Router()

Router.post('/cadColmeia', ColmeiaControler.cadastraColmeia)



module.exports = Router