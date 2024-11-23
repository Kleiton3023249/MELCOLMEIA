const connection = require('../config/db') 
const Usuario = require('../model/UsuarioModel')

class Tecnico extends Usuario{
    //metodos de tecnico
    
    // cadastra colemia
    constructor(especialidade){
        this.especialidade = especialidade
    }

    static async cadastraColmeia(nome, estadoSaude, especie_id, qtdAbelhas, tipoColmeia, tempMedia){
        
        const query = 'insert into colmeia(nome, estadoSaude, especie_id, qtdAbelhas, tipoColmeia, tempMedia) values (?, ?, ?, ?, ?, ?)' //inserir os parametros de colmeia
        let conn
        try{
            conn = await connection.getConnection()
            const results = conn.query(query, [nome, estadoSaude, especie_id, qtdAbelhas, tipoColmeia, tempMedia])
            
            return results.insertID

        }catch(error){
            console('Erro ao inserir usuario', error.message)

        }finally{
            if (conn) conn.release()
        }
   }
    // exclui colmeia

    static async excluiColmeia(id){
        const query = 'delete from Colmeia where id = ?'
        let conn

        try{

            conn = await connection.getConnection()
            const [results] = conn.query(query, [id])

            if(results.affectedrows === 0 ){
                throw new Error(`Nenhum usuario encontrado com o id: ${id}`)
            }

        }catch(error){
            console.log(`Erro ao excluir usuario: ${error.message}`)
        }finally{
            if (conn) conn.release()
        }
    }
  
}

module.exports = Tecnico
