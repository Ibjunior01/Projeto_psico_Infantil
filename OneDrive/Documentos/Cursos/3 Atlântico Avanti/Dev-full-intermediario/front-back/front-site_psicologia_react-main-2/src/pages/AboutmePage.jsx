import React, { useState } from "react";

function AboutmePage() {
  const [clientData, setClientData] = useState({
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "123-456-7890",
    address: "Rua das Flores, 123",
    message: "", 
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
    setIsEditing(false);
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
                name="name"
                value={clientData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-700">{clientData.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">E-mail</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={clientData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-700">{clientData.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Telefone</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={clientData.phone}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-700">{clientData.phone}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Endereço</label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={clientData.address}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-700">{clientData.address}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Mensagem</label>
            {isEditing ? (
              <textarea
                name="message"
                value={clientData.message}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded h-24"
              />
            ) : (
              <p className="text-gray-700">{clientData.message || "Nenhuma mensagem adicionada."}</p>
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

export default AboutmePage;