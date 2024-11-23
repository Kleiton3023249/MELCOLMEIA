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
  const query = 'insert into Especie(nome, tipo) values(?, ?)'
  const conteudo = lerArquivo('especie.txt')
  const especies = conteudo.split(",")
  console.log(especies)

  try{

    conn = await connection.getConnection()

    for(let i = 0; i < especies.length-1; i+=2){
      
      conn.query(query, [especies[i], especies[i+1]])
      console.log(especies[i], " - Insedrio ")
      
    }
    conn.release()
    
  }catch(error){
    console.log('Erro ao concectar', error.message)
  }
  
}

alimenta()