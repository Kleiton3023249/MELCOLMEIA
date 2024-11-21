const ColmeiaControler = require('../controller/ColmeiaController')
const express = require('express')
const Router = express.Router()

Router.post('/', ColmeiaControler.cadastraColmeia)
//exclui
//Router.delete('/', ColmeiaControler.deletaColmeia)
//deleta
//atualiza(todos os dados)



module.exports = Router