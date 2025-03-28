import api from "./api";

const register = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Erro na requisição de registro:", error.response?.data || error.message);
    throw error;
  }
};

const login = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("Dados recebidos do backend:", response.data);

    if (response.data.token && response.data.tipo) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("tipo", response.data.tipo); // Salvando o tipo do usuário
      return response.data;
    } else {
      throw new Error("Resposta inválida do servidor");
    }
  } catch (error) {
    console.error("Erro na requisição de login:", error.response?.data || error.message);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("tipo"); // Removendo o tipo salvo
};

// Método para obter o usuário logado do localStorage
const getUserType = () => {
  return localStorage.getItem("tipo");
};

const getUserProfile = async () => {
  const response = await api.get("/auth/profile");
  return response.data; 
};


export default { register, login, logout, getUserType, getUserProfile };
