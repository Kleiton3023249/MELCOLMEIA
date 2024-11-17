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
  const query = 'insert into Especie(nome) values(?)'
  const conteudo = lerArquivo('/home/rafael-barros/Desktop/projeto/ApIrio/especie.txt')
  const especies = conteudo.split(",")

  try{
    conn = await connection.getConnection()

    for(let i =0; i< especies.length; i++){
      conn.query(query, [especies[i]])
      console.log(especies[i], "Insedrio ")
    }

  }catch(error){
    console.log('Erro ao concectar', error.message)
  }


}