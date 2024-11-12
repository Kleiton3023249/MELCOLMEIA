const connection = require('../config/db') 

class Tecnico extends Usuario{
    //metodos de tecnico
    


    // cadastra colemia

    static async cadastraColmeia(dados){
        
        const query = 'insert into Colmeia () values ()' //inserir os parametros de colmeia
        let conn
        try{
            conn = await connection.getConnection()
            const results = conn.query(query, []) // inserir os dados captados de colemias
            
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
    // edita colmeia (total)
    // consulta colmeias 
    // detalha colmeia

    // agenda tarefa
    // exclui tarefa
    // consulta tarefas
    // detalha tarefas




}

module.exports = {Tecnico}
