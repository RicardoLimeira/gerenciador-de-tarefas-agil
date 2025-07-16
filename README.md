# Gerenciador de Tarefas Ágil

Este projeto simula o desenvolvimento de um sistema de gerenciamento de tarefas para uma startup de logística, seguindo metodologias ágeis. O objetivo é permitir que a equipe acompanhe o fluxo de trabalho em tempo real, priorize tarefas e monitore o desempenho.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Git e GitHub
- GitHub Projects (Kanban)
- GitHub Actions
- Jest + Supertest (Testes Automatizados)

## 📂 Estrutura do Projeto

gerenciador-de-tarefas-agil/
├── .github/workflows/
│ └── nodejs.yml
├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ │ └── tarefa.js
│ └── index.js
├── tests/
│ └── tarefa.test.js
├── package.json
├── package-lock.json
└── README.md


## 📌 Funcionalidades

- CRUD completo para tarefas
- Testes automatizados com Jest + Supertest
- Integração contínua com GitHub Actions
- Organização de tarefas em Kanban no GitHub Projects

## 📋 Metodologia Ágil

- Kanban aplicado via GitHub Projects
- Commits frequentes e descritivos
- Simulação de mudança de escopo com adaptação do projeto

## 🔄 Mudança de Escopo

Durante o desenvolvimento, o cliente solicitou uma alteração no escopo do projeto:

**Nova Funcionalidade:**  
Adicionar campo de **prioridade** (Alta, Média, Baixa) no CRUD de tarefas.

**Justificativa:**  
Essa mudança foi necessária para permitir a priorização visual de tarefas críticas, otimizando o fluxo de trabalho da equipe de logística.

**Status da Implementação:**  
Em andamento (adicionado ao Kanban).

## ▶️ Como Executar

1. Instale as dependências:

```bash
npm install

