
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
        this.status.tipoStatus = 'Concluída';
        return true;
    }

    cancelarTarefa() {
        this.status.tipoStatus = 'Cancelada';
    }
}

module.exports = Tarefa;
