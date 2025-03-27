import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import autenticacao from "../services/autenticacao";
import userUsuarios from "../services/Usuarios";

 
function Login() {
  // Estado para guardar o email digitado
  const [email, setEmail] = useState("");

  // Estado para guardar a senha digitada
  const [senha, setSenha] = useState("");

  // Estado para mensagens de erro
  const [error, setError] = useState("");

  // Hook para redirecionar o usuário após o login
  const navigate = useNavigate();

  // Função chamada quando o formulário é enviado
  const handleLogin = async (e) => {
    e.preventDefault(); // Evita recarregar a página
    setError(""); // Limpa o erro anterior

    try {
      // Envia o email e senha para o backend e salva o token no localStorage
      await authService.login({ email, senha });

      // Após o login, busca o perfil do usuário
      const response = await userService.getUserProfile();
      const tipo = response.data.tipo; // TIPO1 = admin, TIPO2 = usuário comum

      // Redireciona para a rota certa com base no tipo de usuário
      if (tipo === "TIPO1") {
        navigate("/admin"); // Usuário administrador
      } else {
        navigate("/todos"); // Usuário comum
      }
    } catch (error) {
      console.error("Erro ao logar:", error);
      setError("Credenciais inválidas"); // Mostra mensagem de erro
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-400 to-blue-700">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;








