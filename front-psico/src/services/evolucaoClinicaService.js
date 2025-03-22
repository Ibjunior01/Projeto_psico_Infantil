import api from './api'; // Importa a configuração base do Axios

// Função para buscar todas as evoluções clínicas
const getEvolucoesClinicas = async () => {
  try {
    const response = await api.get('/evolucoes-clinicas'); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar evoluções clínicas:', error);
    throw error;
  }
};

// Função para buscar uma evolução clínica por ID
const getEvolucaoClinicaById = async (id) => {
  try {
    const response = await api.get(`/evolucoes-clinicas/${id}`); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar evolução clínica:', error);
    throw error;
  }
};

// Função para adicionar uma evolução clínica
const addEvolucaoClinica = async (evolucaoData) => {
  try {
    const response = await api.post('/evolucoes-clinicas', evolucaoData); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar evolução clínica:', error);
    throw error;
  }
};

// Função para atualizar uma evolução clínica
const updateEvolucaoClinica = async (id, evolucaoData) => {
  try {
    const response = await api.put(`/evolucoes-clinicas/${id}`, evolucaoData); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar evolução clínica:', error);
    throw error;
  }
};

// Função para remover uma evolução clínica
const removeEvolucaoClinica = async (id) => {
  try {
    await api.delete(`/evolucoes-clinicas/${id}`); // Substitua pelo endpoint correto
  } catch (error) {
    console.error('Erro ao remover evolução clínica:', error);
    throw error;
  }
};

export default {
  getEvolucoesClinicas,
  getEvolucaoClinicaById,
  addEvolucaoClinica,
  updateEvolucaoClinica,
  removeEvolucaoClinica,
};