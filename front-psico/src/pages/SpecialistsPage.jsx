import React, { useState, useEffect } from "react";

function ProfissionaisPage() {
  const [profissionais, setProfissionais] = useState([]);
  const [selectedProfissional, setSelectedProfissional] = useState(null);
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
  const [horarioSelecionado, setHorarioSelecionado] = useState("");

  useEffect(() => {
    setProfissionais([
      { id: 1, nome: "Dr. João Silva", especialidade: "Psicólogo" },
      { id: 2, nome: "Dra. Ana Costa", especialidade: "Terapeuta" },
      { id: 3, nome: "Dr. Carlos Oliveira", especialidade: "Psiquiatra" },
    ]);
  }, []);

  const abrirModal = (profissional) => {
    setSelectedProfissional(profissional);
    setHorariosDisponiveis(["09:00", "10:00", "14:00", "16:00"]);
  };

  const fecharModal = () => {
    setSelectedProfissional(null);
    setHorarioSelecionado("");
  };

  const confirmarAgendamento = () => {
    if (!horarioSelecionado) {
      alert("Por favor, selecione um horário.");
      return;
    }

   
    console.log("Agendamento confirmado para:", selectedProfissional.nome, "às", horarioSelecionado);

    alert(`Consulta com ${selectedProfissional.nome} confirmada para ${horarioSelecionado}`);
    fecharModal();
  };

  return (
    <div className="p-6">
      <h1 className="text-blue-800 text-4xl font-bold mb-8">Profissionais Disponíveis</h1>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-3 text-left">Nome</th>
            <th className="p-3 text-left">Especialidade</th>
            <th className="p-3 text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {profissionais.map((profissional) => (
            <tr key={profissional.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{profissional.nome}</td>
              <td className="p-3">{profissional.especialidade}</td>
              <td className="p-3">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={() => abrirModal(profissional)}
                >
                  Ver Disponibilidade
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
      {selectedProfissional && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Agendar consulta com {selectedProfissional.nome}
            </h2>
            <p className="mb-2">Selecione um horário:</p>
            <div className="flex flex-wrap gap-2">
              {horariosDisponiveis.map((horario, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded ${horarioSelecionado === horario ? "bg-blue-600 text-white" : "bg-gray-300 text-black"}`}
                  onClick={() => setHorarioSelecionado(horario)}
                >
                  {horario}
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={fecharModal}>
                Cancelar
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={confirmarAgendamento}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfissionaisPage;

