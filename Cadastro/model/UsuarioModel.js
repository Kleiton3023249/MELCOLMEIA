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
        const query = 'INSERT INTO Usuario (nome, email, senha) VALUES (?, ?, ?)'

        let conn
        try {
            conn = await connection.getConnection() // Obtendo uma conexão do pool
            const [results] = await conn.query(query, [nome, email, senha])
            return results.insertId;
        } catch (error) {
            throw new Error(`Erro ao inserir usuário no banco: ${error.message}`)
        } finally {
            if (conn) conn.release();// Liberando a conexão de volta ao pool
        }
    }

    //CRUD - exclusao // CONTROLER CRIADO
    static async excluirUsuario(idUsuario) {
        const id = idUsuario
        const query = 'DELETE FROM Usuario WHERE id = ?'
        let conn

        try {
            conn = await connection.getConnection()
            const [results] = await conn.query(query,[id])
            
            console.log(results)

            if (results.affectedRows === 0){
                throw new Error('Nenhum usuario encontrado com o id ${id}')
            }

        } catch (error){
            throw new Error(`Erro ao excluir usuário no banco: ${error.message}`)
        } finally {
            if (conn) conn.release()
        }
    }


    static async getUsuarioByEmail(email){
        
        const query = "select * from Usuario where email = ?"
        let conn

        try{
            conn = await connection.getConnection()
            const results = await conn.query(query, [email])
            

            if(!results || results.length === 0){
                console.log("Usuario nao encontrado")
                return res.status(400).send("Usuario nao encontrado")
            }

            const usuario = results[0]
            return usuario

        }catch(err){
            console.log("erro de consulta DB: ", err)
            return res.status(500).send('Usuario nao encontrado')
        } 
    }
    
}





module.exports = Usuario