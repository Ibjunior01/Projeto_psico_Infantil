import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function AboutmePage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Dados do usuário passados via state (como o email do cadastro anterior)
  const { email } = location.state || {};

  const [clientData, setClientData] = useState({
    nome: "", 
    email: email || "",     // Email já cadastrado
    dataNascimento: "",
    principalQueixa: "",
    historicoFamiliar: "",
    usoMedicamentos: "",
    objetivoTerapia: ""
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Dados salvos: ", clientData);
    // Tem que incluir a lógica de salvar
    setIsEditing(false);
    // Coloca para onde tem que redirecionar
  };

  return (
    <div className="p-6">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Perfil do Cliente</h2>

        <form>
         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            {isEditing ? (
              <input
                type="text"
                name="nome"
                value={clientData.nome}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-700">{clientData.nome}</p>
            )}
          </div>

         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={clientData.email}
              readOnly
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>

         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Data de Nascimento</label>
            {isEditing ? (
              <input
                type="date"
                name="dataNascimento"
                value={clientData.dataNascimento}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-700">{clientData.dataNascimento}</p>
            )}
          </div>

          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Principal Queixa</label>
            {isEditing ? (
              <input
                type="text"
                name="principalQueixa"
                value={clientData.principalQueixa}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-700">{clientData.principalQueixa}</p>
            )}
          </div>

          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Histórico Familiar</label>
            {isEditing ? (
              <textarea
                name="historicoFamiliar"
                value={clientData.historicoFamiliar}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded h-24"
              />
            ) : (
              <p className="text-gray-700">{clientData.historicoFamiliar || "Nenhum histórico informado."}</p>
            )}
          </div>

          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Uso de Medicamentos</label>
            {isEditing ? (
              <input
                type="text"
                name="usoMedicamentos"
                value={clientData.usoMedicamentos}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-700">{clientData.usoMedicamentos || "Nenhum medicamento informado."}</p>
            )}
          </div>

          {/* Objetivo da Terapia */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Objetivo da Terapia</label>
            {isEditing ? (
              <input
                type="text"
                name="objetivoTerapia"
                value={clientData.objetivoTerapia}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-700">{clientData.objetivoTerapia || "Nenhum objetivo informado."}</p>
            )}
          </div>

          {/* Botões de edição e salvar */}
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

export default AboutmePage;