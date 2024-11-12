const Usuario = require('../model/UsuarioModel')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')


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


const deletaUsuario = async (req, res) => {
    try{
        const {id} = req.params

        await Usuario.excluirUsuario(id)

        res.status(200).json({mensagem: `Usuario ${id} deletado`})

    }catch (error) {
        res.status(500).json({error: "Erro ao excluir usuario", details: error.message})
    }
    
}

const login = async (req, res) => { 
    const {email, senha } = req.body 
    
    const usuario = await Usuario.getUsuarioByEmail(email)

    const senhaHashTentativa = crypto.createHash('sha256').update(senha).digest('hex')
    
    if(senhaHashTentativa !== usuario[0].senha){
        return res.status(400).send("Senha invalida")
    }

    const token = jwt.sign({email: usuario.email, id: usuario.id}, process.env.JWT_SECRET, {expiresIn:'1h'})

    res.status(200).json({token})
    
}



module.exports = {criaUsuario, deletaUsuario, login}
