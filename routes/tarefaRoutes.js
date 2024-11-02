// routes/tarefaRoutes.js
const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.post('/tarefas', tarefaController.criarTarefa);
// Adicione rotas para editar, concluir e cancelar tarefas

module.exports = router;
