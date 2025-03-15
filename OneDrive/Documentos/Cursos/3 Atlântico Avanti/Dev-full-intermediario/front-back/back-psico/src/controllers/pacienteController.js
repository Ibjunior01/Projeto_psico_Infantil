const { getPacientes, getPacienteById, addPaciente, updatePaciente, removePaciente } = require('../models/pacienteModel');


const getPacientesHandler = async (req, res) => {
    try {
        const pacientes = await getPacientes();
        res.json(pacientes);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pacientes'});
    }
};

const getPacienteByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const paciente = await getPacienteById (id);
        if (!paciente) {
            return res.status(404).json({ error: 'Paciente não encontrado'});
        }
        res.json(paciente);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar paciente'});
    }
};

const addPacienteHandler = async (req, res) => {
    const { usuarioId, nome, dataNascimento, principalQueixa, historicoFamiliar, usoMedicamentos, objetivoTerapia } = req.body;

    if (!usuarioId || !nome || !dataNascimento) {
      return res.status(400).json({ error: 'usuário Id, nome e data de nascimento são obrigatórios' });
    }
  
    try {
      const newPaciente = await addPaciente({ usuarioId, nome, dataNascimento, principalQueixa, historicoFamiliar, usoMedicamentos, objetivoTerapia });
      res.status(201).json(newPaciente);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao adicionar paciente' });
    }
  };
  
const updatePacienteHandler = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
      const updatedPaciente = await updatePaciente(id, { id, data });
      res.json(updatedPaciente);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar paciente' });
    }
  };
  
const removePacienteHandler = async (req, res) => {
    const { id } = req.params;

    try {
      await removePaciente(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao remover paaciente' });
    }
  };

  module.exports = { 
    getPacientesHandler, 
    getPacienteByIdHandler, 
    addPacienteHandler, 
    updatePacienteHandler, 
    removePacienteHandler 
};