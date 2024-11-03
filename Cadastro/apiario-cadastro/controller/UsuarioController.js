const Usuario = require('../model/Usuario')
const crypto = require('crypto')

const criaUsuario = async (req, res) => {

    try{

        const {nome, email, senha} = req.body //No corpo da requisicao (reqbody), vira os dados

        const senhaHash = crypto.createHash('sha256').update(senha).digest('hex') // pega um atributo senha e o passa num algo hash que retorna senhahash

        const novoUsuario = await Usuario.criaUsuario({nome, email, senha: senhaHash}) // chamo a funcao que cria usuario passando os daodos como parametro

        res.status(201).json({id: novoUsuario, message: 'Usuario criado com sucesso'}) // como resposta, devolvo o status + texto informativo 

    }catch (error) {
        res.status(500).json({error: 'Erro ao criar usuario', details: error.message})
    }
}

module.exports = {criaUsuario}