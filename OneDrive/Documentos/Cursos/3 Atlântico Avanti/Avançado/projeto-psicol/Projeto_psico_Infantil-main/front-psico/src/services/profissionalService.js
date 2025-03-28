import api from './api'; // Importa a configuração base do Axios

// Função para buscar todos os profissionais
const getProfissionais = async () => {
  try {
    const response = await api.get('/professionais'); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar profissionais:', error);
    throw error;
  }
};

// Função para buscar um profissional por ID
const getProfissionalById = async (id) => {
  try {
    const response = await api.get(`/professionais/${id}`); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar profissional:', error);
    throw error;
  }
};

// Função para adicionar um profissional
const addProfissional = async (profissionalData) => {
  try {
    const response = await api.post('/professionais', profissionalData); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar profissional:', error);
    throw error;
  }
};

// Função para atualizar um profissional
const updateProfissional = async (id, profissionalData) => {
  try {
    const response = await api.put(`/professionais/${id}`, profissionalData); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar profissional:', error);
    throw error;
  }
};

// Função para remover um profissional
const removeProfissional = async (id) => {
  try {
    await api.delete(`/professionais/${id}`); // Substitua pelo endpoint correto
  } catch (error) {
    console.error('Erro ao remover profissional:', error);
    throw error;
  }
};

// Exporta todas as funções para facilitar o uso no frontend
export default {
  getProfissionais,
  getProfissionalById,
  addProfissional,
  updateProfissional,
  removeProfissional,
};