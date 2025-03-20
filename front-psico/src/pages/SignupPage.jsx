
import React, { useState } from "react";

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log(`Cadastro feito com sucesso! Nome: ${name}, Email: ${email}`);
    //Lógica de cadastro
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Cadastro</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite seu nome"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite seu email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite sua senha"
          />
        </div>
        <button
          onClick={handleSignup}
          className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
