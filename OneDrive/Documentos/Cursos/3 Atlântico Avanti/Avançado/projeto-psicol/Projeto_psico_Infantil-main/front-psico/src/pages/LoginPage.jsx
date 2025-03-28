import React, { useState } from "react";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('cliente'); 
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setError(""); 
    onLogin(role, email); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-400 to-blue-700">


      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Tipo de Usuário</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            >
              <option value="cliente">Cliente</option>
              <option value="medico">Médico</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;



