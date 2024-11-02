const { query } = require('express');
const connection = require('../config/db')
const crypto = require('crypto')

class Usuario {

    constructor(nome, email, senha){
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    //CRUD - cadastro
    static async criaUsuario(dados){
        const {nome, email, senha} = dados;

        const hash = crypto.createHash('sha256').update(senha).digest('hex');

        return new Promise((resolve, reject)=> {
            const query = 'insert into Usuario(nome, email, senha) values(?, ?, ?)'
            connection.query(query, [nome, email, hash], (error, results)=>{
                if (error){
                    return reject(error)
                }
                resolve(results.insertId)
            })
        })
    }

    //CRUD - exclusao
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