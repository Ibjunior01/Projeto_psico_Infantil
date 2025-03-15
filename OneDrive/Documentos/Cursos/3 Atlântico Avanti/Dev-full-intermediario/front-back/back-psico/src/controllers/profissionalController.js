const { getProfissionais, getProfissionalById, addProfissional, updateProfissional, removeProfissional } = require('../models/pacienteModel');


const getProfissionaisHandler = async (req, res) => {
    try {
        const Profissionais = await getProfissionais();
        res.json(Profissionais);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar profissionais'});
    }
};

const getProfissionalByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const profissional = await getProfissionalById (id);
        if (!profissional) {
            return res.status(404).json({ error: 'profissional não encontrado'});
        }
        res.json(profissional);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar profissional'});
    }
};

const addProfissionalHandler = async (req, res) => {
    const { usuarioId, nome, especialidade, localizacao, faixaEtaria, matriculaProfissional } = req.body;

    if (!usuarioId || !nome || !especialidade || !localizacao || !faixaEtaria || !matriculaProfissional) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
  
    try {
      const newProfissional = await addProfissional({ usuarioId, nome, especialidade, localizacao, faixaEtaria, matriculaProfissional });
      res.status(201).json(newProfissional);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao adicionar profissional' });
    }
  };
  
const updateProfissionalHandler = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
      const updatedProfissional = await updateProfissional(id, { id, data });
      res.json(updatedProfissional);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar profissional' });
    }
  };
  
const removeProfissionalHandler = async (req, res) => {
    const { id } = req.params;

    try {
      await removeProfissional(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao remover profissional' });
    }
  };

  module.exports = { 
    getProfissionaisHandler, 
    getProfissionalByIdHandler, 
    addProfissionalHandler, 
    updateProfissionalHandler, 
    removeProfissionalHandler 
};