import api from './api'; // Importa a configuração base do Axios

// Função para buscar todos os atendimentos
const getAtendimentos = async () => {
  try {
    const response = await api.get('/atendimentos'); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar atendimentos:', error);
    throw error;
  }
};

// Função para buscar um atendimento por ID
const getAtendimentoById = async (id) => {
  try {
    const response = await api.get(`/atendimentos/${id}`); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar atendimento:', error);
    throw error;
  }
};

// Função para adicionar um novo atendimento
const addAtendimento = async (atendimentoData) => {
  try {
    const response = await api.post('/atendimentos', atendimentoData); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar atendimento:', error);
    throw error;
  }
};

// Função para atualizar os dados de um atendimento
const updateAtendimento = async (id, atendimentoData) => {
  try {
    const response = await api.put(`/atendimentos/${id}`, atendimentoData); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar atendimento:', error);
    throw error;
  }
};

// Função para remover um atendimento
const removeAtendimento = async (id) => {
  try {
    await api.delete(`/atendimentos/${id}`); // Substitua pelo endpoint correto
  } catch (error) {
    console.error('Erro ao remover atendimento:', error);
    throw error;
  }
};

export default {
  getAtendimentos,
  getAtendimentoById,
  addAtendimento,
  updateAtendimento,
  removeAtendimento,
};