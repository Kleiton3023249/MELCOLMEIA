const mysql = require('mysql2/promise')
const dotenv = require('dotenv')

//variaveis d ambiente
dotenv.config()


// configuracao do pool de conexao
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Teste de  conexao
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Conectando ao DB MySQL');
        connection.release(); // Liberando a conexão de volta ao pool
    } catch (error) {
        console.error('Erro ao conectar com o DB', error);
    }
})();

module.exports = pool; // Exportando o pool