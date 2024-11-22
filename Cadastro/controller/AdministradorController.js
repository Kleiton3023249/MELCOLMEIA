const Usuario = require('../model/UsuarioModel')
const Adm = require('../model/AdministradorModel')

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
    res.send(req.body)
    const {usuario_id, tarefa_id} = req.body
    //verificar tipos de colmeias do usuario e validar atribuicao (no momento, atribuisse sem verificacao)
    const response = await Adm.atribuiTarefa(usuario_id, tarefa_id)
    
}

//concluir
const concluiTask = async (req, res) => {
}

//exclui 
const excluiTask = async (req, res) => {
}


module.exports = { addDados, atribuiTask }