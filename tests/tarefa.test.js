const request = require('supertest');
const express = require('express');
const app = express();
const tarefaRoutes = require('../src/routes/tarefa');

app.use(express.json());
app.use('/tarefas', tarefaRoutes);

describe('API /tarefas', () => {
  it('deve criar uma nova tarefa', async () => {
    const resposta = await request(app)
      .post('/tarefas')
      .send({ titulo: 'Testar Jest', descricao: 'Criando testes automatizados' });

    expect(resposta.statusCode).toBe(201);
    expect(resposta.body).toHaveProperty('id');
    expect(resposta.body.titulo).toBe('Testar Jest');
  });

  it('deve listar tarefas', async () => {
    const resposta = await request(app).get('/tarefas');
    expect(resposta.statusCode).toBe(200);
    expect(Array.isArray(resposta.body)).toBe(true);
  });
});
