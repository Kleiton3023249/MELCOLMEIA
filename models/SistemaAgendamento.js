const Tarefa = require('./Tarefa');

class SistemaAgendamento {
    constructor(id, usuario, colmeia, dataAbertura, dataAtualizacao, dataFechamento) {
        this.id = id;
        this.usuario = usuario; // Aqui pode ser um objeto ou id do usuário
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
