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

module.exports = { addDados }