import { useState } from "react";
import { useNavigate } from "react-router-dom";
import autenticacao from "../services/autenticacao";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const loginData = await autenticacao.login({ email, senha });
      const perfil = await autenticacao.getUserProfile();

      const tipo = perfil?.tipo?.trim().toUpperCase();
      onLogin(localStorage.getItem("authToken"), perfil.email, tipo);
      console.log("Perfil recebido:", perfil);
      console.log("Tipo normalizado:", tipo);

      // Atualiza o estado da App
      onLogin(loginData.token, perfil.email, tipo);

      // Redireciona imediatamente com base no tipo
      if (tipo === "TIPO1" || tipo === "ADMIN") {
        navigate("/admin", { replace: true });
      } else if (tipo === "TIPO2" || tipo === "PROFISSIONAL") {
        navigate("/sobremimprofissional", { replace: true });
      } else if (tipo === "TIPO3" || tipo === "PACIENTE") {
        navigate("/sobremimpaciente", { replace: true });
      } else {
        navigate("/home", { replace: true });
      }

    } catch (error) {
      console.error("Erro ao logar:", error);
      setError("Credenciais inválidas");
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
