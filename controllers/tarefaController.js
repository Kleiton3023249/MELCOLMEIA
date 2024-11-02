
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


