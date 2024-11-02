// index.js
const express = require('express');
const bodyParser = require('body-parser');
const tarefaRoutes = require('./routes/tarefaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', tarefaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
