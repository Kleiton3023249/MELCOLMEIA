const Usuario = require('../model/UsuarioModel')
const Adm = require('../model/AdministradorModel')
const { response } = require('express')

//Adiciona os dados adicionais ao usuario, para administradores
const addDados = async (req,res)=>{

    const {empresa, email, cnpj } = req.body
    
    const resposta = await Usuario.getUsuarioByEmail(email)
    const usuario = resposta[0]

    const id = usuario.id

    const response = await Adm.addDados(empresa, cnpj, id)

    res.send(response)
}

//atribuir
//Com a impementacao do Front, o usuario selecionara a tarefa por uma lista. a lista gerara o id p/ esta funcao
const atribuiTask = async (req, res) => {
    //DADOS: ID_USER, ID_TASK
    const {usuario_id, tarefa_id} = req.body
    //verificar tipos de colmeias do usuario e validar atribuicao (no momento, atribuisse sem verificacao)
    const response = await Adm.atribuiTarefa(usuario_id, tarefa_id)

    res.send(`Tarefa inserida com id: ${response.insertId}`,)
    
}

//exclui 
const excluiTask = async (req, res) => {
    const {id_task} = req.body

    const response = await Adm.excluiTarefa(id_task)

    res.send(response)
}

//conclui
const mudarStatus = async (req, res) => {
    const {id_task, status} = req.body

    const response = await Adm.mudarStatus(id_task, status)

    res.send(response)
    
}


module.exports ={   addDados, 
                    atribuiTask, 
                    excluiTask,
                    mudarStatus
                }