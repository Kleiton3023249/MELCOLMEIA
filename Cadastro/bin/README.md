# Explicação do Arquivo `www` (Servidor HTTP com Express)

Este arquivo em Node.js configura e inicializa um servidor HTTP para uma aplicação Express. Em projetos Express, esse arquivo geralmente é colocado em uma pasta chamada `bin` e nomeado como `www`, servindo como ponto de entrada para o servidor.

## Estrutura Geral

Este script realiza as seguintes etapas:
1. Carrega o aplicativo Express (`app`).
2. Define a porta do servidor.
3. Cria o servidor HTTP.
4. Configura funções de tratamento para eventos de erro e inicialização.

## Explicação por Seções

### 1. Cabeçalho `#!/usr/bin/env node`

Este cabeçalho indica ao sistema que o script deve ser executado usando o interpretador `node`, tornando-o executável em sistemas Unix/Linux.

### 2. Carregamento de Dependências

```javascript
var app = require('../app');
var debug = require('debug')('apiario-cadastro:server');
var http = require('http');


- **`app`**: Carrega o aplicativo Express definido no arquivo `app.js`, que normalmente está no diretório anterior (`../app`).
- **`debug`**: É uma biblioteca que facilita o registro de informações de depuração. Aqui, é configurado para mostrar logs com o namespace `apiario-cadastro:server`.
- **`http`**: A biblioteca nativa do Node.js usada para criar o servidor HTTP.


## Definindo a Porta e Armazenando no Express

```javascript
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

### Detalhes sobre as funções

- **normalizePort:** Essa função normaliza o valor da porta, garantindo que ela seja um número ou uma string válida. Por exemplo, `process.env.PORT` define a porta do ambiente, e caso não esteja definida, usa 3000 como padrão.
- **app.set('port', port):** Configura a porta do aplicativo Express para ser usada pelo servidor HTTP.


## 4. Criando o Servidor HTTP

```javascript
var server = http.createServer(app);

- **Descrição:** Cria uma instância de servidor HTTP usando o aplicativo Express (`app`), que será a base para responder a requisições HTTP.

## 5. Iniciando o Servidor e Configurando Eventos

```javascript
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

- **server.listen(port):** O servidor começa a escutar conexões na porta configurada.
- **server.on('error', onError):** O evento `error` é monitorado e direcionado para a função `onError`.
- **server.on('listening', onListening):** O evento `listening` é monitorado e direcionado para a função `onListening`.

## 6. Função normalizePort

```javascript
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val; // Se não for um número, retorna a string (pode ser um pipe)
  }

  if (port >= 0) {
    return port; // Retorna o número da porta, se for válido
  }

  return false;
}


- **Descrição:** Essa função tenta converter o valor de `val` para um número inteiro. Se não for possível, assume-se que `val` é um pipe (nomeado), o que é útil em sistemas Unix.

## 7. Função onError

```javascript
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error; // Se o erro não for relacionado à porta, lança o erro
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

- **Descrição:** Essa função lida com possíveis erros ao iniciar o servidor:
  - **EACCES:** Significa que a porta requer permissões administrativas.
  - **EADDRINUSE:** A porta já está em uso.

## 8. Função onListening

```javascript
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

- **Descrição:** Quando o servidor começa a escutar a porta, essa função é chamada para registrar uma mensagem de que o servidor está ativo, seja em um pipe ou porta.




- **Descrição:** O código utiliza principalmente a programação imperativa, incorporando elementos de programação funcional e programação baseada em eventos. Essa combinação é bastante comum em aplicações Node.js, onde a manipulação de eventos assíncronos e o controle do fluxo de execução são fundamentais para o desempenho e a eficiência.
