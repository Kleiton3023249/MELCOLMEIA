const { query } = require('express');
const connection = require('../config/db') // Chamo minha pool expotada do arq coneccao
const mysql = require('mysql2/promise')




class Usuario {

    constructor(nome, email, senha){
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    //CRUD - cadastro
    static async criaUsuario({ nome, email, senha }) {
        const query = 'INSERT INTO Usuario (nome, email, senha) VALUES (?, ?, ?)';

        let conn;
        try {
            conn = await connection.getConnection(); // Obtendo uma conexão do pool
            const [results] = await conn.query(query, [nome, email, senha]);
            return results.insertId;
        } catch (error) {
            throw new Error(`Erro ao inserir usuário no banco: ${error.message}`);
        } finally {
            if (conn) conn.release(); // Liberando a conexão de volta ao pool
        }
    }



    //CRUD - exclusao // CONTROLER CRIADO
    static async excluirUsuario(idUsuario) {
        const id = idUsuario
        return new  Promise ((resolve,reject) => {
            const query = 'DELETE FROM Usuario WHERE id = ?';
            connection.query(query,[id], (error,results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results.effectedRows);
            })

        })
    }


    //CRUD - atualizacao
    static async atualizarUsuario(dados) {

        const {valor, id} = dados

        console.log(dados)

        return new Promise ((resolve, reject) => {
            const query = 'update Usuario set email = ? where id = ?'
            connection.query(query, [valor, id], (error,results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results.effectedRows);
            })
        }) 
    }

    //CRUD - leitura
    static async mostraUsuario(dados){
        const id = dados

        return new Promise ((resolve, reject)=>{
            const query = 'select * from Usuario where id = ?'
            connection.query(query, id, (error, results)=>{
                if(error){
                    return reject(error)
                }

                if(results.length > 0){
                    resolve(results[0])
                } else {
                    resolve(null)
                }
                
            })
        })
    }
}

module.exports = Usuario