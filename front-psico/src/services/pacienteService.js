import api from './api'; // Importa a configuração base do Axios

// Função para buscar todos os pacientes
const getPacientes = async () => {
  try {
    const response = await api.get('/pacientes'); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar pacientes:', error);
    throw error;
  }
};

// Função para buscar um paciente por ID
const getPacienteById = async (id) => {
  try {
    const response = await api.get(`/pacientes/${id}`); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar paciente:', error);
    throw error;
  }
};

// Função para adicionar um novo paciente
const addPaciente = async (pacienteData) => {
  try {
    const response = await api.post('/pacientes', pacienteData); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar paciente:', error);
    throw error;
  }
};

// Função para atualizar os dados de um paciente
const updatePaciente = async (id, pacienteData) => {
  try {
    const response = await api.put(`/pacientes/${id}`, pacienteData); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar paciente:', error);
    throw error;
  }
};

// Função para remover um paciente
const removePaciente = async (id) => {
  try {
    await api.delete(`/pacientes/${id}`); // Substitua pelo endpoint correto
  } catch (error) {
    console.error('Erro ao remover paciente:', error);
    throw error;
  }
};

export default {
  getPacientes,
  getPacienteById,
  addPaciente,
  updatePaciente,
  removePaciente,
};