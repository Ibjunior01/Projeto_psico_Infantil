const { getProfissionais, getProfissionalById, addProfissional, updateProfissional, removeProfissional } = require('../models/profissionalModel');

const getProfissionaisHandler = async (req, res) => {
  try {
    const profissionais = await getProfissionais();
    res.json(profissionais);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar profissionais', details: error.message });
  }
};

const getProfissionalByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const profissional = await getProfissionalById(id);
    if (!profissional) {
      return res.status(404).json({ error: 'Profissional não encontrado' });
    }
    res.json(profissional);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar profissional', details: error.message });
  }
};

const addProfissionalHandler = async (req, res) => {
  const { usuarioId, nome, especialidade, localizacao, faixaEtaria, matriculaProfissional } = req.body;

  // Validação de campos obrigatórios
  if (!usuarioId || !nome || !especialidade || !localizacao || !faixaEtaria || !matriculaProfissional) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    const newProfissional = await addProfissional({ usuarioId, nome, especialidade, localizacao, faixaEtaria, matriculaProfissional });
    res.status(201).json(newProfissional);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar profissional', details: error.message });
  }
};

const updateProfissionalHandler = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    // Verifica se o profissional existe antes de atualizar
    const existingProfissional = await getProfissionalById(id);
    if (!existingProfissional) {
      return res.status(404).json({ error: 'Profissional não encontrado' });
    }

    const updatedProfissional = await updateProfissional(id, data);
    res.json(updatedProfissional);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar profissional', details: error.message });
  }
};

const removeProfissionalHandler = async (req, res) => {
  const { id } = req.params;

  try {
    // Verifica se o profissional existe antes de excluir
    const existingProfissional = await getProfissionalById(id);
    if (!existingProfissional) {
      return res.status(404).json({ error: 'Profissional não encontrado' });
    }

    await removeProfissional(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover profissional', details: error.message });
  }
};

module.exports = {
  getProfissionaisHandler,
  getProfissionalByIdHandler,
  addProfissionalHandler,
  updateProfissionalHandler,
  removeProfissionalHandler,
};