 const Usuario = require('../model/UsuarioModel')
 const Tec = require('../model/TecnicoModel')

 //cadastrar colmeia

 const cadColmeia = (req,res) => {

    const {nome, estadoSaude, especie_id, qtdAbelhas, tipoColmeia, tempMedia} = req.body
    const response = Tec.cadastraColmeia(nome, estadoSaude, especie_id, qtdAbelhas, tipoColmeia, tempMedia)

    res.send(response)

 }
 //editar dados colmeia
 //concluir tarefa 

 module.exports = {cadColmeia}
 