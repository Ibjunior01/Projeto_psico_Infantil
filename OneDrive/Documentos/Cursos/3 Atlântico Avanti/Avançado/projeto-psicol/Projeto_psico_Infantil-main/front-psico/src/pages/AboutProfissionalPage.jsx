import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function AboutProfissionalPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  
  const { email} = location.state || {};

  const [profissionalData, setProfissionalData] = useState({
    email: email || "",
    nome:  "", 
    especialidade: "",
    localizacao: "",
    faixaEtaria: "",
    matriculaProfissional: ""
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfissionalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Dados salvos: ", profissionalData);
    // Tem que incluir a lógica de salvar
    setIsEditing(false);
    // Coloca para onde tem que redirecionar
  };

  return (
    <div className="p-6">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Perfil do Profissional</h2>

        <form>
         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            {isEditing ? (
              <input
                type="text"
                name="nome"
                value={profissionalData.nome}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-700">{profissionalData.nome}</p>
            )}
          </div>

         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Especialidade</label>
            {isEditing ? (
              <input
                type="text"
                name="especialidade"
                value={profissionalData.especialidade}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-700">{profissionalData.especialidade}</p>
            )}
          </div>

        
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Localização</label>
            {isEditing ? (
              <input
                type="text"
                name="localizacao"
                value={profissionalData.localizacao}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-700">{profissionalData.localizacao}</p>
            )}
          </div>

         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Faixa Etária</label>
            {isEditing ? (
              <input
                type="text"
                name="faixaEtaria"
                value={profissionalData.faixaEtaria}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-700">{profissionalData.faixaEtaria}</p>
            )}
          </div>

          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Matrícula Profissional</label>
            {isEditing ? (
              <input
                type="text"
                name="matriculaProfissional"
                value={profissionalData.matriculaProfissional}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-700">{profissionalData.matriculaProfissional}</p>
            )}
          </div>

          
          <div className="flex justify-between items-center">
            {isEditing ? (
              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-600 text-white py-2 px-4 rounded"
              >
                Salvar
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 text-white py-2 px-4 rounded"
              >
                Editar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AboutProfissionalPage;