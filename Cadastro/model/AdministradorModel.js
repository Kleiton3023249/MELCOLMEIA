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

}

module.exports = Administrador