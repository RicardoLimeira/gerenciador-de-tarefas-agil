let tarefas = [];
let contador = 1;

module.exports = {
  getAll: () => tarefas,
  create: (tarefa) => {
    const novaTarefa = { id: contador++, ...tarefa };
    tarefas.push(novaTarefa);
    return novaTarefa;
  },
  update: (id, dados) => {
    const index = tarefas.findIndex(t => t.id == id);
    if (index !== -1) {
      tarefas[index] = { ...tarefas[index], ...dados };
      return tarefas[index];
    }
    return null;
  },
  delete: (id) => {
    const index = tarefas.findIndex(t => t.id == id);
    if (index !== -1) {
      return tarefas.splice(index, 1);
    }
    return null;
  }
};
