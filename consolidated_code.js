const Tarefa = require('./Tarefa');

class SistemaAgendamento {
    constructor(id, usuario, colmeia, dataAbertura, dataAtualizacao, dataFechamento) {
        this.id = id;
        this.usuario = usuario; // Aqui pode ser um objeto ou id do usuÃ¡rio
        this.colmeia = colmeia; // Aqui pode ser um objeto ou id da colmeia
        this.dataAbertura = dataAbertura;
        this.dataAtualizacao = dataAtualizacao;
        this.dataFechamento = dataFechamento;
        this.tarefa = [];
    }

    agendarData(data) {
        this.dataAbertura = data;
    }

    reagendarData(data) {
        this.dataAtualizacao = data;
    }

    cancelarAgendamento() {
        this.dataFechamento = new Date();
    }
}

module.exports = SistemaAgendamento;

class Status {
    constructor(id, assentamento, tipoStatus) {
        this.id = id;
        this.assentamento = assentamento;
        this.tipoStatus = tipoStatus;
    }
}

module.exports = Status;

const Status = require('./Status');

class Tarefa {
    constructor(id, descricao, status, tipoTarefa) {
        this.id = id;
        this.descricao = descricao;
        this.status = new Status(status.id, status.assentamento, status.tipoStatus);
        this.tipoTarefa = tipoTarefa;
    }

    editarTarefa(descricao) {
        this.descricao = descricao;
    }

    concluirTarefa() {
        this.status.tipoStatus = 'ConcluÃ­da';
        return true;
    }

    cancelarTarefa() {
        this.status.tipoStatus = 'Cancelada';
    }
}

module.exports = Tarefa;

const Tarefa = require('../models/Tarefa');
const connection = require('../config/db');

exports.criarTarefa = (req, res) => {
    const { descricao, status, tipoTarefa } = req.body;
    const novaTarefa = new Tarefa(null, descricao, status, tipoTarefa);

    const sql = 'INSERT INTO tarefas (descricao, status, tipoTarefa) VALUES (?, ?, ?)';
    connection.query(sql, [novaTarefa.descricao, novaTarefa.status.tipoStatus, novaTarefa.tipoTarefa], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(novaTarefa);
    });
};


// routes/tarefaRoutes.js
const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.post('/tarefas', tarefaController.criarTarefa);
// Adicione rotas para editar, concluir e cancelar tarefas

module.exports = router;
