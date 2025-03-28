const { getAtendimentos, getAtendimentoById, addAtendimento, updateAtendimento, removeAtendimento } = require('../models/atendimentoModel');

const getAtendimentosHandler = async (req, res) => {
  try {
    const atendimentos = await getAtendimentos();
    res.json(atendimentos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar atendimentos', details: error.message });
  }
};

const getAtendimentoByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const atendimento = await getAtendimentoById(id);
    if (!atendimento) {
      return res.status(404).json({ error: 'Atendimento não encontrado' });
    }
    res.json(atendimento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar atendimento', details: error.message });
  }
};

const addAtendimentoHandler = async (req, res) => {
  const { pacienteId, profissionalId, dataHora, status } = req.body;

  // Validação de campos obrigatórios
  if (!pacienteId || !profissionalId || !dataHora || !status) {
    return res.status(400).json({ error: 'Paciente ID, Profissional ID, Data/Hora e Status são obrigatórios' });
  }

  try {
    const newAtendimento = await addAtendimento({ pacienteId, profissionalId, dataHora, status });
    res.status(201).json(newAtendimento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar atendimento', details: error.message });
  }
};

const updateAtendimentoHandler = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    // Verifica se o atendimento existe antes de atualizar
    const existingAtendimento = await getAtendimentoById(id);
    if (!existingAtendimento) {
      return res.status(404).json({ error: 'Atendimento não encontrado' });
    }

    const updatedAtendimento = await updateAtendimento(id, data);
    res.json(updatedAtendimento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar atendimento', details: error.message });
  }
};

const removeAtendimentoHandler = async (req, res) => {
  const { id } = req.params;

  try {
    // Verifica se o atendimento existe antes de excluir
    const existingAtendimento = await getAtendimentoById(id);
    if (!existingAtendimento) {
      return res.status(404).json({ error: 'Atendimento não encontrado' });
    }

    await removeAtendimento(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover atendimento', details: error.message });
  }
};

module.exports = {
  getAtendimentosHandler,
  getAtendimentoByIdHandler,
  addAtendimentoHandler,
  updateAtendimentoHandler,
  removeAtendimentoHandler,
};