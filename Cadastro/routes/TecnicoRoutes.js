const express = require('express')
const Router = express.Router()
const Controller = require("../controller/TecnicoController")

    // exclui colmeia
    // cadastra colemia
    Router.post('/addColm', Controller.cadColmeia)
    // edita colmeia (total)
    // consulta colmeias 
    // detalha colmeia
    // agenda tarefa
    // exclui tarefa
    // consulta tarefas
    // detalha tarefas

module.exports = Router