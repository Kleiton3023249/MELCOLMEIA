const Usuario = require('./model/Usuario'); 



// Função de teste para criar um novo usuário
async function testarCriarUsuario() {
  try {
    const dadosUsuario = {
      nome: 'Rafael Barros',
      email: 'rafaelbarros@gmail',
      senha: 'senha123'
    };

    const usuarioId = await Usuario.criaUsuario(dadosUsuario);
    console.log(`Usuário criado com ID: ${usuarioId}`);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
  } finally {
    process.exit(); // Encerra o processo após o teste
  }
}

//testarCriarUsuario();



async function deleteUsuario() {
  try{
    const id = 3;
    const usuarioId = await Usuario.excluirUsuario(id);
    console.log(`Usuário excluido com ID: ${usuarioId}`);

  }
  catch (error) {
    console.error('Erro ao criar usuário:', error);
  } finally {
    process.exit(); // Encerra o processo após o teste
  }
}

//deleteUsuario()

async function updateUsuario() {
  try {
    const dadosUsuario = {
      valor: 'kleiton@gmail',
      id: 1
    }
    
    const usuarioId = await Usuario.atualizarUsuario(dadosUsuario)
    console.log(`Usuário atualizado com ID: ${usuarioId}`)

  }
  catch (error) {
    console.error('Erro ao criar usuário:', error)
  } finally {
    process.exit(); // Encerra o processo após o teste
  }

  
}

//updateUsuario()

async function exibeUsuario() {
  const id = 1

  const res = await Usuario.mostraUsuario(id)
  console.log(res)
}

//exibeUsuario()

