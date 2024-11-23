const Usuario = require('../model/UsuarioModel')
const connection = require('../config/db')

class Administrador extends Usuario{
    //metodos de Administrador
    
    constructor(empresa, cnpj){
        this.empresa = empresa
        this.cnpj = cnpj
    }

    static async addDados(empresa, cnpj, id){
        const query = 'update administrador set empresa = ?, cnpj = ? where id = ?'
        let conn
        
        try{
            conn = await connection.getConnection()
            const results = await conn.query(query, [empresa, cnpj, id])
            const result = results[0]

            if (result.affectedRows === 0){
                console.log("Erro ao atualizar")
                
            }else{
                return "Dados adicionados"
            }

        }catch(error){
            console.log('erro ao conectar com bd', error.message)
        }

    }

    static async atribuiTarefa(usuario_id, tarefa_id){

        const query = 'insert into usuariotarefa(usuario_id, tarefa_id) values(?, ?)'
        let conn

        try{
            conn = await connection.getConnection()
            const [results] = await conn.query(query, [usuario_id, tarefa_id])

            return results

        }catch(error){
            console.log("Erro ao conectar ao banco: ", error.message)
        }
    }

    static async excluiTarefa(id_task){
        let conn 
        let responses
        const query = 'delete from usuariotarefa where id = ?' 

        try{

            conn = await connection.getConnection()
            const [results] = await conn.query(query, [id_task])

            if(!results || results.affectedRows === 0 ){
                responses = `Tarefa nao encontrada para o id ${id_task}`
            }else{
                responses = `A tarefa de id ${id_task}, foi removida`
            }

            return responses

        }catch(error){
            console.log("erro ao conectar ao banco, ", error.message)

        }

    }

    static async mudarStatus(id_task, status){
        let conn
        const query = 'update usuariotarefa set status_tarefa = ? where id = ?'
        let response

        try{
            let conn = await connection.getConnection()
            const [results] = await conn.query(query, [status, id_task])

            if(results.affectedRows === 0 ){
                response = `Tarefa com ID ${id_task} nao encontrada`
            }else{
                response = `Status da tarefa ${id_task} alterado para ${status}`
            }

            return response
             
        }catch(error){
            console.log('Erro ao conectar com DB: ', error.message)
        }
    }

    

}

module.exports = Administrador