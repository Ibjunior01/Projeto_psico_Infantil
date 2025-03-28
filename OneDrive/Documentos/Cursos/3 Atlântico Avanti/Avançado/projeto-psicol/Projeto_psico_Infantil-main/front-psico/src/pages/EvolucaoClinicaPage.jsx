import React, { useState, useEffect } from "react";

function EvolucaoClinicaPage() {
  const [pacientes, setPacientes] = useState([]);
  const [profissionalId, setProfissionalId] = useState(1); // ID do médico logado
  const [formData, setFormData] = useState({
    pacienteId: "",
    relatoAtendimento: "",
    ajustesNoTratamento: "",
  });

  useEffect(() => {
    fetch("/api/pacientes") // Endpoint para buscar pacientes
      .then((res) => res.json())
      .then((data) => setPacientes(data))
      .catch((err) => console.error("Erro ao buscar pacientes:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("/api/evolucao-clinica", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, profissionalId }),
    })
      .then((res) => res.json())
      .then(() => alert("Evolução clínica cadastrada com sucesso!"))
      .catch((err) => console.error("Erro ao cadastrar evolução clínica:", err));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-blue-800">Cadastro de Evolução Clínica</h1>
      <form onSubmit={handleSubmit} className="bg-blue-900 p-6 text-white rounded-lg">
        <label className="block mb-2">Paciente:</label>
        <select
          name="pacienteId"
          value={formData.pacienteId}
          onChange={handleChange}
          className="w-full p-2 text-black rounded-md mb-4"
          required
        >
          <option value="">Selecione um paciente</option>
          {pacientes.map((paciente) => (
            <option key={paciente.id} value={paciente.id}>{paciente.nome}</option>
          ))}
        </select>

        <label className="block mb-2">Relato do Atendimento:</label>
        <textarea
          name="relatoAtendimento"
          value={formData.relatoAtendimento}
          onChange={handleChange}
          className="w-full p-2 text-black rounded-md mb-4"
          required
        />

        <label className="block mb-2">Ajustes no Tratamento:</label>
        <textarea
          name="ajustesNoTratamento"
          value={formData.ajustesNoTratamento}
          onChange={handleChange}
          className="w-full p-2 text-black rounded-md mb-4"
        />

        <button type="submit" className="p-2 bg-green-600 text-white rounded-md">Salvar Evolução</button>
      </form>
    </div>
  );
}

export default EvolucaoClinicaPage;