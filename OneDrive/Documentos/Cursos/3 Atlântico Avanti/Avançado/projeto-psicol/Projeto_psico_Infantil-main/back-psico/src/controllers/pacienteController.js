const { getPacientes, getPacienteById, addPaciente, updatePaciente, removePaciente } = require('../models/pacienteModel');

const getPacientesHandler = async (req, res) => {
  try {
    const pacientes = await getPacientes();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pacientes', details: error.message });
  }
};

const getPacienteByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const paciente = await getPacienteById(id);
    if (!paciente) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar paciente', details: error.message });
  }
};

const addPacienteHandler = async (req, res) => {
  const { usuarioId, nome, dataNascimento, principalQueixa, historicoFamiliar, usoMedicamentos, objetivoTerapia } = req.body;

  // Validação de campos obrigatórios
  if (!usuarioId || !nome || !dataNascimento) {
    return res.status(400).json({ error: 'Usuário Id, nome e data de nascimento são obrigatórios' });
  }

  try {
    const newPaciente = await addPaciente({ usuarioId, nome, dataNascimento, principalQueixa, historicoFamiliar, usoMedicamentos, objetivoTerapia });
    res.status(201).json(newPaciente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar paciente', details: error.message });
  }
};

const updatePacienteHandler = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    // Verifica se o paciente existe antes de atualizar
    const existingPaciente = await getPacienteById(id);
    if (!existingPaciente) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }

    const updatedPaciente = await updatePaciente(id, data);
    res.json(updatedPaciente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar paciente', details: error.message });
  }
};

const removePacienteHandler = async (req, res) => {
  const { id } = req.params;

  try {
    // Verifica se o paciente existe antes de remover
    const existingPaciente = await getPacienteById(id);
    if (!existingPaciente) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }

    await removePaciente(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover paciente', details: error.message });
  }
};

module.exports = {
  getPacientesHandler,
  getPacienteByIdHandler,
  addPacienteHandler,
  updatePacienteHandler,
  removePacienteHandler,
};