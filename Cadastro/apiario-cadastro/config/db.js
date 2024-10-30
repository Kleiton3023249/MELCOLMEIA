const mysql = require('mysql2')
const dotenv = require('dotenv')

//variaveis d ambiente
dotenv.config()


// configuracao da conexao
const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
    
)

// Teste de  conexao
connection.connect((error)=>{

    if(error){
        console.error('Erro ao conectar com o DB', error)
    }else{
        console.log('Conectando ao DB MySQL')
    }
})

module.exports = connection