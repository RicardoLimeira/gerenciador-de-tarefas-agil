const express = require('express');
const bodyParser = require('body-parser');
const tarefaRoutes = require('./routes/tarefa');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/tarefas', tarefaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
