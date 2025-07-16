const model = require('../models/tarefas');

exports.getAll = (req, res) => {
  res.json(model.getAll());
};

exports.create = (req, res) => {
  const novaTarefa = model.create(req.body);
  res.status(201).json(novaTarefa);
};

exports.update = (req, res) => {
  const tarefaAtualizada = model.update(req.params.id, req.body);
  if (tarefaAtualizada) {
    res.json(tarefaAtualizada);
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada' });
  }
};

exports.delete = (req, res) => {
  const removida = model.delete(req.params.id);
  if (removida) {
    res.json({ message: 'Tarefa removida com sucesso' });
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada' });
  }
};
