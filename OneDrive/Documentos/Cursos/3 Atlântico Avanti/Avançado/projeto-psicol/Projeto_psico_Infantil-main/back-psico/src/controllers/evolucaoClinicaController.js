const { getEvolucoesClinicas, getEvolucaoClinicaById, addEvolucaoClinica, updateEvolucaoClinica, removeEvolucaoClinica } = require('../models/evolucaoClinicaModel');

const getEvolucoesClinicasHandler = async (req, res) => {
  try {
    const evolucoes = await getEvolucoesClinicas();
    res.json(evolucoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar evoluções clínicas', details: error.message });
  }
};

const getEvolucaoClinicaByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const evolucao = await getEvolucaoClinicaById(id);
    if (!evolucao) {
      return res.status(404).json({ error: 'Evolução clínica não encontrada' });
    }
    res.json(evolucao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar evolução clínica', details: error.message });
  }
};

const addEvolucaoClinicaHandler = async (req, res) => {
  const { pacienteId, profissionalId, relatoAtendimento, ajustesNoTratamento } = req.body;

  // Validação de campos obrigatórios
  if (!pacienteId || !profissionalId || !relatoAtendimento || !ajustesNoTratamento) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    const newEvolucao = await addEvolucaoClinica({ pacienteId, profissionalId, relatoAtendimento, ajustesNoTratamento });
    res.status(201).json(newEvolucao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar evolução clínica', details: error.message });
  }
};

const updateEvolucaoClinicaHandler = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    // Verifica se a evolução clínica existe antes de atualizar
    const existingEvolucao = await getEvolucaoClinicaById(id);
    if (!existingEvolucao) {
      return res.status(404).json({ error: 'Evolução clínica não encontrada' });
    }

    const updatedEvolucao = await updateEvolucaoClinica(id, data);
    res.json(updatedEvolucao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar evolução clínica', details: error.message });
  }
};

const removeEvolucaoClinicaHandler = async (req, res) => {
  const { id } = req.params;

  try {
    // Verifica se a evolução clínica existe antes de excluir
    const existingEvolucao = await getEvolucaoClinicaById(id);
    if (!existingEvolucao) {
      return res.status(404).json({ error: 'Evolução clínica não encontrada' });
    }

    await removeEvolucaoClinica(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover evolução clínica', details: error.message });
  }
};

module.exports = {
  getEvolucoesClinicasHandler,
  getEvolucaoClinicaByIdHandler,
  addEvolucaoClinicaHandler,
  updateEvolucaoClinicaHandler,
  removeEvolucaoClinicaHandler,
};