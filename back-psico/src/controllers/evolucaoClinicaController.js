const { getEvolucoesClinicas, getEvolucaoClinicaById, addEvolucaoClinica, updateEvolucaoClinica, removeEvolucaoClinica } = require('../models/evolucaoClinicaModel');


const getEvolucoesClinicasHandler = async (req, res) => {
    try {
        const evolucoes = await getEvolucoesClinicas();
        res.json(evolucoes);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar evoluções clínicas'});
    }
};

const getEvolucaoClinicaByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const evolucao = await getEvolucaoClinicaById (id);
        if (!evolucao) {
            return res.status(404).json({ error: 'Evolução clínica não encontrada'});
        }
        res.json(evolucao);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar evolução clínica'});
    }
};

const addEvolucaoClinicaHandler = async (req, res) => {
    const { pacienteId, profissionalId, relatoAtendimento, ajustesNoTratamento } = req.body;

    if (!pacienteIdId || !profissionalId || !relatoAtendimento || !ajustesNoTratamento) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
  
    try {
      const newEvolucao = await addEvolucaoClinica({ pacienteId, profissionalId, relatoAtendimento, ajustesNoTratamento });
      res.status(201).json(newEvolucao);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao adicionar evolução clínica' });
    }
  };
  
const updateEvolucaoClinicaHandler = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
      const updatedEvolucao = await updateEvolucaoClinica(id, data );
      res.json(updatedEvolucao);
    } 
    catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar evolução clínica' });
    }
  };
  
const removeEvolucaoClinicaHandler = async (req, res) => {
    const { id } = req.params;

    try {
      await removeEvolucaoClinica(id);
      res.status(204).send();
    } 
    catch (error) {
      res.status(500).json({ error: 'Erro ao remover evolução clínica' });
    }
  };

  module.exports = { 
    getEvolucoesClinicas, 
    getEvolucaoClinicaById, 
    addEvolucaoClinica, 
    updateEvolucaoClinica, 
    removeEvolucaoClinica
};