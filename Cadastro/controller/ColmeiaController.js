const Colmeia = require('../model/ColmeiaModel')

const cadastraColmeia = async (req, res) => {
    //const {nome, numeroID, saude, especie, qtdAbelha, tipoColmeia, tempMedia} = dados
    const {nome, numeroID, saude, especie, qtdAbelha, tipoColmeia, tempMedia} = req.body
    
    const response = await Colmeia.cadastraColmeia({nome, numeroID, saude, especie, qtdAbelha, tipoColmeia, tempMedia})

    console.log(response)
}


module.exports = {cadastraColmeia}