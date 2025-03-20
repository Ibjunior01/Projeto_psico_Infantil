const { getAtendimentos, getAtendimentoById, addAtendimento, updateAtendimento, removeAtendimento } = require('../models/atendimentoModel');


const getAtendimentosHandler = async (req, res) => {
    try {
        const atendimentos = await getAtendimentos();
        res.json(atendimentos);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar atendimentos'});
    }
};

const getAtendimentoByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const atendimento = await getAtendimentoById (id);
        if (!atendimento) {
            return res.status(404).json({ error: 'Atendimento não encontrado'});
        }
        res.json(atendimento);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar atendimento'});
    }
};

const addAtendimentoHandler = async (req, res) => {
    const { pacienteId, profissionalId, dataHora, status } = req.body;

    if (!pacienteId || !profissionalId || !dataHora || !status) {
      return res.status(400).json({ error: 'Paciente ID, Profissional ID, Data/Hora e Status são obrigatórios' });
    }
  
    try {
      const newAtendimento = await addAtendimento({ pacienteId, profissionalId, dataHora, status });
      res.status(201).json(newAtendimento);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao adicionar atendimento' });
    }
  };
  
const updateAtendimentoHandler = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
      const updatedAtendimento = await updateAtendimento(id, data );
      res.json(updatedAtendimento);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar atendimento' });
    }
  };
  
const removeAtendimentoHandler = async (req, res) => {
    const { id } = req.params;

    try {
      await removeAtendimento(id);
      res.status(204).send();
    } 
    catch (error) {
      res.status(500).json({ error: 'Erro ao remover atendimento' });
    }
  };

  module.exports = { 
    getAtendimentosHandler, 
    getAtendimentoByIdHandler, 
    addAtendimentoHandler, 
    updateAtendimentoHandler, 
    removeAtendimentoHandler 
};