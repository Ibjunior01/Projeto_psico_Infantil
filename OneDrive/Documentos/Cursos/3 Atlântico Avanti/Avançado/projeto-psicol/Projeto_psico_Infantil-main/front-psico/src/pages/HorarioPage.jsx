import { useState, useEffect } from "react";

function HorarioPage() {
  const [dias, setDias] = useState([]);
  const [horarios, setHorarios] = useState({});
  
  useEffect(() => {
    fetch("/api/atendimentos") // Ajuste para sua API real
      .then((res) => res.json())
      .then((data) => {
        const diasFormatados = {};
        data.forEach((atendimento) => {
          const dia = atendimento.dataHora.split("T")[0];
          if (!diasFormatados[dia]) {
            diasFormatados[dia] = [];
          }
          diasFormatados[dia].push(atendimento.dataHora.split("T")[1]);
        });
        setDias(Object.keys(diasFormatados));
        setHorarios(diasFormatados);
      });
  }, []);

  const adicionarDia = () => {
    const novoDia = new Date().toISOString().split("T")[0];
    if (!dias.includes(novoDia)) {
      setDias([...dias, novoDia]);
      setHorarios({ ...horarios, [novoDia]: [] });
    }
  };

  const adicionarHorario = (dia) => {
    setHorarios({ ...horarios, [dia]: [...(horarios[dia] || []), ""] });
  };

  const alterarHorario = (dia, index, valor) => {
    const novosHorarios = { ...horarios };
    novosHorarios[dia][index] = valor;
    setHorarios(novosHorarios);
  };

  const salvarHorarios = () => {
    const atendimentos = dias.flatMap((dia) =>
      (horarios[dia] || []).map((hora) => ({
        pacienteId: 1, // Essa parte precisa ajustar
        profissionalId: 1, //Precisa ajustar
        dataHora: `${dia}T${hora}`,
        status: "Agendado",
      }))
    );
    
    fetch("/api/atendimentos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(atendimentos),
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-blue-800">Horários Disponíveis</h1>
      <div className="bg-blue-900 p-6 text-white rounded-lg">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold">Dias</h3>
            {dias.map((dia, index) => (
              <div key={index} className="mt-2">
                <span>{dia}</span>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {(horarios[dia] || []).map((horario, i) => (
                    <input
                      key={i}
                      type="time"
                      value={horario}
                      onChange={(e) => alterarHorario(dia, i, e.target.value)}
                      className="p-2 text-black rounded-md"
                    />
                  ))}
                </div>
                <button
                  onClick={() => adicionarHorario(dia)}
                  className="mt-2 p-2 bg-indigo-600 text-white rounded-md"
                >
                  + Adicionar Horário
                </button>
              </div>
            ))}
            <button onClick={adicionarDia} className="mt-4 p-2 bg-green-600 text-white rounded-md">
              + Adicionar Dia
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={salvarHorarios} className="p-2 bg-green-600 text-white rounded-md">
          Salvar
        </button>
      </div>
    </div>
  );
}

export default HorarioPage;