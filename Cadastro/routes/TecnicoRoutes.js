const express = require('express')
const router = express.Router()
const Controler = require("../controller/TecnicoController")


    router.put('/addDados', Controler.addDados)
    // exclui colmeia
    // cadastra colemia
    // edita colmeia (total)
    // consulta colmeias 
    // detalha colmeia
    // agenda tarefa
    // exclui tarefa
    // consulta tarefas
    // detalha tarefas

module.exports = {router}