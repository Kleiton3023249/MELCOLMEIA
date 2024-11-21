const connection = require('../config/db')

class Colmeia {


    constructor(nome, numeroID, saude, especie, qtdAbelha, tipoColmeia, tempMedia){
        this.nome = nome, 
        this.numeroID = numeroID, 
        this.saude = saude, 
        this.especie = especie, 
        this.qtdAbelha = qtdAbelha, 
        this.tipoColmeia = tipoColmeia,
        this.tempMedia = tempMedia
    }

    static async cadastraColmeia({nome, saude, especie, qtdAbelha, tipoColmeia, tempMedia}){
        const query = 'insert into Colmeia(nome, estadoSaude, especie_id, qtdAbelhase, tipoColmeia, tempMedia) values(?,?,?,?,?,?,?)'
        let conn

        try{

            conn = await connection.getConnection()
            const results = conn.query(query, [nome, saude, especie, qtdAbelha, tipoColmeia, tempMedia])

            console.log(results)

        }catch(error){

            console.log("Falha ao cadastrar colmeias: ", error.message)
        }finally{
            
            if (conn) conn.release()
        }

    }
}

module.exports = Colmeia