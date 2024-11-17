const fs = require('fs');
const connection = require('./config/db')

// Função síncrona para ler o arquivo e retornar uma string
function lerArquivo(caminho) {
  try {
    const conteudo = fs.readFileSync(caminho, 'utf8');
    return conteudo;  // Retorna o conteúdo como uma string
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
    return null;
  }
}

async function alimenta() {
  let conn
  //texto,cluster_primario,Objetivo,especie,pontos
  const query = 'insert into Tarefa(texto,cluster_primario,objetivo,especie,pontos) values(?, ?, ?, ?, ?)'
  const conteudo = lerArquivo('/home/rafael-barros/Desktop/projeto/ApIrio/Cadastro/bdTarefas.txt')
  const tasks = conteudo.split(",")

  try{
    conn = await connection.getConnection()
    
    for(let i = 0; i < tasks.length-1; i+=5){
        let texto = tasks[i]
        let cluster_primario= tasks[i+1]
        let Objetivo= tasks[i+2]
        let especie= tasks[i+3]
        let pontos= tasks[i+4]
        
        conn.query(query, [texto, cluster_primario, Objetivo, especie, pontos])
        console.log(tasks[i], " - Insedrio ")
    }
    conn.release()
    
  }catch(error){
    console.log('Erro ao concectar', error.message)
  }
  
}

alimenta()