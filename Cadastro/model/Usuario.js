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


    //CRUD - atualizacao
    static async atualizarUsuario(dados) {

        const {valor, id} = dados
        let conn
        const query = 'update Usuario set email = ? where id = ?'

        try {
            conn = await connection.getConnection()
            await conn.query(query,[valor,id])
         
        } catch (error){
            throw new Error(`Erro ao atualizar dado no banco: ${error.message}`)
        } finally {
            if (conn) conn.release()
        }
     
    }

    //CRUD - leitura
    static async mostraUsuario(dados){
        const id = dados
        let conn
        const query = 'select * from Usuario where id = ?'

        try {
            conn = await connection.getConnection()
            await conn.query(query [id])
        } catch (error){
            throw new Error(`Erro ao buscar informação no banco: ${error.message}`)
        } finally {
            if (conn) conn.release()
        }

    }
}

module.exports = Usuario