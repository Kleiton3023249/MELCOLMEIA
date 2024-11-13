const { query } = require('express');
const connection = require('../config/db') // Chamo minha pool expotada do arq coneccao
const mysql = require('mysql2/promise')




class Usuario {

    constructor(nome, email, senha){
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    //INCLUIR
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

    //EXCLUIR
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
    //ALTERAR DADOS

    static async alteraDados(dados){

        const query = 'update Usuario set nome = ?, email = ?, rua=?, cidade=?, estado=?, cep=?, pais=? where id = ?'
        let conn 

        {nome, email, rua, cidade, cep}
        try{
            conn = await connection.getConnection()
            const [results] = await conn.query(query, [nome,email,rua,cidade,estado,cep,pais])

            if(!results || results === 0){
                console.log("Usuario nao encontrado")
            }

            return results

        }catch (error){
            console.log("Erro ao atualizar usuario", error.message)
        }
    }









    //GETTERS E SETTERS
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



    static async getUsuarioById(id){
        
        const query = "select * from Usuario where id = ?"
        let conn

        try{
            conn = await connection.getConnection()
            const results = await conn.query(query, [id])
            

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