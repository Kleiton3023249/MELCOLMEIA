const connection = require('../config/db')

class Usuario {

    constructor(nome, email, senha){
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    //CRUD - cadastro
    static async criaUsuario(dados){
        const {nome, email, senha} = dados;
        return new Promise((resolve, reject)=> {
            const query = 'insert into usuario(nome, email, senha) values(?, ?, ?)'
            connection.query(query, [nome, email, senha], (error, results)=>{
                if (error){
                    return reject(error)
                }
                resolve(results.insertId)
            })
        })
    }
    //CRUD - exclusao
    //CRUD - atualizacao
    //CRUD - leitura
}

module.exports = Usuario