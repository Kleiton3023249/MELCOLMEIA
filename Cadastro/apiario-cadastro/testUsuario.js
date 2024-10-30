const Usuario = require('./model/Usuario'); 

// Função de teste para criar um novo usuário
async function testarCriarUsuario() {
  try {
    const dadosUsuario = {
      nome: 'João da Silva',
      email: 'joao.silva@example.com',
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

// Executa a função de teste
testarCriarUsuario();


