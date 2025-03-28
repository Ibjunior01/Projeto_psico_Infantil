import { useState, useEffect } from "react";
import autenticacao from "../services/autenticacao";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verificarAutenticacao = async () => {
      const token = localStorage.getItem("token");
      

      if (!token) {
        setUser(null);
        return;
      }

      try {
        const userData = await autenticacao.getUserData();
        setUser(userData);
      } catch (error) {
        console.error("Erro ao validar token:", error);
        localStorage.removeItem("token");
        setUser(null);
      }
    };

    verificarAutenticacao();
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return { user, login, logout };
};
